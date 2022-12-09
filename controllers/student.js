import * as userService from "../service/user.js"
import * as projectService from "../service/project.js"
import * as backendService from "../service/backend.js"
import * as databaseService from "../service/database.js"
import * as studentService from "../service/student.js"
import * as lecturerService from "../service/lecturer.js"


export const getProfile = async ( req, res, next ) => {
    try {
        const result = await studentService.fullProfile( parseInt( req.query.id ) )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const createStudentAccount = async ( req, res, next ) => {
    try {
        req.body.user = {}
        req.body.user.connect = { id: req.body.userId }

        delete req.body.userId

        const result = await studentService.create( req.body )
        await userService.update( { id: result.user.id, role: 'Student' } )
        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const updateStudentAccount = async ( req, res, next ) => {
    try {
        const result = await studentService.update( req.body )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }

}

export const createProject = async ( req, res, next ) => {
    try {
        req.body.student = {
            connect: {
                id: parseInt( req.body.studentId )
            }
        }
        delete req.body.studentId
        req.body.lecturers = {
            connect: req.body.lecturers
        }

        req.body.method = {
            connect: req.body.method || undefined
        }

        req.body.researchField = {
            connect: req.body.researchField || undefined
        }

        req.body.method = {
            connect: req.body.method || undefined
        }

        const result = await projectService.create( req.body )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const updateProject = async ( req, res, next ) => {
    try {
        delete req.body.isActive
        const result = await projectService.update( req.body )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const createBackend = async ( req, res, next ) => {
    try {
        req.body.student = {
            connect: {
                id: parseInt( req.body.studentId )
            }
        }
        
        delete req.body.isActive
        delete req.body.studentId

        const result = await backendService.create( req.body )
        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const updateBackend = async ( req, res, next ) => {
    try {
        delete req.body.isActive
        const result = await backendService.update( req.body )
        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const createDatabase = async ( req, res, next ) => {
    try {
        req.body.student = {
            connect: {
                id: parseInt( req.body.studentId )
            }
        }

        delete req.body.isActive
        delete req.body.studentId

        const result = await databaseService.create( req.body )
        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const updateDatabase = async ( req, res, next ) => {
    try {
        delete req.body.isActive
        const result = await databaseService.update( req.body )
        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}