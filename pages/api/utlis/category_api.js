import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCategory = async () => {
    const categories = await prisma.Category.findMany();
    return categories;
}

export const getCategoryById = async (id) => {
    const category = await prisma.Category.findMany({
        where:{
            id: id
        }
    });
    return category;
}