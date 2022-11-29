import mongoose from 'mongoose';
const schema = mongoose.Schema({
    dislikes: Number,
    username: String,
    handle: String,
    comments: Number,
    tweets: Number,
    avatarIcon: String,
    tuit: String,
    likes: Number,
    liked: Boolean,
}, {collection: 'tuits'});
export default schema;