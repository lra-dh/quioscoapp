import { PrismaClient } from '@prisma/client'

export const getList = async () => {
    const prisma = new PrismaClient()
    const categorias = await prisma.categoria.findMany();
    return categorias;
}

export const getFirst = async (id) => {
    const prisma = new PrismaClient()
    const categoria = await prisma.categoria.findFirst({
        where: {
            id: Number(id)
        },
        include: {
            productos: true
        }
    });
    return categoria;
}