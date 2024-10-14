const mongoose=require('mongoose')

const bookSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        author:{
            type: String,
            required: true
        },

        publishYear:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const book= mongoose.model("book",bookSchema)

module.exports=book;

// const mongoose = require('mongoose');

// const bookSchema = mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true
//     },
//     author: {
//       type: String,
//       required: true
//     },
//     publishYear: {
//       type: Number,  // Changed to Number
//       required: true
//     }
//   },
//   {
//     timestamps: true  // Automatically adds `createdAt` and `updatedAt`
//   }
// );

// const Book = mongoose.model("Book", bookSchema);

// module.exports = Book;
