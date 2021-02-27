const express =require('express')
const router = express.Router()
const UserModel = require('../model/usermodel')

//  GET ALL...

router.get('/', (req,res) => {

        UserModel.find()
        .then(response =>{
            res.json({
                response
            })
            console.log("Get all successfully!")
        })
        .catch(error =>{
            res.json({
                message:'An error Occured !'
            })
        })
    
})





//  GET ONE...

router.get('/:id',(req,res) => {

    UserModel.findById(req.params.id)
    .then(response =>{
        res.json({
            response
        })
        
    })
    .catch(error =>{
        res.json({
            message:'An error Occured !'
        })
    })

})




// POST Here...
router.post('/', (req,res) => {
   const postobj = new UserModel({
       pid:req.body.pid,
       name:req.body.name
   })  

const a1=  postobj.save()
.then(response =>{
    res.json({
        response
    })
    console.log("Inserted successfully!")
})
.catch(error =>{
    res.json({
        message:'An error Occured !'
    })
})


})


//PUT Here...
router.put('/:id', async(req,res) => {
    
    let id =req.params.id
    let updatedData={
        pid:req.body.pid,
        name:req.body.name
  }
  UserModel.findByIdAndUpdate(id,{$set:updatedData})
  .then(() =>{
    res.json({message:"Updated Successfully!"})
  }).catch(error =>{
    res.json({message:"An Error Occured!"})
  })
    
})



//DEL Here...
router.delete('/:id', async(req,res) => {
    let id =req.params.id
  UserModel.findByIdAndRemove(id)
  .then( () => {
      res.json({message:"Deleted Successfullty!"})
  }).catch(error => {
     res.json({message:"Error! Can't Delete the Item "})
  })
    
})


module.exports =router