import AuthHandler from "./authHandler";
import { authBaseURL } from "../utils/urls";

export default class AccountHandler {
    static logInUser = () => {
        if (!this.isUserLoggedIn()) {
            window.location.href = `${authBaseURL}/auth/login?redirect_to=` + window.location;
        }

    };

    static logOutUser = () => {
        if (this.isUserLoggedIn()) {
            AuthHandler.clearAllTokens();
            window.localStorage.removeItem("accessToken");
            window.location.href = `${authBaseURL}/auth/logout?redirect_to=` + window.location;
        }
    };

    static isUserLoggedIn = () => {
        return AuthHandler.getRefreshToken() != null;
    };


}