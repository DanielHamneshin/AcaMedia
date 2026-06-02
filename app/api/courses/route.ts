import { createCourseService, getAllCoursesService } from "@/server/courses/course.service";



export const POST = async (request: Request) => {
    try {
        const { title, description } = await request.json();
        const newCourse = await createCourseService({ title, description });
        return Response.json(newCourse, { status: 200 });
    }
    catch (error) {
        console.error(error);
        return Response.json({ error: "Error creating course " + error }, { status: 500 });
    }

}

export const GET = async () => {
    try {
        const courses = await getAllCoursesService();
        return Response.json(courses, { status: 200 });
    }
    catch (error) {
        console.error(error);
        return Response.json({ error: "Error getting all courses " + error }, { status: 500 });
    }
}