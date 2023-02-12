import jwtDecode, {JwtPayload} from "jwt-decode";

export function setToken(data: string) {
    localStorage.setItem("_u12", data);
}

export function getToken(): string | any {
    return localStorage.getItem("_u12");
}

export function removeToken() {
    localStorage.removeItem("_u12");
}

export function getProfile(): any {
    if (getToken()) {
        return jwtDecode<JwtPayload>(getToken());
    }
    return null;
}
