const express=require('express')//

const cors=require('cors')

const app=express()//

const port=5000//

const mongoose=require('mongoose')//

const mongodbURL='mongodb://localhost:27017/BookStore'//

const book=require('./Models/BookModel.js')//

const BookRoute=require('./Routes/BookRoute')

app.use(express.json())

app.use(cors())

app.use('/book',BookRoute)


//
mongoose.connect(mongodbURL)
.then(()=>{
    console.log("Database connected successfully")
})
.catch((error)=>{
    console.log(error)
})

//
app.listen(port,()=>{
    console.log(`server running successfully at localhost ${port}`)
})