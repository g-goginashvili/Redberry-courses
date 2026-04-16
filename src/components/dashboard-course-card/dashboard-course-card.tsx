import { Box, Button, Stack, Typography } from "@mui/material"
import ci from "../../assets/course-image/CourseImage.jpg";
import RatingStarIcon from "../../assets/icons/rating-start-icon";
import type { CourseType } from "../../api/courses-api"

export const DashboardCourseCard = ({ courseDetails }: { courseDetails: CourseType }) => {
    return (
        <Box
            component="section"
            sx={{
                padding: "20px",
                borderRadius: "12px",
                width: "506px",
                backgroundColor: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                boxSizing: "border-box"
            }}
        >
            <Box
                sx={{
                    width: "466px",
                    height: "262px",
                    backgroundImage: `url(${ci})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "12px",
                }}
            />
            <Stack direction="row" justifyContent="space-between" mt="16px">
                <Typography fontSize={14}>
                    <Box component="span" sx={{ color: "#8A8A8A" }}>Lecturer </Box>
                    <Box component="span" sx={{ color: "#666666" }}>{courseDetails.instructor.name}</Box>
                </Typography>
                <Stack direction="row" gap="4px">
                    <RatingStarIcon />
                    <Typography color="#525252" fontSize={14}>{courseDetails.avgRating}</Typography>
                </Stack>
            </Stack>
            <Typography color="#141414" fontSize={24} fontWeight={600} mt="12px">{courseDetails.title}</Typography>
            <Typography color="#666666" fontSize={16} width={0.7} mt="16px">{courseDetails.description}</Typography>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mt="auto">
                <Stack direction="row" gap={1} alignItems="center">
                    <Typography color="#8A8A8A" fontSize="12px">Stargin from</Typography>
                    <Typography color="#141414" fontSize="32px">{courseDetails.basePrice}</Typography>
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
    )
}