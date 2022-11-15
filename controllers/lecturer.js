import * as userService from "../service/user.js"
import * as projectService from "../service/project.js"
import * as backendService from "../service/backend.js"
import * as databaseService from "../service/database.js"
import * as studentService from "../service/student.js"
import * as lecturerService from "../service/lecturer.js"


export const getProfile = async ( req, res, next ) => {
    try {
        // redundance
        const result = await lecturerService.fullProfile( req.query.id )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const createLecturerAccount = async ( req, res, next ) => {
    try {
        const result = await lecturerService.create( req.body )
        await userService.update( { id: result.user.id, role: 'Lecturer' } )
        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const updateLecturerAccount = async ( req, res, next ) => {
    try {
        const result = await lecturerService.update( req.body )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}