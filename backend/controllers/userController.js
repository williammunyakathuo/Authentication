import generateToken from '../utils/token.js'
import User from '../models/userModels.js'

const authUser = async(req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if (user && (await user.matchPasswords(password))) {
        generateToken(res, user._id)
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password
        })
    } else {
        res.status(401);
        throw new Error ('Invalid user data')
    }


}

//register new user
const registerUser = async(req, res) => {
    const {name, email, password} = req.body;

    const userExist = await User.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error('User already Exist')
    }
    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password
        })
    } else {
        res.status(400);
        throw new Error ('Invalid user data')
    }

}

//logout user

const logoutUser = async(req, res) => {
    res.cookie('jwt', '',{
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({message: 'User loged out'})
}

//get user profie

const getUser = async(req, res) => {
    res.status(200).json({message : 'User'})
}

//update user profile

const updateUser = async(req, res) => {
    res.status(200).json({message : 'Update user'})
}

export {
    authUser,
    registerUser,
    logoutUser,
    getUser,
    updateUser 
}