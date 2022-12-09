import * as projectService from "../service/project.js"
import * as studentService from "../service/student.js"
import * as lecturerService from "../service/lecturer.js"
import * as backendService from "../service/backend.js"
import * as databaseService from "../service/database.js"
import * as techListService from "../service/tech-list.js"
import * as researchFieldService from "../service/research-field.js"
import * as researchMethodService from "../service/research-method.js"



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

        const result = await projectService.listAdmin( search )

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
    try {
        const search = req.query
        if ( search.isActive === 'Active' ) search.isActive = true
        else if ( search.isActive === 'Inactive' ) search.isActive = false
        else if ( search.isActive === 'All' ) search.isActive = undefined

        search.tech = search.tech || undefined

        const result = await backendService.list( search )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const activateBackend = async ( req, res, next ) => {
    try {
        await backendService.activate( req.body.id, req.body.url )
        res.status( 200 ).json( { message: "OK" } )
    } catch ( error ) {
        next( error )
    }
}

export const listDatabase = async ( req, res, next ) => {
    try {
        const search = req.query
        if ( search.isActive === 'Active' ) search.isActive = true
        else if ( search.isActive === 'Inactive' ) search.isActive = false
        else if ( search.isActive === 'All' ) search.isActive = undefined

        search.tech = search.tech || undefined

        const result = await databaseService.list( search )

        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const activateDatabase = async ( req, res, next ) => {
    try {
        await databaseService.activate( req.body.id )
        res.status( 200 ).json( { message: "OK" } )
    } catch ( error ) {
        next( error )
    }
}

export const listTech = async ( req, res, next ) => {
    try {
        const result = await techListService.list( req.query )
        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const createTech = async ( req, res, next ) => {
    try {
        const result = await techListService.create( req.body )
        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const deleteTech = async ( req, res, next ) => {
    try {
        await techListService.remove( req.body.id )
        res.status( 200 ).json( { message: "OK" } )
    } catch ( error ) {
        next( error )
    }
}

export const listResearchField = async ( req, res, next ) => {
    try {
        const result = await researchFieldService.list(req.query)
        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const createResearchField = async ( req, res, next ) => {
    try {
        const result = await researchFieldService.create( req.body )
        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const deleteResearchField = async ( req, res, next ) => {
    try {
        await researchFieldService.remove( req.body.id )
        res.status( 200 ).json( { message: "OK" } )
    } catch ( error ) {
        next( error )
    }
}

export const listResearchMethod = async ( req, res, next ) => {
    try {
        const result = await researchMethodService.list( req.query )
        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const createResearchMethod = async ( req, res, next ) => {
    try {
        const result = await researchMethodService.create( req.body )
        res.status( 200 ).json( result )
    } catch ( error ) {
        next( error )
    }
}

export const deleteResearchMethod = async ( req, res, next ) => {
    try {
        await researchMethodService.remove( req.body.id )
        res.status( 200 ).json( { message: "OK" } )
    } catch ( error ) {
        next( error )
    }
};

