import { Box, Button, Stack, Typography } from "@mui/material";
import { HeroSlider } from "../../components/hero-slider/hero-slider";
import { useDashboardController } from "./use-dashboard-controller";
import ci from "../../assets/course-image/CourseImage.jpg";
import RatingStarIcon from "../../assets/icons/rating-start-icon";

export const Dashboard = () => {
    const {
        coursesFeaturedListObject
    } = useDashboardController();

    console.log(
        coursesFeaturedListObject
    )

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
                >
                    Choose from our most popular courses and begin your journey
                </Typography>
                <Stack direction="row" gap="24px">
                    {(coursesFeaturedListObject!.data).map((item) => (
                        <Box
                            component="section"
                            sx={{
                                padding: "20px",
                                borderRadius: "12px",
                                backgroundColor: "#FFFFFF",
                                display: "flex",
                                flexDirection: "column"
                            }}
                        >
                            <Box
                                sx={{
                                    width: "466px",
                                    height: "262px",
                                    backgroundImage: `url(${ci})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />
                            <Stack direction="row" justifyContent="space-between" mt="16px">
                                <Typography fontSize={14}>
                                    <Box component="span" sx={{ color: "#8A8A8A" }}>Lecturer </Box>
                                    <Box component="span" sx={{ color: "#666666" }}>{item.instructor.name}</Box>
                                </Typography>
                                <Stack direction="row" gap="4px">
                                    <RatingStarIcon />
                                    <Typography color="#525252" fontSize={14}>{item.avgRating}</Typography>
                                </Stack>
                            </Stack>
                            <Typography color="#141414" fontSize={24} fontWeight={600} mt="12px">{item.title}</Typography>
                            <Typography color="#666666" fontSize={16} width={0.7} mt="16px">{item.description}</Typography>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" mt="auto">
                                <Stack direction="row" gap={1} alignItems="center">
                                    <Typography color="#8A8A8A" fontSize="12px">Stargin from</Typography>
                                    <Typography color="#141414" fontSize="32px">{item.basePrice}</Typography>
                                </Stack>
                                <Button
                                    sx={{
                                        backgroundColor: "#4F46E5",
                                        borderRadius: "8px",
                                        color: "white",
                                        padding: "17px 25px 17px 25px",
                                        textTransform: 'none',
                                    }}
                                >
                                    Details
                                </Button>
                            </Stack>
                        </Box>
                    ))}
                </Stack>
            </div>
        </Box >
    );
};