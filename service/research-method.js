import { PrismaClient } from '../prisma/client/index.js'

const researchMethod = new PrismaClient().researchMethod


export const create = async () => { }

export const list = async ( page, isActive ) => {
}

export const find = async ( name ) => {
    const methodList = researchMethod.findMany( {
        take: 5,
        where: {
            name: {
                search: name
            },
        },
        select: {
            name: true,
        }
    } )
    return methodList
}