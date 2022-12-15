import { PrismaClient } from '@prisma/client'


const backends = new PrismaClient().backend


export const create = async ( data ) => {
    const newBackend = await backends.create( {
        data: data
    } )

    return newBackend
}

export const list = async ( search ) => {
    const itemPerPage = parseInt( parseInt( search.itemPerPage ) ) || 12
    const page = search.page - 1 || 0

    const listBackend = await backends.findMany( {
        skip: page * itemPerPage,
        take: itemPerPage,
        where: {
            isActive: search.isActive,
        },
        include: {
            student: {
                select: {
                    user: {
                        select: {
                            username: true
                        }
                    },
                    name: true
                }
            },
        }
    } )
    const totalPage = Math.ceil( await backends.count( {
        where: {
            isActive: search.isActive,
        }
    } ) / itemPerPage )
    return { data: listBackend, totalPage }
}

export const activate = async ( id, url ) => {
    const project = await backends.update( {
        where: { id: parseInt( id ) },
        data: {
            isActive: true,
            url: url
        }
    } )
    return project
}