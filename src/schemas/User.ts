import mongoose, { Document, Schema } from "mongoose";

type User = Document & {
    email: string;
    socket_id: string;
    name: string;
    avatar: string;    
}

const userSchema = new Schema({
    email: String,
    socket_id: String,
    name: String,
    avatar: String,
});

const User = mongoose.model<User>("Users", userSchema);

export { User };