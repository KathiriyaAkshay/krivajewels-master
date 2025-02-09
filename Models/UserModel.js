import Mongoose from "mongoose";

const UserSchema = new Mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 3,
            max: 20,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50
        },
        profile: {
            type: String,
            required: false
        },
        password: {
            type: String,
            required: true
        }
    }, { timestamps: true }
)

const User = Mongoose.model("User", UserSchema);
export default User;