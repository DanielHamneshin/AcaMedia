import prisma from "@/lib/prisma";


export const createStudyGroupService = async (name: string) => {
    try {
        const newStudyGroup = await prisma.studyGroup.create({
            data: {
                name
            }
        });
        return newStudyGroup;
    }
    catch (error) {
        console.error(error);
        throw new Error("Error creating study group " + error);
    }
}


export const getAllStudyGroupsService = async () => {
    try {
        const studyGroups = await prisma.studyGroup.findMany();
        return studyGroups;
    } catch (error) {
        console.error(error);
        throw new Error("Error getting all study groups " + error);
    }
}