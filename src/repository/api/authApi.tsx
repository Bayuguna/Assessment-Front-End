import { AuthInterface } from "../interface/authInterface";
import { Api } from "./api";


export class AuthApi implements AuthInterface{
    api = new Api();

    login(data: any) {
        return new Promise((resolve, reject) => {
            this.api.post('/auth/login', data).then((res: any) => {
                console.log(res)
                resolve(res);
            }).catch((err: any) => {
                reject(err);
            })
        });
    };

    register(data: any) {
        return new Promise((resolve, reject) => {
            this.api.post('/auth/register', data).then((res: any) => {
                resolve(res);
            }).catch((err: any) => {
                reject(err);
            })
        });
    };

}