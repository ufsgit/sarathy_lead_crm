import { Component, OnInit, Input, Injectable } from "@angular/core";
import { environment } from "../../environments/environment.js";
import {
	HttpClient,
	HttpHeaders,
	HttpErrorResponse,
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { AnimationKeyframesSequenceMetadata } from "@angular/animations";

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
@Injectable({
	providedIn: "root",
})
export class Files_Upload_Service {
	constructor(private http: HttpClient) {
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json",
			}),
		};
	}
	AnimationKeyframesSequenceMetadata;

	Save_Student_Document(
		Student_Documents_,
		ImageFile_Doc: File[],
		Document_File_Array: any[]
	) {
		// debugger;
		const postData = new FormData();
		postData.append("Student_Document_Id", Student_Documents_.Student_Document_Id);
		postData.append("Student_Id", Student_Documents_.Student_Id);
		postData.append("File_Name", Student_Documents_.File_Name);
		postData.append("Description", Student_Documents_.Description);
		postData.append("Document_Id", Student_Documents_.Document_Id);
		postData.append("Document_Name", Student_Documents_.Document_Name);
		var i = 0;
		// debugger;
		if (ImageFile_Doc != undefined) {
			for (const img of ImageFile_Doc) {
				postData.append("myFile", img);
				postData.append("ImageFile_Doc", i.toString());
				i = i + 1;
			}
		}
		// debugger;
		postData.append("Document_File_Array", i.toString());


		return this.http.post(environment.BasePath + "Student/Save_Student_Document", postData);
	}
	Get_Student_Document(Student_Id) {
		return this.http.get(
			environment.BasePath +
			"Student_Document/Get_Student_Document/" +
			Student_Id
		);
	}
	Delete_Student_Document(Student_Document_Id) {
		return this.http.get(
			environment.BasePath +
			"Student_Document/Delete_Student_Document/" +
			Student_Document_Id
		);
	}
	Save_University_Document(
		University_Documents_: any,
		DocumentFile: FileList | null,
		Document_File_Array: any[]
	) {
		// debugger;
		const postData = new FormData();
		postData.append("University_Document_Id", University_Documents_.University_Document_Id);
		postData.append("University_Id", University_Documents_.University_Id);
		postData.append("File_Name", University_Documents_.File_Name);
		postData.append("Description", University_Documents_.Description);
		postData.append("Document_Id", University_Documents_.Document_Id);
		postData.append("Document_Name", University_Documents_.Document_Name);

		var i = 0;
		// debugger;

		// Convert FileList to array when appending to FormData
		if (DocumentFile != undefined && DocumentFile.length > 0) {
			for (let j = 0; j < DocumentFile.length; j++) {
				const file = DocumentFile.item(j); // Use .item() method for FileList
				if (file) {
					postData.append("myFile", file);
					postData.append("DocumentFile", i.toString());
					i = i + 1;
				}
			}
		}
		// debugger;
		postData.append("Document_File_Array", i.toString());

		return this.http.post(environment.BasePath + "University/Save_University_Document", postData);
	}

	// uploadFile(file) {

	// 	const contentType = file.type;
	// 	const bucket = new S3(
	// 		  {
	// 			  accessKeyId: ' AKIAX37YDYI4JHREVXGV',
	// 			  secretAccessKey: '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',
	// 			  region: 'us-east-2'
	// 		  }
	// 	  );
	// 	  const params = {
	// 		  Bucket: 'ufsnabeelphotoalbum',
	// 		  Key:  file.name,
	// 		  Body: file,
	// 		  ACL: 'public-read',
	// 		  ContentType: contentType
	// 	  };
	// 	  bucket.upload(params, function (err, data) {

	// 		  if (err) {
	// 			  console.log('There was an error uploading your file: ', err);
	// 			  return false;
	// 		  }
	// 		  console.log('Successfully uploaded file.', data);
	// 		  return true;
	// 	  });





	// }
	// Service method for uploading university file to AWS
	uploadFileUniversity(file: File, University_Id: number): Promise<string> {
		console.log('file: ', file);
		let filetype = file.name.split('.').pop();
		const currentDate = new Date();
		const formattedDate = currentDate.toISOString().replace(/[-:.TZ]/g, "").replace("T", "");

		return new Promise((resolve, reject) => {
			const contentType = file.type;
			// Create a more standardized key for university documents
			const randomString = Math.random().toString(36).substring(2, 15);
			const key = `Aimbrits/University/${University_Id}/${randomString}_${formattedDate}.${filetype}`;
			console.log('key: ', key);

			const bucket = new S3({
				accessKeyId: "AKIAX37YDYI4JHREVXGV",
				secretAccessKey: "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",
				region: "us-east-2",
			});

			const params = {
				Bucket: "ufsnabeelphotoalbum",
				Key: key,
				Body: file,
				ACL: "public-read", // This is crucial for public access
				ContentType: contentType,
			};

			bucket.upload(params, function (err, data) {
				if (err) {
					console.log("There was an error uploading your file: ", err);
					reject(err);
				} else {
					console.log("Successfully uploaded file.", data);
					// Return the key for database storage
					console.log("File URL:", `https://ufsnabeelphotoalbum.s3.us-east-2.amazonaws.com/${key}`);
					resolve(key);
				}
			});
		});
	}
	uploadFile(file: File, Student_Id: number): Promise<string> {
		console.log('file: ', file);
		let filetype = file.name.split('.').pop();
		const currentDate = new Date();
		const formattedDate = currentDate.toISOString().replace(/[-:.TZ]/g, "").replace("T", "");

		return new Promise((resolve, reject) => {
			const contentType = file.type;
			// Create a more standardized key
			const randomString = Math.random().toString(36).substring(2, 15);
			const key = `Aimbrits/${Student_Id}/${randomString}_${formattedDate}.${filetype}`;
			console.log('key: ', key);

			const bucket = new S3({
				accessKeyId: "AKIAX37YDYI4JHREVXGV",
				secretAccessKey: "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",
				region: "us-east-2",
			});

			const params = {
				Bucket: "ufsnabeelphotoalbum",
				Key: key,
				Body: file,
				ACL: "public-read", // This is crucial for public access
				ContentType: contentType,
			};

			bucket.upload(params, function (err, data) {
				if (err) {
					console.log("There was an error uploading your file: ", err);
					reject(err);
				} else {
					console.log("Successfully uploaded file.", data);
					// Return the full URL instead of just the key
					const fileUrl = `https://ufsnabeelphotoalbum.s3.us-east-2.amazonaws.com/${key}`;
					console.log("File URL:", fileUrl);
					resolve(key);  // Or resolve(fileUrl) if you prefer storing the full URL
				}
			});
		});
	}


	//for upload progress   
	// bucket.upload(params).on('httpUploadProgress', function (evt) {
	// 		  console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
	// 	  }).send(function (err, data) {
	// 		  if (err) {
	// 			  console.log('There was an error uploading your file: ', err);
	// 			  return false;
	// 		  }
	// 		  console.log('Successfully uploaded file.', data);
	// 		  return true;
	// 	  });


}
