import * as userService from "../service/user.js"
import * as projectService from "../service/project.js"
import * as studentService from "../service/student.js"
import * as lecturerService from "../service/lecturer.js"
import * as backendService from "../service/backend.js"
import * as databaseService from "../service/database.js"


export const listUser = async ( req, res, next ) => {
    try {
        res.status( 200 ).json( "OK" )
    } catch ( error ) {
        next( error )
    }
}

export const listStudent = async ( req, res, next ) => {
    try {
        const search = req.query

        if ( search.isActive === 'Active' ) search.isActive = true
        else if ( search.isActive === 'Inactive' ) search.isActive = false
        else if ( search.isActive === 'All' ) search.isActive = undefined
        else search.isActive = undefined

        const result = await studentService.list( search )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const listLecturer = async ( req, res, next ) => {
    try {
        const search = req.query

        if ( search.isActive === 'Active' ) search.isActive = true
        else if ( search.isActive === 'Inactive' ) search.isActive = false
        else if ( search.isActive === 'All' ) search.isActive = undefined
        else search.isActive = undefined

        const result = await lecturerService.list( search )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const activateStudent = async ( req, res, next ) => {
    try {
        await studentService.activate( parseInt( req.body.id ) )

        res.status( 200 ).json( "OK" )
    } catch ( error ) {
        next( error )
    }
}

export const activateLecturer = async ( req, res, next ) => {
    try {
        await lecturerService.activate( parseInt( req.body.id ) )

        res.status( 200 ).json( "OK" )
    } catch ( error ) {
        next( error )
    }
}

export const listProject = async ( req, res, next ) => {
    try {
        const search = req.query
        if ( search.isActive === 'Active' ) search.isActive = true
        else if ( search.isActive === 'Inactive' ) search.isActive = false
        else if ( search.isActive === 'All' ) search.isActive = undefined

        search.tech = search.tech || undefined

        const result = await projectService.list( search )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const activateProject = async ( req, res, next ) => {
    try {
        await projectService.activate( req.body.id, req.body.url )

        res.status( 200 ).json( { message: "OK" } )
    } catch ( error ) {
        next( error )
    }
}

export const listBackend = async ( req, res, next ) => {

    res.status( 200 ).json( { message: "OK" } )
}

export const activateBackend = async ( req, res, next ) => {

    res.status( 200 ).json( { message: "OK" } )
}

export const listDatabase = async ( req, res, next ) => {

    res.status( 200 ).json( { message: "OK" } )
}

export const activateDatabase = async ( req, res, next ) => {

    res.status( 200 ).json( { message: "OK" } )
};

