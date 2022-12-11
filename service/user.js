import { PrismaClient } from '@prisma/client'

const users = new PrismaClient().user

export const list = async ( search ) => {
    const itemPerPage = parseInt( parseInt( search.itemPerPage ) ) || 25
    const page = search.page - 1 || 0

    const listUser = await users.findMany( {
        skip: page * itemPerPage,
        take: itemPerPage,
        where: {
            email: {
                contains: search.email
            }
        }
    } )
    const totalUser = await users.count( {
        where: {
            email: {
                contains: search.email
            }
        }
    } )
    const totalPage = Math.ceil( totalUser / itemPerPage )

    return { data: listUser, totalPage, totalUser }
}

export const grantAdmin = async ( id ) => {
    const newAdmin = await users.update( {
        where: {
            id: id
        },
        data: {
            role: 'Admin'
        }
    } )

    return newAdmin
}

export const get = async ( data ) => {
    const upsertUser = await users.upsert( {
        where: {
            username: data.username,
        },
        update: {},
        create: {
            username: data.username,
            email: data.email
        },
        include: {
            studentAccount: true,
            lecturerAccount: true
        }
    } )

    return upsertUser
}

export const update = async ( data ) => {
    const updatedUser = await users.update( {
        where: {
            id: data.id,
        },
        data: {
            role: data.role
        },
    } )

    return updatedUser
}
