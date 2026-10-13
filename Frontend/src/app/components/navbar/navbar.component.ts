import { Component, OnInit, ElementRef } from "@angular/core";
import {
	Location,
	LocationStrategy,
	PathLocationStrategy,
} from "@angular/common";
import { UserData } from "../../services/user-data";
import { Router } from "@angular/router";
// import { ROUTES } from '../sidebar/sidebar.component';
import { MatButtonModule, MatMenuModule } from "@angular/material";
import * as io from "socket.io-client";
import { Observable } from "rxjs";
import { Student_Service } from "../../services/Student.Service";
import { MomentDateAdapter } from "@angular/material-moment-adapter";

import {
	DateAdapter,
	MAT_DATE_FORMATS,
	MAT_DATE_LOCALE,
} from "@angular/material/core";
import * as _moment from "moment";
import { default as _rollupMoment } from "moment";
import { Notification_Class } from "../../models/Notification_Class";
import { DialogBox_Component } from "../../modules/admin/DialogBox/DialogBox.component";
import { Get_Page_Permission } from "../../components/sidebar/sidebar.component";
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA,
	MatDialogConfig,
} from "@angular/material";
import { environment } from "../../../environments/environment";
import { AuthenticationService } from "../../services/Authenticatiuon.Service";
import { Chat_Window_Service } from "../../services/Chat_Window.Service";
// import { debug } from "console";
declare const $: any;
declare interface RouteInfo {
	path: string;
	title: string;
	icon: string;
	class: string;
	Menu_Id: string;
	Save: string;
	Delete: string;
	View: string;
	Edit: string;
	Menu_Type: boolean;
}

declare interface PointerInfo {
	Root_Index: number;
}
export var ROUTES: RouteInfo[] = [];
export var Pointer_Table: number[] = [];
export const MY_FORMATS = {
	parse: {
		dateInput: "DD/MM/YYYY",
	},
	display: {
		dateInput: "DD/MM/YYYY",
		monthYearLabel: "MMM YYYY",
		dateA11yLabel: "DD/MM/YYYY",
		monthYearA11yLabel: "MMMM YYYY",
	},
};
const moment = _rollupMoment || _moment;
@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.css"],
	providers: [
		{
			provide: DateAdapter,
			useClass: MomentDateAdapter,
			deps: [MAT_DATE_LOCALE],
		},
		{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
	],
})
export class NavbarComponent implements OnInit {
	//private url = 'http://regnewapi.trackbox.co.in:3646/'
	url = environment.NotificationPath;
	private socket;
	private listTitles: any[];
	location: Location;
	mobile_menu_visible: any = 0;
	private toggleButton: any;
	private sidebarVisible: boolean;
	uname: string;
	Notification_Count: number = 0;
	u_id: number;
	menuItems: any[];
	menuArray: any[];
	issLoading: boolean = true;
	year: any;
	month: any;
	day: any;
	date: any;
	Hours: any;
	Minutes: any;
	Seconds: any;
	Search_ToDate: Date = new Date();
	Notification_Data: any;
	Notification_Temp: Notification_Class = new Notification_Class();
	Total_Counts: number = 0;
	Student_Task_Count = 0;
	Aheight: number = 50;
	Count_Notification: boolean = false;
	Notification_List: boolean = false;
	Edit_Page_Permission: any;
	studentid_n: number;
	Updated_Serial_No_: number;
	Fetched_Serial_No: number;
	submenus: boolean = false;
	submenus1 :boolean = false;
	submenus2 :boolean = false;
	submenus3 : boolean = false;
	submenus4 : boolean = false;
	submenus21: boolean = false;
	chat_count_view: boolean = false;
	Chat_Data: any;
	Chat_Count_: number = 0;
	Current_Channel_Id: number = 0;
	constructor(
		location: Location,
		public userData: UserData,
		private element: ElementRef,
		private router: Router,
		public dialogBox: MatDialog,
		public auth: AuthenticationService,
		public Student_Service_: Student_Service,
		public Chat_Window_Service_: Chat_Window_Service,
	) {
		this.location = location;
		this.sidebarVisible = false;
		var retrievedObject = localStorage.getItem("Routes_Temp");
		ROUTES = JSON.parse(retrievedObject);
		this.menuItems = ROUTES.filter((menuItem) => menuItem);
		console.log("this.menuItems",this.menuItems);
		
		var retrievedPointer = localStorage.getItem("Pointer_Temp");
		Pointer_Table = JSON.parse(retrievedPointer);
		// this.menuArray = Pointer_Table.filter(menuItem => menuItem);
		this.menuArray = Pointer_Table;
		this.socket = io(this.url, {
			transports: ["websocket"],
			auth: {
				token: localStorage.getItem("token"),
			},
		});
		this.socket = io(this.url);
	}
	getMessages = () => {
		return Observable.create((observer) => {
			this.socket.on("new-message", (message) => {
				// console.log(message);
				 //alert(message);
				observer.next(message);
			});
		});
	};
	sendmsg() {
		this.socket.emit("new-message", "jid");
	}
	public sendMessage(message) {
		console.log(message);
		this.socket.emit("new-message", message);
	}
	logout() {
		this.userData.logout();
		// localStorage.removeItem("Routes_Temp");
		ROUTES = [];
		Pointer_Table = [];
		localStorage.setItem("Routes_Temp", JSON.stringify(ROUTES));
		localStorage.setItem("Pointer_Temp", JSON.stringify(Pointer_Table));
		localStorage.removeItem("Login_User");
		this.router.navigateByUrl("/auth/login");
	}
	ngOnInit() {
		this.uname = localStorage.getItem("uname");
		this.u_id = Number(localStorage.getItem("Login_User"));
		console.log('this.u_id : ', this.u_id );
		this.Updated_Serial_No_ = Number(localStorage.getItem("Updated_Serial_Id"));
		this.Notification_Data = [];
		// this.Notification_Count = Number(
		//  localStorage.getItem("Notification_Count")
		// );
		this.Current_Channel_Id = Number(
			localStorage.getItem("Current_Channel_Id")
		);
		if (this.Chat_Count_ > 0) {
			this.chat_count_view = true;
		}
		this.menuItems = ROUTES.filter((menuItem) => menuItem);
		this.listTitles = ROUTES.filter((listTitle) => listTitle);

		const navbar: HTMLElement = this.element.nativeElement;

		this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
		this.router.events.subscribe((event) => {
			this.sidebarClose();
			var $layer: any = document.getElementsByClassName("close-layer")[0];
			if ($layer) {
				$layer.remove();
				this.mobile_menu_visible = 0;
			}
		});
	this.Chat_Count();
		this.getMessages().subscribe((message: any) => {
			console.log('message',message);
			console.log(this.u_id);
			//  this.messages.push(message);
			//alert(message);

var tempuser_id = "m" + this.u_id + "m";
			this.Current_Channel_Id = Number(
				localStorage.getItem("Current_Channel_Id")
			);
			// tempuser_id='oi'
			if (
				message.Notification_Type_Name == "Chat" &&
				Number(this.u_id) != message.From_User
			) {
				;
				var k = message.To_User_List.includes(tempuser_id);
				if (k) {
					let currentUrl = this.router.url;
					console.log('currentUrl: ', currentUrl);

					if (
						currentUrl != "/Chat_Window" ||
						message.Channel_Id != this.Current_Channel_Id
					) {
						this.Chat_Count_++;
						this.chat_count_view = true;
					} else if (
						message.Channel_Id == this.Current_Channel_Id ||
						currentUrl == "/Chat_Window"
					) {
						this.Chat_Count_ = this.Chat_Count_;
					}
					// if(this.Chat_Count_!=0){this.chat_count_view=true}
					// else(this.chat_count_view=false)
				}
			}

			if (
				message.Notification_Type_Name == "read_msg" &&
				Number(this.u_id) == message.From_User
			) {
				;
			
				if (this.Chat_Count_)
					this.Chat_Count_ = this.Chat_Count_ - message.Msg_Count;
				if (this.Chat_Count_ != 0 && this.Chat_Count_ != null) {
					this.chat_count_view = true;
				} else this.chat_count_view = false;
			}
			if (Number(this.u_id) == message.To_User) {
				// if (message.Notification_Type_Name == "Task") {
				// 	this.Student_Task_Count = message.Task_Count;
				// } else 
				if (message.Notification_Type_Name == "User Details Updated") {
					this.logout();
				} 
				else {
					
					this.Student_Task_Count = message.Task_Count;

					this.Notification_Count = Number(this.Notification_Count) + 1;
					this.Notification_Temp.Student_Name = message.Student_Name;
					this.Notification_Temp.From_User_Name = message.From_User_Name;
					this.Notification_Temp.Notification_Type_Name =
						message.Notification_Type_Name;
					this.Notification_Temp.Entry_Type = message.Entry_Type;
					this.Notification_Temp.Notification_Id = message.Notification_Id;
					this.Notification_Temp.Student_Id = message.Student_Id;

					// this.Notification_Data.unshift(Object.assign({}, this.Notification_Temp));
					this.Notification_Data.unshift(
						Object.assign(
							{},
							{
								Notification_Type_Name: message.Notification_Type_Name,
								From_User_Name: message.From_User_Name,
								Student_Name: message.Student_Name,
								Entry_Type: message.Entry_Type,
								Notification_Id: message.Notification_Id,
								Student_Id: message.Student_Id,
							}
						)
					);
					this.Count_Notification = false;
					//this.Get_All_Notification();
					if (this.Notification_Count < 4)
						this.Aheight = 52 * (this.Notification_Count + 1);
					else this.Aheight = 52 * 10;
				}
			}

			// if (this.Notification_Data.length > 10)
			//  this.Notification_Data.splice(-1, 1);
		});

		//localStorage.setItem("Notification_Count", "0");
		this.Get_All_Notification();

		 if (!this.menuArray[200]) {
    console.error("Course route is missing in menuArray");
  }
	}

	sidebarOpen() {
		const toggleButton = this.toggleButton;
		const body = document.getElementsByTagName("body")[0];
		setTimeout(function () {
			// toggleButton.classList.add('toggled');
		}, 500);

		body.classList.add("nav-open");

		this.sidebarVisible = true;
	}
	sidebarClose() {
		const body = document.getElementsByTagName("body")[0];
		// this.toggleButton.classList.remove('toggled');
		this.sidebarVisible = false;
		body.classList.remove("nav-open");
	}
	sidebarToggle() {
		// const toggleButton = this.toggleButton;
		// const body = document.getElementsByTagName('body')[0];
		var $toggle = document.getElementsByClassName("navbar-toggler")[0];

		if (this.sidebarVisible === false) {
			this.sidebarOpen();
		} else {
			this.sidebarClose();
		}
		const body = document.getElementsByTagName("body")[0];

		if (this.mobile_menu_visible == 1) {
			// $('html').removeClass('nav-open');
			body.classList.remove("nav-open");
			if ($layer) {
				$layer.remove();
			}
			setTimeout(function () {
				$toggle.classList.remove("toggled");
			}, 400);

			this.mobile_menu_visible = 0;
		} else {
			setTimeout(function () {
				$toggle.classList.add("toggled");
			}, 430);

			var $layer = document.createElement("div");
			$layer.setAttribute("class", "close-layer");

			if (body.querySelectorAll(".main-panel")) {
				document.getElementsByClassName("main-panel")[0].appendChild($layer);
			} else if (body.classList.contains("off-canvas-sidebar")) {
				document
					.getElementsByClassName("wrapper-full-page")[0]
					.appendChild($layer);
			}

			setTimeout(function () {
				$layer.classList.add("visible");
			}, 100);

			$layer.onclick = function () {
				//asign a function
				body.classList.remove("nav-open");
				this.mobile_menu_visible = 0;
				$layer.classList.remove("visible");
				setTimeout(function () {
					$layer.remove();
					$toggle.classList.remove("toggled");
				}, 400);
			}.bind(this);

			body.classList.add("nav-open");
			this.mobile_menu_visible = 1;
		}
	}
	isMobileMenu() {
		if ($(window).width() > 991) {
			return false;
		}
		return true;
	}
	isDesktopMenu() {
		if ($(window).width() < 991) {
			return false;
		}
		return true;
	}

	getView() {
		return "hai";
		var titlee = this.location.prepareExternalUrl(this.location.path());
		if (titlee.charAt(0) === "#") {
			titlee = titlee.slice(1);
		}

		for (var item = 0; item < this.listTitles.length; item++) {
			if (this.listTitles[item].path === titlee) {
				return this.listTitles[item].title;
			}
		}
		return "Dashboard";
	}
	getTitle() {
		// return ("hai");
		var titlee = this.location.prepareExternalUrl(this.location.path());
		if (titlee.charAt(0) === "#") {
			titlee = titlee.slice(1);
		}

		for (var item = 0; item < this.listTitles.length; item++) {
			if (this.listTitles[item].path === titlee) {
				return this.listTitles[item].title;
			}
		}
		return "Dashboard";
	}

	Reset_Notification_Count() {
		this.issLoading = true;
		this.Student_Service_.Reset_Notification_Count(this.u_id).subscribe(
			(Rows) => {
				this.Notification_Count = Rows[0][0].Notification_Count_;

				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	Get_Notification() {
		this.router.navigateByUrl("Notification");
	
	}
	Get_All_Notification() {
		var User_Id = 0;
		this.Student_Service_.Get_All_Notification(
			moment(this.Search_ToDate).format("YYYY-MM-DD"),
			User_Id,
			this.u_id
		).subscribe((Rows) => {
			
			 this.Notification_Data = Rows[0];
			this.Student_Task_Count = Rows[2][0].Student_Task_Count;
			this.Fetched_Serial_No = Rows[3][0].Updated_Serial_Id;
			if (this.Fetched_Serial_No == undefined || this.Fetched_Serial_No == null)
				this.Fetched_Serial_No = 0;			
			this.Total_Counts = Rows[1][0].Counts;
			this.Notification_Count = this.Total_Counts;
			this.Count_Notification = false;
			if (this.Total_Counts < 4) this.Aheight = 52 * (this.Total_Counts + 1);
			else this.Aheight = 52 * 10;
			if (this.Updated_Serial_No_ != this.Fetched_Serial_No) {
				this.logout();
				return;
			}
		});
	}
	update_Read_Status(Notification_Id) {
		this.Student_Service_.update_Read_Status(
			this.u_id,
			Notification_Id
		).subscribe((Rows) => {
			this.Notification_Data = Rows[0];
		});
	}

	Notification_Item_Click(Notification_Item) {
		
		if (
			(Notification_Item.Entry_Type >= 1 &&
				Notification_Item.Entry_Type <= 3) ||
			Notification_Item.Entry_Type == 5 ||
			Notification_Item.Entry_Type == 6 ||
			Notification_Item.Entry_Type == 12
		) {
			localStorage.setItem("Student_Id", Notification_Item.Student_Id);
			this.Edit_Page_Permission = Get_Page_Permission(5);
			if (this.Edit_Page_Permission == undefined) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "No permission to view", Type: "2" },
				});
			} else if (this.Edit_Page_Permission.View == true) {
				let currentUrl = this.router.url;
				this.router
					.navigateByUrl("/", { skipLocationChange: true })
					.then(() => {
						this.router.navigate(["/Student"]);
					});
			} else {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "No permission to view", Type: "2" },
				});
			}
		} else if (Notification_Item.Entry_Type == 4) {
			let currentUrl = this.router.url;
			this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
				this.router.navigate(["/Receipt_Confirmation"]);
			});
		}
		// else if (Notification_Item.Entry_Type==5 || Notification_Item.Entry_Type==6 || Notification_Item.Entry_Type==12)
		// {
		//  localStorage.setItem("Student_Id", Notification_Item.Student_Id);
		//  let currentUrl = this.router.url;
		//  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
		//      this.router.navigate(['/Student']);
		//  });
		// }
		else if (
			Notification_Item.Entry_Type == 7 ||
			Notification_Item.Entry_Type == 11
		) {
			let currentUrl = this.router.url;
			this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
				this.router.navigate(["/Refund_Confirmation"]);
			});
		} else if (Notification_Item.Entry_Type == 8) {
			let currentUrl = this.router.url;
			this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
				this.router.navigate(["/Student_Task"]);
			});
		} else if (
			Notification_Item.Entry_Type == 9 ||
			Notification_Item.Entry_Type == 10
		) {
			let currentUrl = this.router.url;
			this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
				this.router.navigate(["/Refund_Approval"]);
			});
		}
		else if (
			Notification_Item.Entry_Type  ==17
		) {
			let currentUrl = this.router.url;
			this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
				this.router.navigate(["/Notification"]);
			});
		}
	}
	Edit_Lead(Lead_Id, i) {
		localStorage.setItem("Student_Id", Lead_Id);
		this.Edit_Page_Permission = Get_Page_Permission(5);
		if (this.Edit_Page_Permission == undefined) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "No permission to view", Type: "2" },
			});
		} else if (this.Edit_Page_Permission.View == true) {
			let currentUrl = this.router.url;
			this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
				this.router.navigate(["/Student"]);
			});
		}
		// this.router.navigateByUrl("/Student");
		else {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "No permission to view", Type: "2" },
			});
		}
	}
	// enlargeIcon(iconContainer) {
	// 	iconContainer.querySelector('i').style.fontSize = '30px';
	//   }
	  
	//    resetIcon(iconContainer) {
	// 	iconContainer.querySelector('i').style.fontSize = '24px';
	//   }
	//   enlargeIcon(iconElement: ElementRef) {
	// 	const icon = iconElement.nativeElement;
	// 	icon.style.fontSize = '2rem'; // Change this value to increase or decrease the size of the icon
	//   }

	// enlargeIcon(iconElement: ElementRef) {
	// 	const icon = iconElement.nativeElement;
	// 	icon.style.fontSize = '2rem';
	//   }
	
	//   resetIcon(iconElement: ElementRef) {
	// 	const icon = iconElement.nativeElement;
	// 	icon.style.fontSize = '1rem';
	//   }
	
	//   resetIcons() {
	// 	this.icon.forEach(icon => {
	// 	  this.resetIcon(icon);
	// 	});
	//   }






	submenu(){
        
		this.submenus=true;
		}

		submenu_click(){
			this.submenus=false;
			this.submenus1=false;
			this.submenus2=false;
			this.submenus3 = false;
			this.submenus4 =false;
			this.submenus21 = false;
			


		}

		submenuz(){
			this.submenus1=true;

			this.submenus=false;
			//this.submenus1=false;
			this.submenus2=false;
			this.submenus3 = false;
			this.submenus4 =false;
			this.submenus21 = false;
		}

		submenuz2(){
			this.submenus2=true;

			this.submenus=false;
			this.submenus1=false;
			//this.submenus2=false;
			this.submenus3 = false;
			this.submenus4 =false;
			this.submenus21 = false;
		}

		submenuz3(){
			this.submenus3=true;

			this.submenus=false;
			this.submenus1=false;
			this.submenus2=false;
			//this.submenus3 = false;
			this.submenus4 =false;
			this.submenus21 = false;

		}

		submenuz4(){
			this.submenus4=true;

			this.submenus=false;
			this.submenus1=false;
			this.submenus2=false;
			this.submenus3 = false;
			//this.submenus4 =false;
			this.submenus21 = false;
		}
	
		submenuz5() {
			this.submenus21 = true;
	
			this.submenus2 = false;
			this.submenus3 = false;
			this.submenus4 = false;
			this.submenus = false;
			this.submenus1 = false;
			
		}

		
		submenuz6() {
			this.submenus21 = false;
	
			this.submenus2 = false;
			this.submenus3 = false;
			this.submenus4 = false;
			this.submenus = true;
			this.submenus1 = false;
			
		}
		Chat_Count() {
			this.issLoading = true;
			console.log('this.Notification_Temp : ', this.Notification_Temp);
			
			const Notification_Id = this.Notification_Temp.Notification_Id || 0;
			this.Student_Service_.Chat_Count(this.u_id,Notification_Id).subscribe(
				(Rows) => {
					this.Chat_Data = Rows[0];
					this.Chat_Count_ = this.Chat_Data[0].Chat_Count;
					if (this.Chat_Data[0].Chat_Count > 0) {
						this.chat_count_view = true;
					}
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		}
	
		Get_Chats(Channel_Id) {
			this.issLoading = true;
			this.Chat_Window_Service_.Get_Chats(Channel_Id, this.u_id).subscribe(
				(Rows) => {
					// if (Rows[0]!=null){
					// 	this.messages=Rows[0].slice().reverse();
					// }else this.messages= []
					// this.Load_Channels()
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		}
	}
	  
	

