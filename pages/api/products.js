import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const response = await prisma.product.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}