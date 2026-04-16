import { Box, Button, Stack, Typography } from "@mui/material";
import { HeroSlider } from "../../components/hero-slider/hero-slider";
import { useDashboardController } from "./use-dashboard-controller";
import { DashboardCourseCard } from "../../components/dashboard-course-card/dashboard-course-card";
import useAuth from "../../hooks/use-auth";
import { DashboardLearningCard } from "../../components/dashboard-learning-card/dashboard-learning-card";
import LockedIcon from "../../assets/icons/locked-icond";

export const Dashboard = () => {
    const { token } = useAuth();

    const {
        coursesFeaturedIsPending,
        coursesFeaturedListObject,
        coursesInProgressObj,
        inProgressIsPending,
    } = useDashboardController();

    return (
        <Box
            sx={{
                paddingX: "177px",
                paddingY: "64px",
                display: "flex",
                flexDirection: "column",
                gap: "64px",
                backgroundColor: "#F5F5F5"
            }}
        >
            <HeroSlider />

            {(token && !inProgressIsPending && coursesInProgressObj!.data.length > 0) &&
                <div>
                    <Typography
                        color="#0A0A0A"
                        fontSize={40}
                        fontWeight={600}
                    >
                        Continue Learning
                    </Typography>
                    <Typography
                        color="#3D3D3D"
                        fontSize={18}
                        mb="32px"
                    >
                        Pick up where you left
                    </Typography>
                    <Stack direction="row" gap="24px">
                        {coursesInProgressObj!.data.map((item) => (
                            <DashboardLearningCard key={item.id} inProgressDetails={item} />
                        ))}
                    </Stack>
                </div>
            }
            <div>
                <Typography
                    color="#0A0A0A"
                    fontSize={40}
                    fontWeight={600}
                >
                    Start Learning Today
                </Typography>
                <Typography
                    color="#3D3D3D"
                    fontSize={18}
                    mb="32px"
                >
                    Choose from our most popular courses and begin your journey
                </Typography>
                <Stack direction="row" gap="24px">
                    {!coursesFeaturedIsPending && (coursesFeaturedListObject!.data).map((item) => (
                        <DashboardCourseCard key={item.id} courseDetails={item} />
                    ))}
                </Stack>
            </div>

            {!token &&
                <div>
                    <Box>
                        <Typography
                            color="#0A0A0A"
                            fontSize={40}
                            fontWeight={600}
                        >
                            Continue Learning
                        </Typography>

                        <Typography
                            color="#3D3D3D"
                            fontSize={18}
                            mb="32px"
                        >
                            Pick up where you left
                        </Typography>
                        <Box position="relative">
                            <Stack direction="row" gap="24px">
                                {[1, 2, 3].map((item) => (
                                    <DashboardLearningCard key={item} />
                                ))}
                            </Stack>
                            <Box
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    backdropFilter: "blur(6px)",
                                    backgroundColor: "rgba(255,255,255,0.6)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "12px",
                                    zIndex: 10,
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: "white",
                                        padding: "27px 56px",
                                        borderRadius: "12px",
                                        textAlign: "center",
                                        border: "1px solid #ADADAD",
                                        minWidth: "220px",
                                    }}
                                >
                                    <LockedIcon />
                                    <Typography fontSize={14} mb="24px" mt="12px">
                                        Sign in to track your learning progress
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#4F46E5",
                                            textTransform: "none",
                                            borderRadius: "8px",
                                        }}
                                    >
                                        Log in
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </div>
            }
        </Box >
    );
};