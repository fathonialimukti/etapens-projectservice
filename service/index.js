import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const test = async () => {
    const result = await prisma.project.create({})

    return result
}