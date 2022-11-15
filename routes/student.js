import express from 'express'
import * as c from '../controllers/student.js'

const studentRoute = express.Router()

studentRoute.get( '', c.getProfile )
studentRoute.post( '/create', c.createStudentAccount )
studentRoute.patch( '/update', c.updateStudentAccount )

studentRoute.post( '/project', c.createProject )
studentRoute.patch( '/project', c.updateProject )

studentRoute.post( '/backend', c.createBackend )
studentRoute.patch( '/backend', c.updateBackend )

studentRoute.post( '/database', c.createDatabase )
studentRoute.patch( '/database', c.updateDatabase )

// studentRoute.delete( '/:id', c.deletePost )

export default studentRoute