import { PrismaClient } from '../prisma/client/index.js'

const users = new PrismaClient().user


export const create = async ( data ) => {
    const newUser = await users.create( { data: data } )
    return newUser
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
