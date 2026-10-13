import { Injectable } from '@angular/core';
import { BaseApi } from './_BaseApi.Service';
import { LoginInterface } from '../interfaces/Genereic-Interface';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(private http: BaseApi) {
    }
    Login(userData: LoginInterface): Promise<any> {

        return this.http.get('Login/Login_Check/' + userData.userName + '/' + userData.password);
        // return this.http.get('Login/Login_Check/', +userData.userName +'/' + userData.password);
    }

    login_with_otp(userData: LoginInterface): Promise<any> {

        // debugger;
        return this.http.get('Login/login_with_otp/' + userData.otp + '/' + userData.Login_user_id);
        // return this.http.get('Login/Login_Check/', +userData.userName +'/' + userData.password);
    }
}
