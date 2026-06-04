import { assignUserToStudyGroup, getStudyGroupMembersService } from "@/server/studyGroup/member/studyGroupMember.service";
import { NextRequest } from "next/server";


export const POST = async (request: NextRequest, { params }: { params: Promise<{ groupId: string }> }) => {
    try {
        const { groupId } = await params;
        const { userId } = await request.json();
        const newCourse = await assignUserToStudyGroup({ userId, studyGroupId: groupId });
        return Response.json(newCourse, { status: 200 });
    }
    catch (error) {
        console.error(error);
        return Response.json({ error: "Error assigning user to study group " + error }, { status: 500 });
    }
}

export const GET = async (request: NextRequest, { params }: { params: Promise<{ groupId: string }> }) => {
    try {
        const { groupId } = await params;
        const members = await getStudyGroupMembersService(groupId);
        return Response.json(members, { status: 200 });
    }
    catch (error) {
        console.error(error);
        return Response.json({ error: "Error getting study group members " + error }, { status: 500 });
    }
}