import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProducts = async () => {
    const products = await prisma.Product.findMany();
    return products;
}

export const getProductById = async (id) => {
    const product = await prisma.Product.findMany({
        where:{
            id: id
        }
    });
    return product;
}