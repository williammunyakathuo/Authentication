import express  from "express";
const router = express.Router()
import { authUser,
        getUser, 
        logoutUser, 
        registerUser, 
        updateUser} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";
 

router.post('/auth', authUser)
router.post('/', registerUser)
router.post('/logout', logoutUser)
router.route('/profile').get(protect, getUser).put(protect, updateUser) 

export default router;