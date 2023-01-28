import axios from "axios";
import { accountBackendUrl } from "../utils/urls";
export default class AuthHandler {
    static clearAllTokens = () => {
        window.localStorage.setItem("refreshToken", JSON.stringify(null));
        window.localStorage.removeItem("refreshToken");
        document.cookie = "access_token=null;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
    };

    static getRefreshToken = () => {
        return window.localStorage.getItem("refreshToken");
    };

    static getCookie = (cname) => {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };

    // static aysncGetAccessToken = async () => {
    //     const cookie = this.getCookie("access_token");

    //     if (cookie != null && cookie !== "") return cookie;

    //     // Access token is null so try to fetch access token
    //     let access_token = await this.asyncFetchAcessToken();

    //     // Access token may or may not be null depending on whether access token exists
    //     return access_token;
    // };

    static asyncSetRefreshToken = async (token) => {
        window.localStorage.setItem("refreshToken", JSON.stringify(token));
        let res = await this.aysncGetAccessToken();

        return res;
    };

    static setAccessToken = (token) => {
        if (token != null) {
            let date = new Date();
            date.setTime(date.getTime() + 780000);
            // let expires = "expires=" + date.toUTCString();
            // document.cookie = `access_token=${token};${expires};path=/`;
            window.localStorage.setItem("accessToken",token)
        }
    };

    static aysncGetAccessToken = async (refreshToken) => {
        
        if (refreshToken!= null) {
            axios.post(`${accountBackendUrl}/auth/refresh`, {
                refreshToken: refreshToken,
            }).then((response)=>{
                console.log("Acces: ",response)
                window.localStorage.setItem("accessToken",response.data.accessToken)
            },error=>{
                console.log(error)
            })
        }

    };
}