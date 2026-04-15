import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { register, type RegistrationBodyType } from "../../api/auth-api";

const stepFields: Record<number, string[]> = {
    1: ["email"],
    2: ["password", "password_confirmation"],
    3: ["username"],
};

export const useRegistrationModalController = () => {

    const [step, setStep] = useState<number>(1);

    const handleNext = async (
        validateForm: () => Promise<any>,
        setTouched: (fields: Record<string, boolean>) => void
    ) => {
        const fields = stepFields[step];
        const touchedFields = fields.reduce((acc, field) => {
            acc[field] = true;
            return acc;
        }, {} as Record<string, boolean>);

        setTouched(touchedFields);

        const errors = await validateForm();
        const hasErrors = fields.some((field) => errors[field]);

        if (!hasErrors) {
            setStep((prev) => prev + 1);
        }
    };

    const { mutate: registerAction } = useMutation({
        mutationFn: (requestBody: RegistrationBodyType) => register(requestBody),
    })

    return {
        step,
        setStep,
        handleNext,
        registerAction,
    };
};