import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        required: [
            true,
            "El email es obligatorio"
        ],
        unique: true,
    },
    password: {
        type: String,
        Selection:false,    
   
    },
    name: {
        type: String,
        required: [
            true,
            "El nombre es obligatorio"
        ],
        minLength:[3, 'El nombre debe tener minimo 3 characters'],
        maxLength:[50, 'El nombre debe tener maximo 50 characters'],
    },
    image: { type: String },
    provider: { type: String },
    providerAccountId: { type: String },
})

const User = models.User || model('User', UserSchema)
export default User