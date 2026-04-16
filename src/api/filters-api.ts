import { http } from "../utilities/http-client";

export type CategoryType = {
    id: number;
    name: string;
    icon: string;
};

export type CategoriesListResponseType = {
    data: CategoryType[];
};

export type TopicType = {
    id: number;
    name: string;
    categoryId: number;
};

export type TopicsListResponseType = {
    data: TopicType[];
};

export type InstructorType = {
    id: number;
    name: string;
    avatar: string;
};

export type InstructorsListResponseType = {
    data: InstructorType[];
};


export const categoriesList = async (): Promise<CategoriesListResponseType> => {
    return await http.get("/categories");
};

export const topicsList = async (categoryIds?: number[]): Promise<TopicsListResponseType> => {
    const params = new URLSearchParams();
    categoryIds?.forEach(id => params.append("categories[]", String(id)));
    const query = params.toString();
    return await http.get(`/topics${query ? `?${query}` : ""}`);
};

export const instructorsList = async (): Promise<InstructorsListResponseType> => {
    return await http.get("/instructors");
};