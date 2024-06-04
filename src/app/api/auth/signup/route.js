import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import User from "@/models/user"
import { connectDB } from "@/libs/mongodb"


export async function POST(request) {

    const { name, password, email } = await request.json()

 
    try {
        await connectDB()
        const userFound = await User.findOne({ email: email })
        if (userFound) return NextResponse.json({
            message: "El usuario ya existe"
        }, { status: 400 })

        const hashPassword = await bcrypt.hash(password, 12)

        const user = new User({
            name: name,
            password: hashPassword,
            email: email
        })

        const savedUser = await user.save()

        console.log(savedUser)


        return NextResponse.json({
            email: savedUser.email,
            name: savedUser.name,
            _id: savedUser._id
        })
    } catch (error) {
        console.log(error)
        return NextResponse.error()
    }


}