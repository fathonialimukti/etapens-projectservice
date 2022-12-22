import express from 'express'
import * as c from '../controllers/lecturer.js'

const lecturerRoute = express.Router()

lecturerRoute.get( '', c.getProfile )
lecturerRoute.post( '/create', c.createLecturerAccount )
lecturerRoute.patch( '/update', c.updateLecturerAccount )

export default lecturerRoute