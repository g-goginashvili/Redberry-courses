import { Box, Button, LinearProgress, Stack, Typography } from "@mui/material"
import learningImage from "../../assets/dashboard-learning-image/dashboard-learning-image.png";
import RatingStarIcon from "../../assets/icons/rating-start-icon";
import type { CourseInProgressType } from "../../api/courses-api";

export const DashboardLearningCard = (
    { inProgressDetails }: { inProgressDetails?: CourseInProgressType }
) => {

    const dataToRender = {
        instructorName: inProgressDetails ? inProgressDetails.course.instructor.name : "John Travolta",
        rating: inProgressDetails ? inProgressDetails.course.avgRating : 4.9,
        title: inProgressDetails ? inProgressDetails.course.title : "Advanced React & TypeScript Development",
        progress: inProgressDetails ? inProgressDetails.progress : 65,
    }

    return (
        <Box
            sx={{
                padding: "20px",
                borderRadius: "12px",
                width: "506px",
                backgroundColor: "#FFFFFF",
                boxSizing: "border-box"
            }}
        >
            <Stack direction="row">
                <Box
                    sx={{
                        width: "140px",
                        height: "123px",
                        backgroundImage: `url(${learningImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "12px",
                        flexShrink: 0,
                    }}
                />
                <Stack direction="column" paddingLeft="16px">
                    <Stack direction="row" justifyContent="space-between">
                        <Typography fontSize={14}>
                            <Box component="span" sx={{ color: "#8A8A8A" }}>Lecturer </Box>
                            <Box component="span" sx={{ color: "#666666" }}>{dataToRender.instructorName}</Box>
                        </Typography>
                        <Stack direction="row" gap="4px">
                            <RatingStarIcon />
                            <Typography color="#525252" fontSize={14}>{dataToRender.rating}</Typography>
                        </Stack>
                    </Stack>
                    <Typography color="#141414" fontSize={20} fontWeight={600} mt="12px">{dataToRender.title}</Typography>
                </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mt="8px">
                <Stack direction="column" flex={1}>
                    <Typography color="#141414" fontSize={12}>{dataToRender.progress}% Complete</Typography>
                    <LinearProgress
                        variant="determinate"
                        value={dataToRender.progress}
                        sx={{
                            height: "16px",
                            borderRadius: "16px",
                            backgroundColor: "#DDDBFA",
                            "& .MuiLinearProgress-bar": {
                                backgroundColor: "#4F46E5",
                                borderRadius: "16px",
                            },
                        }}
                    />
                </Stack>
                <Button
                    variant="outlined"
                    sx={{
                        color: "#958FEF",
                        fontSize: "16px",
                        borderColor: "#958FEF",
                        borderRadius: "8px",
                        padding: "12px 16px 12px 16px",
                        minWidth: "90px",
                        textTransform: 'none',
                        ml: "40px",
                        boxSizing: "border-box"
                    }}
                >
                    View
                </Button>
            </Stack>
        </Box>
    )
}