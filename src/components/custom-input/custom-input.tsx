import React, { useState } from "react";
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    FormHelperText
} from "@mui/material";
import EyeIcon from "../../assets/icons/eye-open";
import { useField } from "formik";

type CustomInputPropsType = {
    name: string;
    label: string;
    type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
    placeholder?: string;
    fullWidth?: boolean;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
};

export const CustomInput = ({
    name,
    label,
    type = "text",
    placeholder,
    fullWidth = true,
    disabled = false
}: CustomInputPropsType) => {
    const [field, meta] = useField(name);

    const [showPassword, setShowPassword] = useState(false);
    const isPassword = (type === "password");

    const isError = Boolean(meta.touched && meta.error);

    return (
        <FormControl
            fullWidth={fullWidth}
            error={isError}
            disabled={disabled}
        >
            <InputLabel
                shrink
                sx={{
                    position: "static",
                    transform: "none",
                    fontSize: "14px",
                    color: "#3D3D3D",
                    "&.Mui-error": {
                        color: "#F4161A"
                    },
                    fontWeight: 500,
                    mb: 1
                }}
            >
                {label}
            </InputLabel>

            <OutlinedInput
                type={isPassword && showPassword ? "text" : type}
                placeholder={placeholder}
                notched={false}
                {...field}
                error={Boolean(meta.touched && meta.error)}
                sx={{
                    borderRadius: "8px",
                    width: "360px",
                    fontSize: "14px",
                    "& .MuiOutlinedInput-input": {
                        padding: "12px 13px 12px 15px"
                    },
                    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#F4161A"
                    },
                }}
                endAdornment={
                    isPassword && (
                        <InputAdornment position="end">
                            <IconButton
                                onMouseDown={() => setShowPassword(true)}
                                onMouseUp={() => setShowPassword(false)}
                                edge="end"
                            >
                                <EyeIcon color={isError ? "#F4161A" : undefined} />
                            </IconButton>
                        </InputAdornment>
                    )
                }
            />
            {isError &&
                <FormHelperText
                    sx={{
                        margin: 0,
                        mt: "5px",
                        fontSize: "12px",
                        fontWeight: 400,
                        "&.Mui-error": {
                            color: "#F4161A"
                        },
                    }}
                >
                    {meta.error}
                </FormHelperText>
            }
        </FormControl>
    );
};
