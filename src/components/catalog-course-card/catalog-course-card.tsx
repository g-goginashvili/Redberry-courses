import { Box, Button, Stack, Typography } from "@mui/material"
import ci from "../../assets/course-image/CourseImage.jpg";
import RatingStarIcon from "../../assets/icons/rating-start-icon";
import type { CourseType } from "../../api/courses-api"

export const CatalogCourseCard = ({ courseDetails, children }: { courseDetails: CourseType, children: React.ReactNode }) => {
    return (
        <Box
            component="section"
            sx={{
                padding: "20px",
                borderRadius: "12px",
                width: "373px",
                height: "451px",
                backgroundColor: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                boxSizing: "border-box"
            }}
        >
            <Box
                sx={{
                    height: "181px",
                    backgroundImage: `url(${courseDetails.image || ci})`,
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
            <Typography color="#0A0A0A" fontSize={24} fontWeight={600} mt="12px">{courseDetails.title}</Typography>
            <Stack alignItems="flex-start" my="18px">
                {children}
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mt="auto">
                <Stack>
                    <Typography color="#8A8A8A" fontSize="12px">Stargin from</Typography>
                    <Typography color="#0A0A0A" fontSize="32px">{courseDetails.basePrice}</Typography>
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