import { PrismaClient } from '@prisma/client'


const researchField = new PrismaClient().researchField


export const list = async ( search ) => {
    const itemPerPage = parseInt( parseInt( search.itemPerPage ) ) || 25
    const page = search.page - 1 || 0

    const researchFields = await researchField.findMany( {
        take: itemPerPage,
        skip: page * itemPerPage,
        where: {
            name: {
                contains: search.name,
                mode: 'insensitive'
            },
        }
    } )

    const totalPage = Math.ceil( await researchField.count( {
        where: {
            name: {
                contains: search.name,
                mode: 'insensitive'
            },
        }
    } ) / itemPerPage )

    return { data: researchFields, totalPage }
}

export const create = async ( data ) => {
    const newResearchField = await researchField.create( {
        data: data
    } )

    return newResearchField
}

export const remove = async ( id ) => {
    await researchField.delete( {
        where: {
            id: parseInt(id)
        }
    } )
}