import prisma from "@/lib/prisma";

export const assignUserToCourseService = async ({ userId, courseId }: { userId: string, courseId: string }) => {
    try {
        const member = await prisma.courseMember.create({
            data: {
                userId,
                courseId
            }
        });
        return member;
    } catch (error) {
        console.error(error);
        throw new Error("Error assigning user to course " + error);
    }

}


export const getCourseMembersService = async (courseId: string) => {
    try {
        const members = await prisma.courseMember.findMany({
            where: {
                courseId
            },
            include: {
                user: true,
                course: true
            }
        })
        return members;
    } catch (error) {
        console.error(error);
        throw new Error("Error getting course members " + error);
    }
}