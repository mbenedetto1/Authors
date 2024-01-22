const Author = require('../models/author.model');

module.exports = {
    // CREATE
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then((newAuthor) => {res.json(newAuthor)})
            .catch((err) => {console.log(err);
                res.status(500).json(err)});
    },
    // Get All
    getAllAuthors: (req, res) => {
        Author.find()
            .then((allAuthors) => {
                console.log(allAuthors);
                res.json(allAuthors)})
            .catch((err) => 
                console.log(err));
                ;
    },
    // Get One
    getOneAuthorById: (req, res) => {
        Author.findOne({_id: req.params._id})
            .then((author) => res.json(author))
            .catch((err) => console.log(err));
    },
    // UPDATE
    updateAuthor: (req, res) => {
        Author.findOneAndUpdate({_id:req.params._id}, req.body, {
            runValidators: true,
            new: true,
        })
            .then((updatedAuthor) => res.json(updatedAuthor))
            .catch((err) => {console.log(err);
                res.status(500).json(err)});
    },
    // DELETE
    deleteAuthor: (req, res) => {
        Author.deleteOne({_id: req.params._id})
            .then(result => res.json(result))
            .catch((err) => console.log(err));
    }
}