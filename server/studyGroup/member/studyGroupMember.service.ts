import prisma from "@/lib/prisma";


export const assignUserToStudyGroup = async ({ userId, studyGroupId }: { userId: string, studyGroupId: string }) => {
    try {
        const member = await prisma.studyGroupMember.create({
            data: {
                userId,
                studyGroupId
            }
        });
        return member;
    } catch (error) {
        console.error(error);
        throw new Error("Error assigning user to study group " + error);
    }
}

export const getStudyGroupMembersService = async (studyGroupId: string) => {
    try {
        const members = await prisma.studyGroupMember.findMany({
            where: {
                studyGroupId
            },
            include: {
                user: true,
                studyGroup: true
            }
        })
        return members;
    } catch (error) {
        console.error(error);
        throw new Error("Error getting study group members " + error);
    }
}