import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },

});
const userModel = mongoose.model("User", UserSchema);
export default userModel;