import { PrismaClient } from '../prisma/client/index.js'

const researchField = new PrismaClient().researchField


export const create = async ( ) => {}

export const list = async ( ) => {}

export const find = async ( name ) => {
    const researchFieldList = researchField.findMany( {
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
    return researchFieldList
}