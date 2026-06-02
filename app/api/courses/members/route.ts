import { assignUserToCourseService } from "@/server/courses/course.service";
import { NextRequest } from "next/server";


export const POST = async (request: NextRequest) => {
    try {
        const { userId, courseId } = await request.json();
        const newCourse = await assignUserToCourseService({ userId, courseId });
        return Response.json(newCourse, { status: 200 });
    }
    catch (error) {
        console.error(error);
        return Response.json({ error: "Error assigning user to course " + error }, { status: 500 });
    }
}