import { assignUserToCourseService, getCourseMembersService } from "@/server/course/member/courseMember.service";
import { NextRequest } from "next/server";


export const POST = async (request: NextRequest, { params }: { params: Promise<{ courseId: string }> }) => {
    try {
        const { courseId } = await params;
        const { userId } = await request.json();
        const newCourse = await assignUserToCourseService({ userId, courseId });
        return Response.json(newCourse, { status: 200 });
    }
    catch (error) {
        console.error(error);
        return Response.json({ error: "Error assigning user to course " + error }, { status: 500 });
    }
}


export const GET = async (request: Request, { params }: { params: Promise<{ courseId: string }> }) => {
    try {
        const { courseId } = await params;
        const members = await getCourseMembersService(courseId);
        return Response.json(members, { status: 200 });
    }
    catch (error) {
        console.error(error);
        return Response.json({ error: "Error getting course members " + error }, { status: 500 });
    }
}