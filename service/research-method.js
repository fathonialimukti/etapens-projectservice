import { PrismaClient } from '@prisma/client'


const researchMethod = new PrismaClient().researchMethod

export const list = async ( search ) => {
    const itemPerPage = parseInt( parseInt( search.itemPerPage ) ) || 25
    const page = search.page - 1 || 0

    const researchMethods = await researchMethod.findMany( {
        take: itemPerPage,
        skip: page * itemPerPage,
        where: {
            name: {
                contains: search.name,
                mode: 'insensitive'
            },
        }
    } )

    const totalPage = Math.ceil( await researchMethod.count( {
        where: {
            name: {
                contains: search.name,
                mode: 'insensitive'
            },
        }
    } ) / itemPerPage )

    return { data: researchMethods, totalPage }
}

export const create = async ( data ) => {
    const newTech = await researchMethod.create( {
        data: data
    } )

    return newTech
}

export const remove = async ( id ) => {
    await researchMethod.delete( {
        where: {
            id: parseInt( id )
        }
    } )
}