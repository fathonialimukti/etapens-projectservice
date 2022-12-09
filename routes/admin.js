import express from 'express'
import * as c from '../controllers/admin.js'

const adminRoutes = express.Router()

// adminRoutes.get( '/list-user', c.listUser )
adminRoutes.get( '/list-student', c.listStudent )
adminRoutes.get( '/list-lecturer', c.listLecturer )
adminRoutes.patch( '/activate-student', c.activateStudent )
adminRoutes.patch( '/activate-lecturer', c.activateLecturer )

adminRoutes.get( '/list-project', c.listProject )
adminRoutes.patch( '/activate-project', c.activateProject )

adminRoutes.get( '/list-backend', c.listBackend )
adminRoutes.patch( '/activate-backend', c.activateBackend )

adminRoutes.get( '/list-database', c.listDatabase )
adminRoutes.patch( '/activate-database', c.activateDatabase )

adminRoutes.get( '/list-tech', c.listTech )
adminRoutes.post( '/create-tech', c.createTech )
adminRoutes.delete( '/delete-tech', c.deleteTech )

adminRoutes.get( '/list-research-field', c.listResearchField )
adminRoutes.post( '/create-research-field', c.createResearchField )
adminRoutes.delete( '/delete-research-field', c.deleteResearchField )

adminRoutes.get( '/list-research-method', c.listResearchMethod )
adminRoutes.post( '/create-research-method', c.createResearchMethod )
adminRoutes.delete( '/delete-research-method', c.deleteResearchMethod )

export default adminRoutes