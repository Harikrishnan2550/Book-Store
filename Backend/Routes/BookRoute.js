const express=require('express')

const router= express.Router()

const book=require('../Models/BookModel')

router.post('/', async(req,res)=>{
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message: 'send all required fields: title, author, publishyear',
            })
        }
        const newBook={
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };

        const books=await book.create(newBook)
        return res.status(201).send(books)
    } catch(error){
        console.log(error.message);
        res.status(500).send({
            message:error.message
        })
    }
})


router.get('/',async(req,res)=>{
    try{
        const books=await book.find({});

        return res.status(200).json({
            count: books.length,
            data:books
        })
    }catch(error){
        console.log(error.message);
        res.status(500).send({
            message:error.message
        })
    }
})


router.get('/:id',async(req,res)=>{
    try{

        const {id}=req.params;
        const books = await book.findById(id);

        return res.status(200).json({
            count: books.length,
            data:books
        })
    }catch(error){
        console.log(error.message);
        res.status(500).send({
            message:error.message
        })
    }
})

// router.get('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const book = await Book.findById(id); // Assuming the model is named "Book"

//         if (!book) {
//             return res.status(404).json({ message: 'Book not found' });
//         }

//         return res.status(200).json({
//             data: book
//         });
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({
//             message: error.message
//         });
//     }
// });



router.put('/:id', async(req,res)=>{
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message: 'send all required fields: title, author, publishyear',
            })
        }
     
        const {id}=req.params;
        const result= await book.findByIdAndUpdate(id,req.body)

        if(!result){
            return res.status(404).json({
                message:'book not found'
            })
        }
        return res.status(200).send({ message:'Book updated successfully'})

    } catch(error){
        console.log(error.message);
        res.status(500).send({
            message:error.message
        })
    }
})


router.delete('/:id', async(req,res)=>{
    try{
      
        const {id}=req.params;
        const result= await book.findByIdAndDelete(id)

        if(!result){
            return res.status(404).json({
                message:'book not found'
            })
        }
        return res.status(200).send({ message:'Book deleted successfully'})

    } catch(error){
        console.log(error.message);
        res.status(500).send({
            message:error.message
        })
    }
})


module.exports=router;