import { useMutation } from "@tanstack/react-query"
import { login, type LoginBodyType } from "../../api/auth-api"
import useAuth from "../../hooks/use-auth";

export const useLoginModalController = () => {

    const {
        setId,
        setUsername,
        setEmail,
        setAvatar,
        setFullname,
        setMobileNumber,
        setAge,
        setProfileComplete,
        setToken,
    } = useAuth();

    const { mutate: loginAction } = useMutation({
        mutationFn: (body: LoginBodyType) => login(body),
        onSuccess: (response) => {
            const userData = response.data.user;
            setId(userData.id);
            setUsername(userData.username);
            setEmail(userData.email);
            setAvatar(userData.avatar);
            setFullname(userData.fullName);
            setMobileNumber(userData.mobileNumber);
            setAge(userData.age);
            setProfileComplete(userData.profileComplete);
            setToken(response.data.token);
        }
    });

    return {
        loginAction
    };
};