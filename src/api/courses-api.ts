import { http } from "../utilities/http-client";

export type InstructorType = {
    id: number;
    name: string;
    avatar: string;
};

export type CategoryType = {
    id: number;
    name: string;
    icon: string;
};

export type TopicType = {
    id: number;
    name: string;
    categoryId?: number;
};

export type CourseType = {
    id: number;
    title: string;
    description: string;
    image: string;
    basePrice: string;
    durationWeeks: number;
    isFeatured: boolean;
    avgRating: number;
    reviewCount: number;
    category: CategoryType;
    topic: TopicType;
    instructor: InstructorType;
};

export type CoursesResponseType = {
    data: CourseType[];
};

type WeeklyScheduleType = {
    id: number;
    label: string;
    days: string[];
};

type TimeSlotType = {
    id: number;
    label: string;
    startTime: string;
    endTime: string;
};

type SessionTypeType = {
    id: number;
    courseScheduleId: number;
    name: string;
    priceModifier: number;
    availableSeats: number;
    location: string;
};

type ScheduleType = {
    weeklySchedule: WeeklyScheduleType;
    timeSlot: TimeSlotType;
    sessionType: SessionTypeType;
    location: string;
};

export type CourseInProgressType = {
    id: number;
    quantity: number;
    totalPrice: number;
    progress: number;
    completedAt: string;
    course: CourseType;
    schedule: ScheduleType;
};

export type CoursesInProgressResponseType = {
    data: CourseInProgressType[];
};

export const coursesFeatured = async (): Promise<CoursesResponseType> => {
    return await http.get("/courses/featured");
};

export const coursesList = async (): Promise<CoursesResponseType> => {
    return await http.get("/courses");
};

export const coursesInProgress = async (accessToken: string): Promise<CoursesInProgressResponseType> => {
    return await http.get("/courses/in-progress", accessToken);
};