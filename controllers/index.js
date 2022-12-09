import * as tests from "../service/index.js"
import * as userService from "../service/user.js"
import * as studentService from "../service/student.js"
import * as lecturerService from "../service/lecturer.js"
import * as projectService from "../service/project.js"
import * as backendService from "../service/backend.js"
import * as databaseService from "../service/database.js"
import * as techListService from "../service/tech-list.js"
import * as researchFieldService from "../service/research-field.js"
import * as researchMethodService from "../service/research-method.js"


export const listProject = async ( req, res, next ) => {
    try {
        req.query.isActive = true

        const result = await projectService.list( req.query )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const getOneProject = async ( req, res, next ) => {
    try {
        const result = await projectService.get( req.query.title )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const getUser = async ( req, res, next ) => {
    try {
        const result = await userService.get( req.body )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const getStudentProfile = async ( req, res, next ) => {
    try {
        const result = await studentService.profile( req.query.studentName )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const getLecturerProfile = async ( req, res, next ) => {
    try {
        const result = await lecturerService.profile( req.query.lecturerName )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}


export const postComment = async ( req, res, next ) => {
    try {
        const result = await projectService.comment( req.body.id, req.body.username, req.body.comment )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const findLecturer = async ( req, res, next ) => {
    try {
        const result = await lecturerService.find( req.query.name )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const findTechList = async ( req, res, next ) => {
    try {
        const search = {
            name: req.query.name,
            itemPerPage: 5
        }
        const result = await techListService.list( search )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const findResearchField = async ( req, res, next ) => {
    try {
        const search = {
            name: req.query.name,
            itemPerPage: 5
        }
        const result = await researchFieldService.list( search )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const findResearchMethod = async ( req, res, next ) => {
    try {
        const search = {
            name: req.query.name,
            itemPerPage: 5
        }
        const result = await researchMethodService.list( search )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const test = async ( req, res, next ) => {
    try {
        const result = await tests.test()
        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}