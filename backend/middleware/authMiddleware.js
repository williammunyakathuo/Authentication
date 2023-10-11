import jwt from 'jsonwebtoken'
import User from '../models/userModels.js';
import asyncHandler from 'express-async-handler';

const protect = asyncHandler (async (req, res, next) => {
    let token;
    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET )
            req.user = await User.findById(decoded.userId).select('-password')
            next()
        } catch (error) {
            res.status(401)
            throw new Error('not authorized, invalid token')
        }
    } else {
        res.status(401)
        throw new Error('not authorized, invalid failed')
    }
})

export {protect}