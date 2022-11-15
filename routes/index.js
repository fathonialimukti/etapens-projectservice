import express from 'express'
import * as c from '../controllers/index.js'

const indexRoute = express.Router()

indexRoute.get( '', c.listProject )
indexRoute.get( '/get-project', c.getOneProject )

indexRoute.post( '/get-user', c.getUser )

indexRoute.get( '/get-student-profile', c.getStudentProfile )
indexRoute.get( '/get-lecturer-profile', c.getLecturerProfile )

indexRoute.post( '/post-comment', c.postComment)
indexRoute.get( '/find-lecturer', c.findLecturer )

indexRoute.get( '/test', c.test )

indexRoute.get( '/find-tech-list', c.findTechList)
indexRoute.get( '/find-research-field', c.findResearchField)
indexRoute.get( '/find-research-method', c.findResearchMethod)

export default indexRoute