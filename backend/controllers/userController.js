import User from '../models/userModels.js'

const authUser = async(req, res) => {
    res.status(200).json({message : 'auth user'})
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
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password
        })
    }

}

//logout user

const logoutUser = async(req, res) => {
    res.status(200).json({message : 'Logout user'})
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