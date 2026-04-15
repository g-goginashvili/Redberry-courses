import { http } from "../utilities/http-client"

export type RegistrationBodyType = {
    username: string | null;
    password: string | null;
    password_confirmation: string | null;
    email: string | null;
    avatar?: File | null;
};

export type LoginBodyType = {
    email: string | null;
    password: string | null;
}

export const register = async (body: RegistrationBodyType) => {
    const formData = new FormData();
    formData.append("username", body.username!);
    formData.append("email", body.email!);
    formData.append("password", body.password!);
    formData.append("password_confirmation", body.password_confirmation!);
    if (body.avatar) formData.append("avatar", body.avatar);

    return await http.post("/register", formData);
};

export const login = async (body: LoginBodyType) => {
    return await http.post("/login", body);
};