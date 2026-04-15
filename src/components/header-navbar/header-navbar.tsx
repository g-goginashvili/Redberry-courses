import { Box, Button, Stack } from "@mui/material"
import RocketIcon from "../../assets/icons/rocket-icon"
import StarsIcon from "../../assets/icons/stars-icon"
import { useState } from "react"
import { LoginModal } from "../login-modal/login-modal";
import { RegistrationModal } from "../registration-modal/registration-modal";
import useAuth from "../../hooks/use-auth";
import DefaultAvatarIcon from "../../assets/icons/default-avatar-icon";
import BookIcon from "../../assets/icons/book-icon";

export const HeaderNavbar = () => {
    const { token } = useAuth();

    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);

    return (
        <>
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
            <RegistrationModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
            <Box
                component="nav"
                sx={{
                    backgroundColor: "#F5F5F5",
                    borderBottom: "1px solid #D1D1D1",
                    paddingY: "24px",
                    paddingX: "177px",
                    boxSizing: "border-box",
                }}
            >
                <Stack direction="row" justifyContent="space-between">
                    <RocketIcon />
                    <Stack direction="row" gap="36px">
                        <Button
                            sx={{
                                p: 0,
                                fontSize: "20px",
                                color: "#666666",
                                textTransform: 'none',
                            }}
                        >
                            <StarsIcon />
                            Browse Courses
                        </Button>
                        {token ?
                            <>
                                <Button
                                    sx={{
                                        p: 0,
                                        fontSize: "20px",
                                        color: "#666666",
                                        textTransform: 'none',
                                    }}
                                >
                                    <BookIcon />
                                    Enrolled Courses
                                </Button>
                                <Button
                                    sx={{
                                        width: 56,
                                        height: 56,
                                        minWidth: 0,
                                        padding: 0,
                                        borderRadius: "50%",
                                        backgroundColor: "#EEEDFC",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <DefaultAvatarIcon />
                                </Button>
                            </> :
                            <Stack direction={"row"} gap="15px">
                                <Button
                                    variant="outlined"
                                    onClick={() => setIsLoginOpen(true)}
                                    sx={{
                                        fontSize: "20px",
                                        textTransform: 'none',
                                        paddingY: "12px",
                                        paddingX: "16px",
                                        borderColor: "#4F46E5",
                                        color: "#4F46E5",
                                        borderRadius: "8px"
                                    }}
                                >
                                    Log In
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() => setIsRegisterOpen(true)}
                                    sx={{
                                        fontSize: "20px",
                                        textTransform: 'none',
                                        paddingY: "12px",
                                        paddingX: "16px",
                                        borderColor: "#4F46E5",
                                        backgroundColor: "#4F46E5",
                                        borderRadius: "8px"
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </Stack>
                        }
                    </Stack>
                </Stack>
            </Box>
        </>
    );
};