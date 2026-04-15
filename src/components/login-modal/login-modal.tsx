import { Box, Button, IconButton, Modal, Stack, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import { CustomInput } from "../custom-input/custom-input";
import CloseIcon from "../../assets/icons/close-icon";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useLoginModalController } from "./use-login-modal-controller";

type LoginModalType = {
    isOpen: boolean;
    onClose: () => void;
};

export const LoginModal = ({ isOpen, onClose }: LoginModalType) => {
    const {
        loginAction
    } = useLoginModalController();
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={Yup.object({
                    email: Yup.string().email(
                        "Must be valid Email"
                    ).required("Required"),
                    password: Yup.string().required("Required")
                })}
                onSubmit={(values) => {
                    loginAction(values);
                    onClose();
                }}
            >
                <Form>
                    <Box
                        component="section"
                        sx={{
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "50px",
                            borderRadius: "12px",
                            gap: "24px",
                            backgroundColor: "white"
                        }}
                    >
                        <IconButton
                            onClick={onClose}
                            sx={{ position: "absolute", top: 18, right: 18 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Stack
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            gap="6px"
                        >
                            <Typography
                                fontSize={32}
                                fontWeight={600}
                            >
                                Welcome Back
                            </Typography>
                            <Typography
                                fontSize={14}
                                fontWeight={500}
                                color="#666666"
                            >
                                Login to continue your learning
                            </Typography>
                        </Stack>


                        <CustomInput
                            name="email"
                            label="Email"
                            placeholder="you@example.com"
                        />

                        <CustomInput
                            name="password"
                            label="Password"
                            type="password"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: "#4F46E5",
                                fontSize: "16px",
                                textTransform: 'none',
                                padding: "12px"
                            }}
                        >
                            Log In
                        </Button>
                        <Divider sx={{ width: "100%" }}>
                            <Typography fontSize="12px" color="#666666" variant="body1">or</Typography>
                        </Divider>
                        <Stack
                            direction="row"
                            alignItems="center"
                        >
                            <Typography fontSize="12px" color="#666666" variant="body1">Don’t have an account?</Typography>
                            <Button
                                sx={{
                                    textTransform: 'none',
                                    fontSize: "14px",
                                    color: "#141414",
                                    padding: 0
                                }}
                            >
                                Sign Up
                            </Button>
                        </Stack>
                    </Box>
                </Form>
            </Formik>
        </Modal>
    );
};