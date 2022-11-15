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
        delete req.body.isActive

        const studentId = req.body.studentId
        req.body.student = {}
        req.body.student.connect = {}
        req.body.student.connect.id = parseInt( studentId )
        delete req.body.studentId
        console.log(req.body);
        const lecturerTemp = req.body.lecturers
        req.body.lecturers = {}
        req.body.lecturers = {
            connect: lecturerTemp || undefined
        }

        const techTemp = req.body.tech
        req.body.tech = {}
        req.body.tech = {
            connect: techTemp || undefined
        }

        const researchFieldTemp = req.body.researchFields
        req.body.researchFields = {}
        req.body.researchFields = {
            connect: researchFieldTemp || undefined
        }

        const methodTemp = req.body.methods
        req.body.methods = {}
        req.body.methods = {
            connect: methodTemp || undefined
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

        res.status( 200 ).json( { message: "OK" } )
    } catch ( error ) {
        next( error )
    }
}

export const updateBackend = async ( req, res, next ) => {
    try {

        res.status( 200 ).json( { message: "OK" } )
    } catch ( error ) {
        next( error )
    }
}

export const createDatabase = async ( req, res, next ) => {
    try {

        res.status( 200 ).json( { message: "OK" } )
    } catch ( error ) {
        next( error )
    }
}

export const updateDatabase = async ( req, res, next ) => {
    try {

        res.status( 200 ).json( { message: "OK" } )
    } catch ( error ) {
        next( error )
    }
}