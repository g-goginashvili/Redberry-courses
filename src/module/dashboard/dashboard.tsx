import { Box } from "@mui/material";
import { HeroSlider } from "../../components/hero-slider/hero-slider";

export const Dashboard = () => {
    return (
        <Box
            sx={{
                paddingX: "177px",
                paddingY: "64px"
            }}
        >
            <HeroSlider />
        </Box>
    );
};