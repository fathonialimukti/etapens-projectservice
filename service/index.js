import { PrismaClient } from '../prisma/client/index.js'

const prisma = new PrismaClient()

export const test = () => {
    const result = prisma.project.create()
    return result
}

export const findResearchField = async ( name ) => {
    const lecturer = lecturers.findMany( {
        take: 10,
        where: {
            name: {
                search: name
            },
        },
        select: {
            name: true,
        }
    } )
    return lecturer
}

export const findMethod = async ( name ) => {
    const lecturer = lecturers.findMany( {
        take: 10,
        where: {
            name: {
                search: name
            },
        },
        select: {
            name: true,
        }
    } )
    return lecturer
}