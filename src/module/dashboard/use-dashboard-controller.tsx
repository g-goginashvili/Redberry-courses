import { useQuery } from "@tanstack/react-query";
import { coursesFeatured } from "../../api/courses-api";

export const useDashboardController = () => {
    const { data: coursesFeaturedListObject } = useQuery({
        queryKey: ["coursesFeatured"],
        queryFn: () => coursesFeatured()
    });

    return {
        coursesFeaturedListObject
    };
};