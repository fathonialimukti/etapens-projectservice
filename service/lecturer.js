import { PrismaClient } from '../prisma/client/index.js'

const lecturers = new PrismaClient().lecturer


export const create = async ( data ) => {
    const newLecturer = await lecturers.create( {
        data: data,
        include: {
            user: true
        }
    } )
    return newLecturer
}

export const profile = async ( lecturerName ) => {
    const lecturer = await lecturers.findFirstOrThrow( {
        where: {
            name: lecturerName
        },
        include: {
            project: {
                include: {
                    student: true
                }
            }
        }
    } )

    return lecturer
}

export const fullProfile = async ( id ) => {
    const lecturer = await lecturers.findFirstOrThrow( {
        where: {
            id: parseInt( id )
        },
        include: {
            project: {
                include: {
                    student: true
                }
            }
        }
    } )

    return lecturer
}

export const update = async ( data ) => {
    delete data.isActive // to prevent user update their activation

    const updatedLecturer = await lecturers.update( {
        where: { id: parseInt( data.id ) },
        data: data
    } )
    return updatedLecturer
}

export const list = async ( search ) => {
    const itemPerPage = parseInt( search.itemPerPage ) || 30
    const page = search.page-- || 0

    const data = await lecturers.findMany( {
        skip: page * itemPerPage,
        take: itemPerPage,
        where: {
            isActive: search.isActive,
            name: {
                search: search.name
            }
        }
    } )

    const totalPage = Math.ceil( await lecturers.count( {
        where: { isActive: search.isActive }
    } ) / itemPerPage )

    return { data, totalPage }
}

export const activate = async ( id ) => {
    await lecturers.update( {
        where: { id: parseInt( id ) },
        data: { isActive: true }
    } )
}

export const find = async ( name ) => {
    const lecturer = lecturers.findMany( {
        take: 5,
        where: {
            name: {
                search: name
            },
            isActive: true
        },
        select: {
            name: true,
        }
    })
    return lecturer
}