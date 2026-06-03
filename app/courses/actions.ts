'use server';

import { createCourseService, getAllCoursesService } from "@/server/course/course.service";


export const createCourse = async (fromData: FormData) => {
    const title = fromData.get("title") as string;
    const description = fromData.get("description") as string;
    return await createCourseService({ title, description });
}

export const getAllCourses = async () => {
    return await getAllCoursesService();
}