import { PrismaClient } from '@prisma/client'

export const getList = async () => {
    const prisma = new PrismaClient()
    const productos = await prisma.producto.findMany();
    return productos;
}

export const getFirst = async (id) => {
    const prisma = new PrismaClient()
    const producto = await prisma.producto.findFirst({
        where: {
            id: Number(id)
        }
    });
    return producto;
}