import {Router} from 'express'
import student_router from '../student/student_router'
import user_router from '../users/user_router'
const router = Router()

    const myRouter = [
        {path:'/users',routes:user_router},
        {path:'/users',routes:student_router},
    ]

myRouter.forEach((route)=> router.use(route.path,route.routes))



export default router 