import mongoose from 'mongoose'

interface UserDocument extends mongoose.Document {
    email: string
    password: string 
}

interface UserAttrs {
    email: string
    password: string
}

interface UserModel extends mongoose.Model<UserDocument> {
    build( attrs: UserAttrs ) : UserDocument 
}

const userSchema = new mongoose.Schema<UserDocument>({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


userSchema.statics.build = ( attrs: UserAttrs ) => {

    return new User ( attrs )

}

const User = mongoose.model<UserDocument, UserModel>('User', userSchema)

export { User }