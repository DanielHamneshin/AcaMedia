import { getCourseMembersService } from "@/server/courses/course.service";



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