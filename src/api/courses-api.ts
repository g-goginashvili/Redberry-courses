import { http } from "../utilities/http-client";

export type Instructor = {
    id: number;
    name: string;
    avatar: string;
};

export type Category = {
    id: number;
    name: string;
    icon: string;
};

export type Topic = {
    id: number;
    name: string;
};

export type Course = {
    id: number;
    title: string;
    description: string;
    image: string;
    basePrice: string;
    durationWeeks: number;
    isFeatured: boolean;
    avgRating: number;
    reviewCount: number;
    category: Category;
    topic: Topic;
    instructor: Instructor;
};

export type CoursesResponse = {
    data: Course[];
}

export const coursesFeatured = async (): Promise<CoursesResponse> => {
    return await http.get("/courses/featured");
};