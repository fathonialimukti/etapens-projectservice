import { PrismaClient } from '@prisma/client'


const students = new PrismaClient().student


export const create = async ( data ) => {
    const newStudent = await students.create( {
        data: data,
        include: {
            user: true
        }
    } )

    return newStudent
}

export const update = async ( data ) => {
    delete data.isActive // to prevent user update their activation

    const updatedStudent = await students.update( {
        where: { id: data.id },
        data: data
    } )

    return updatedStudent
}

export const fullProfile = async ( id ) => {
    const student = await students.findFirstOrThrow( {
        where: { id: parseInt( id ) },
        include: {
            project: {
                include: {
                    lecturers: true
                }
            },
            backend: true,
            database: true
        }
    } )

    return student
}

export const profile = async ( studentName ) => {
    const student = await students.findFirstOrThrow( {
        where: {
            name: studentName
        },
        include: {
            project: true,
        }
    } )

    return student
}

export const list = async ( search ) => {
    const itemPerPage = parseInt( search.itemPerPage ) || 30
    const page = search.page - 1 || 0

    const data = await students.findMany( {
        skip: page * itemPerPage,
        take: itemPerPage,
        where: {
            isActive: search.isActive,
            name: {
                contains: search.name || undefined,
                mode: 'insensitive'
            }
        }
    } )

    const totalPage = Math.ceil( await students.count( {
        where: { isActive: search.isActive }
    } ) / itemPerPage )

    return { data, totalPage }
}

export const activate = async ( id ) => {
    await students.update( {
        where: { id: parseInt( id ) },
        data: { isActive: true }
    } )
}