import prisma from "@/lib/prisma";


export const createCourseService = async ({ title, description }: { title: string, description: string }) => {
    try {
        const newCourse = await prisma.course.create({
            data: {
                title,
                description
            }
        });
        return newCourse;
    }
    catch (error) {
        console.error(error);
        throw new Error("Error creating course " + error);
    }

}

export const getAllCoursesService = async () => {
    try {
        const courses = await prisma.course.findMany();
        return courses;
    } catch (error) {
        console.error(error);
        throw new Error("Error getting all courses " + error);
    }
}

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