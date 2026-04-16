import { useQuery } from "@tanstack/react-query";
import { coursesFeatured, coursesInProgress } from "../../api/courses-api";
import useAuth from "../../hooks/use-auth";

export const useDashboardController = () => {
    const { token } = useAuth();

    const { isPending: coursesFeaturedIsPending, data: coursesFeaturedListObject } = useQuery({
        queryKey: ["coursesFeatured"],
        queryFn: coursesFeatured
    });

    const { isPending: inProgressIsPending, data: coursesInProgressObj } = useQuery({
        queryKey: ["coursesInProgress"],
        queryFn: () => coursesInProgress(token),
        enabled: Boolean(token)
    });

    return {
        coursesFeaturedIsPending,
        coursesFeaturedListObject,
        coursesInProgressObj,
        inProgressIsPending,
    };
};