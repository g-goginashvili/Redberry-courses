import { Box, Button, IconButton, Modal, Stack, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import { CustomInput } from "../custom-input/custom-input";
import CloseIcon from "../../assets/icons/close-icon";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import BackIcon from "../../assets/icons/back-icon";
import { CustomFileUploader } from "../custom-file-upload/custom-file-uploader";
import { useRegistrationModalController } from "./use-registration-modal-controller";

type RegistrationModalType = {
    isOpen: boolean;
    onClose: () => void;
};

export const RegistrationModal = ({ isOpen, onClose }: RegistrationModalType) => {
    const {
        step,
        setStep,
        handleNext,
        registerAction,
    } = useRegistrationModalController();

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
                    password_confirmation: "",
                    username: "",
                    avatar: null as File | null,
                }}
                validationSchema={Yup.object({
                    email: Yup.string().email("Must be valid Email").required("Required"),
                    password: Yup.string().required("Required"),
                    password_confirmation: Yup.string()
                        .oneOf([Yup.ref("password")], "Passwords must match")
                        .required("Required"),
                    username: Yup.string().required("Required"),
                })}
                onSubmit={(values) => {
                    console.log(values);
                    registerAction(values)
                }}
            >
                {({ validateForm, setTouched, submitForm }) => (
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
                            {step > 1 &&
                                <IconButton
                                    onClick={() => setStep((prev) => prev - 1)}
                                    sx={{ position: "absolute", top: 18, left: 18 }}
                                >
                                    <BackIcon />
                                </IconButton>
                            }
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
                                    Create Account
                                </Typography>
                                <Typography
                                    fontSize={14}
                                    fontWeight={500}
                                    color="#666666"
                                >
                                    Join and start learning today
                                </Typography>
                            </Stack>

                            <Stack width={360} gap={1} direction="row">
                                {[1, 2, 3].map((stp) => (
                                    <Box
                                        key={stp}
                                        sx={{
                                            width: "100%",
                                            height: "8px",
                                            borderRadius: "24px",
                                            backgroundColor: step >= stp ? "#B7B3F4" : "#EEEDFC"
                                        }}
                                    />
                                ))}
                            </Stack>

                            {step === 1 &&
                                <CustomInput
                                    name="email"
                                    label="Email*"
                                    placeholder="you@example.com"
                                />
                            }

                            {step === 2 &&
                                <>
                                    <CustomInput
                                        name="password"
                                        label="Password*"
                                        placeholder="Password"
                                        type="password"
                                    />
                                    <CustomInput
                                        name="password_confirmation"
                                        label="Confirm Password*"
                                        placeholder="********"
                                        type="password"
                                    />
                                </>
                            }

                            {step === 3 &&
                                <>
                                    <CustomInput
                                        name="username"
                                        label="Username*"
                                        placeholder="Username"
                                    />
                                    <CustomFileUploader />
                                </>
                            }

                            <Button
                                onClick={() => {
                                    if (step < 3) {
                                        handleNext(validateForm, setTouched);
                                    } else {
                                        submitForm();
                                    }
                                }}
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: "#4F46E5",
                                    fontSize: "16px",
                                    textTransform: 'none',
                                    padding: "12px"
                                }}
                            >
                                {step === 3 ? "Sign Up" : "Next"}
                            </Button>
                            <Divider sx={{ width: "100%" }}>
                                <Typography fontSize="12px" color="#666666" variant="body1">or</Typography>
                            </Divider>
                            <Stack
                                direction="row"
                                alignItems="center"
                            >
                                <Typography fontSize="12px" color="#666666" variant="body1">Already have an account?</Typography>
                                <Button
                                    sx={{
                                        textTransform: 'none',
                                        fontSize: "14px",
                                        color: "#141414",
                                        padding: 0
                                    }}
                                >
                                    Log In
                                </Button>
                            </Stack>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Modal>
    );
};