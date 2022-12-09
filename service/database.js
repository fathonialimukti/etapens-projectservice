import { PrismaClient } from '@prisma/client'


const databases = new PrismaClient().database


export const create = async ( data ) => {
    const newBackend = await databases.create( {
        data: data
    } )

    return newBackend
}

export const list = async ( search ) => {
    const itemPerPage = parseInt( parseInt( search.itemPerPage ) ) || 12
    const page = search.page - 1 || 0

    const listBackend = await databases.findMany( {
        skip: page * itemPerPage,
        take: itemPerPage,
        where: {
            isActive: search.isActive,
        },
        include: {
            student: {
                select: {
                    name: true
                }
            }
        }
    } )
    const totalPage = Math.ceil( await databases.count( {
        where: {
            isActive: search.isActive,
        }
    } ) )
    return { data: listBackend, totalPage }
}

export const activate = async ( id ) => {
    const project = await databases.update( {
        where: { id: parseInt( id ) },
        data: {
            isActive: true,
        }
    } )
    return project
}