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

