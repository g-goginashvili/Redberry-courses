import { useQuery } from "@tanstack/react-query";
import { categoriesList, instructorsList, topicsList } from "../../api/filters-api";
import { useState } from "react";
import { coursesList } from "../../api/courses-api";

type FilterValuesType = {
    categories: number[];
    topics: number[];
    instructors: number[];
};

export const useCourseCatalogController = () => {
    const [filterValues, setFilterValues] = useState<FilterValuesType>({
        categories: [],
        topics: [],
        instructors: [],
    });

    const [page, setPage] = useState<number>(1);

    const toggleFilter = (key: keyof FilterValuesType, id: number) => {
        setFilterValues((prev) => ({
            ...prev,
            [key]: prev[key].includes(id)
                ? prev[key].filter(item => item !== id)
                : [...prev[key], id]
        }));
    };

    const { isPending: pendingForCategories, data: categoriesListObj } = useQuery({
        queryKey: ["categoriesList"],
        queryFn: categoriesList
    });

    const { isPending: pendingForTopics, data: topicsListObj } = useQuery({
        queryKey: ["categoriesList", filterValues.categories],
        queryFn: () => topicsList(filterValues.categories)
    });

    const { isPending: pendingForInstructors, data: instructorsListObj } = useQuery({
        queryKey: ["instructorsList"],
        queryFn: () => instructorsList()
    });

    const { isPending: pendingForCoursesList, data: coursesListObj } = useQuery({
        queryKey: ["coursesList", filterValues, page],
        queryFn: () => coursesList(
            filterValues.categories, filterValues.topics, filterValues.instructors, page
        )
    });
    coursesList

    return {
        filterValues,
        setFilterValues,
        page,
        setPage,
        toggleFilter,
        pendingForCategories,
        categoriesListObj,
        pendingForTopics,
        topicsListObj,
        pendingForInstructors,
        instructorsListObj,
        pendingForCoursesList,
        coursesListObj,
    };
};