import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../assets/icons/arrow-icon";
import bg0 from "../../assets/hero-backgrounds/0.png";
import bg1 from "../../assets/hero-backgrounds/1.png";
import bg2 from "../../assets/hero-backgrounds/2.png";
import { useNavigate } from "react-router";

const heroData = [
    {
        header: "Start learning something new today",
        body: "Explore a wide range of expert-led courses in design, development, business, and more. Find the skills you need to grow your career and learn at your own pace.",
        button: "Browse Courses",
        background: bg0,
        path: "/course-catalog"
    },
    {
        header: "Pick up where you left off",
        body: "Your learning journey is already in progress. Continue your enrolled courses, track your progress, and stay on track toward completing your goals.",
        button: "Browse Courses",
        background: bg1,
        path: "/"
    },
    {
        header: "Learn together, grow faster",
        body: "",
        button: "Browse Courses",
        background: bg2,
        path: "/"
    }
];

export const HeroSlider = () => {
    const [slide, setSlide] = useState<number>(0);
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                borderRadius: "30px",
                padding: "48px",
                backgroundImage: `url(${heroData[slide].background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                maxWidth: "1566px",
                height: "420px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                boxSizing: "border-box"
            }}
        >
            <Typography fontSize={48} fontWeight="bold" color="#FFFFFF">
                {heroData[slide].header}
            </Typography>
            <Typography fontSize={24} fontWeight={300} width={1218} mb="40px" color="#FFFFFF">

                {heroData[slide].body}
            </Typography>
            <Button
                sx={{
                    fontSize: "20px",
                    paddingY: "20px",
                    paddingX: "25px",
                    backgroundColor: "#4F46E5",
                    borderColor: "#4F46E5",
                    color: "white",
                    borderRadius: "8px",
                    mb: "30px"
                }}
                onClick={() => navigate(heroData[slide].path)}
            >
                {heroData[slide].button}
            </Button>
            <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%" mt="auto">
                <IconButton disabled={slide === 0} onClick={() => setSlide((prev) => prev - 1)}>
                    <ArrowLeftIcon />
                </IconButton>
                <Stack width={195} gap={1.5} direction="row">
                    {[0, 1, 2].map((stp) => (
                        <Box
                            key={stp}
                            sx={{
                                width: "100%",
                                height: "8px",
                                borderRadius: "24px",
                                backgroundColor: slide === stp ? "#F5F5F5" : "#C1BCBC80"
                            }}
                        />
                    ))}
                </Stack>
                <IconButton disabled={slide === 2} onClick={() => setSlide((prev) => prev + 1)}>
                    <ArrowRightIcon />
                </IconButton>
            </Stack>
        </Box>
    );
};