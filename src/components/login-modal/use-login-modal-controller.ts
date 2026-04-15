import { useMutation } from "@tanstack/react-query"
import { login, type LoginBodyType } from "../../api/auth-api"

export const useLoginModalController = () => {
    const { mutate: loginAction } = useMutation({
        mutationFn: (body: LoginBodyType) => login(body),
    });

    return {
        loginAction
    };
};