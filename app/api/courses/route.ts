import { createCourseService, getAllCoursesService } from "@/server/courses/course.service";



export const POST = async () => {
    const newCourse = await createCourseService({ title: "Test", description: "Test" });
    return Response.json(newCourse);
}

export const GET = async () => {
    const courses = await getAllCoursesService();
    return Response.json(courses);
}