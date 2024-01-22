const mongoose = require('mongoose');

const AuthorSchema = ({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"]
    }
});

module.exports = mongoose.model('Author', AuthorSchema);