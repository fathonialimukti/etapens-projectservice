import { PrismaClient } from '../prisma/client/index.js'

const techList = new PrismaClient().techList


export const create = async (  ) => {
}

export const list = async (  ) => {
}

export const find = async ( name ) => {
    const tech = techList.findMany( {
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
    return tech
}