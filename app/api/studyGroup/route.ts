import { createStudyGroupService, getAllStudyGroupsService } from "@/server/studyGroup/studyGroup.service";



export const POST = async (request: Request) => {
    try {
        const { name } = await request.json();
        const newStudyGroup = await createStudyGroupService(name);
        return Response.json(newStudyGroup, { status: 200 });
    }
    catch (error) {
        console.error(error);
        return Response.json({ error: "Error creating study group " + error }, { status: 500 });
    }
}


export const GET = async () => {
    try {
        const studyGroups = await getAllStudyGroupsService();
        return Response.json(studyGroups, { status: 200 });
    }
    catch (error) {
        console.error(error);
        return Response.json({ error: "Error getting all study groups " + error }, { status: 500 });
    }
}