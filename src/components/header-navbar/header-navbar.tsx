import { Box, Button, Stack } from "@mui/material"
import RocketIcon from "../../assets/icons/rocket-icon"
import StarsIcon from "../../assets/icons/stars-icon"
import { useState } from "react"
import { LoginModal } from "../login-modal/login-modal";
import { RegistrationModal } from "../registration-modal/registration-modal";
import useAuth from "../../hooks/use-auth";

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
                    backgroundColor: "#D1D1D1",
                    paddingY: "24px",
                    paddingX: "177px",
                    boxSizing: "border-box",
                }}
            >
                <Stack direction="row" justifyContent="space-between">
                    <RocketIcon />
                    <Stack direction="row">
                        <Button
                            sx={{
                                p: 0,
                                fontSize: "20px",
                                color: "black",
                                textTransform: 'none',
                            }}
                        >
                            <StarsIcon />
                            Browse Courses
                        </Button>
                        {token ?
                            <>
                                <Button>enroled curses</Button>

                                <Button>enroled curses</Button>
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