import express  from "express";
const router = express.Router()
import { authUser,
        getUser, 
        logoutUser, 
        registerUser, 
        updateUser} from "../controllers/userController.js";


router.post('/auth', authUser)
router.post('/', registerUser)
router.post('/logout', logoutUser)
router.route('/profile').get(getUser).put(updateUser) 

export default router;