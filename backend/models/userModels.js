import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

userSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next()
    }

    const hash = await bcrypt.hash(this.password, 13)
    this.password = await hash
})

const User = mongoose.model('User', userSchema)

export default User