import express from 'express'
import * as c from '../controllers/admin.js'

const adminRoutes = express.Router()

adminRoutes.get( '/list-user', c.listUser )
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

export default adminRoutes