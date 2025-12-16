
const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: String,
    content: String
});

module.exports = mongoose.model('Notes', NotesSchema);

