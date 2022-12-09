import { PrismaClient } from '@prisma/client'

const techList = new PrismaClient().techList

export const list = async ( search ) => {
    const itemPerPage = parseInt( parseInt( search.itemPerPage ) ) || 25
    const page = search.page - 1 || 0

    const techs = await techList.findMany( {
        take: itemPerPage,
        skip: page * itemPerPage,
        where: {
            name: {
                contains: search.name,
                mode: 'insensitive'
            },
        }
    } )

    const totalPage = Math.ceil( await techList.count( {
        where: {
            name: {
                contains: search.name,
                mode: 'insensitive'
            },
        }
    } ) / itemPerPage )

    return { data: techs, totalPage }
}

export const create = async ( data ) => {
    const newTech = await techList.create( {
        data: data
    } )

    return newTech
}

export const remove = async ( id ) => {
    await techList.delete( {
        where: {
            id: parseInt( id )
        }
    } )
}