import { useMutation } from "@tanstack/react-query"
import { login, type LoginBodyType } from "../../api/auth-api"

export const useLoginModalController = () => {
    const { mutate: loginAction } = useMutation({
        mutationFn: (body: LoginBodyType) => login(body),
        onSuccess: () => console.log("es")
    });

    const testFtetch = (body: LoginBodyType) => fetch(
        "https://api.redclass.redberryinternship.ge/api/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
    )

    return {
        loginAction,
        testFtetch
    };
};