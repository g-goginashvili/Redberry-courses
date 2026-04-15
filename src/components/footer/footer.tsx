import { Box, Stack, Typography } from "@mui/material";
import RocketIcon from "../../assets/icons/rocket-icon";
import { FbIcon, IgIcon, InIcon, TwtIcon, YtIcon } from "../../assets/icons/social-icons";

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                padding: "80px 177px 20px 177px",
                backgroundColor: "#F5F5F5",
                borderTop: "1px solid #D1D1D1",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Stack direction="row" justifyContent="space-between">
                <Stack>
                    <Stack direction="row" gap="12px" alignItems="center" >
                        <RocketIcon size={45} />
                        <Typography
                            fontSize={24}
                            color="#130E67"
                        >
                            Bootcamp
                        </Typography>
                    </Stack>
                    <Typography
                        mt={2} mb={3}
                        width={250}
                        fontSize={14}
                        color="#130E67"
                    >
                        Your learning journey starts here!
                        Browse courses to get started.
                    </Typography>
                    <Stack direction="row" gap="22px" alignItems="center">
                        <FbIcon />
                        <TwtIcon />
                        <IgIcon />
                        <InIcon />
                        <YtIcon />
                    </Stack>
                </Stack>
                <Stack direction="row" gap="120px">
                    <Stack>
                        <Typography color="#130E67" fontSize={20} mb={1}>Explore</Typography>
                        <Typography color="#666666" fontSize={18} fontWeight={400}>Enrolled Courses</Typography>
                        <Typography color="#666666" fontSize={18} fontWeight={400}>Browse Courses</Typography>
                    </Stack>
                    <Stack>
                        <Typography color="#130E67" fontSize={20} mb={1}>Account</Typography>
                        <Typography color="#666666" fontSize={18} fontWeight={400}>My Profile</Typography>
                    </Stack>
                    <Stack>
                        <Typography color="#130E67" fontSize={20} mb={1}>Contact</Typography>
                        <Typography color="#666666" fontSize={18} fontWeight={400}>contact@company.com</Typography>
                        <Typography color="#666666" fontSize={18} fontWeight={400}>(+995) 555 111 222</Typography>
                        <Typography color="#666666" fontSize={18} fontWeight={400}>Aghmashenebeli St.115</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction="row" justifyContent="space-between" mt={9}>
                <Typography fontSize={18} color="#666666">Copyright © 2026 Redberry International</Typography>
                <Typography fontSize={18} color="#666666">All Rights Reserved | Terms and Conditions | Privacy Policy</Typography>
            </Stack>
        </Box>
    );
};