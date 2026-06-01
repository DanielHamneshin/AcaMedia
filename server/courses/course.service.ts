import prisma from "@/lib/prisma";


export const createCourseService = async ({ title, description }: { title: string, description: string }) => {
    return await prisma.course.create({
        data: {
            title,
            description
        }
    });
}

export const getAllCoursesService = async () => {
    return await prisma.course.findMany();
}