const express =require('express')
const router = express.Router()
const UserModel = require('../model/usermodel')

//  GET ALL...

router.get('/', async(req,res) => {

    try{ 
        const umodels= await UserModel.find()
         res.json(umodels)

    }catch(err){
        res.send('Error',+err)
    }
})




//  GET ONE...

router.get('/:id', async(req,res) => {

    try{ 
        const umodel= await UserModel.findById(req.params.id)
         res.json(umodel)

    }catch(err){
        res.send('Error',+err)
    }
})




// POST Here...
router.post('/', async(req,res) => {
   const postobj = new UserModel({
       pid:req.body.pid,
       name:req.body.name
   })  
   try{

    const a1= await postobj.save()
    res.json(a1)
 
 }catch(err)
 {
     res.send('Error',+err)
 }

})


//PUT Here...
router.put('/:id', async(req,res) => {

    try{
          const putobj = await UserModel.findById(req.params.id)
          putobj.pid= req.body.pid
          putobj.name=req.body.name
          const a2= await putobj.save()
          res.json(a2)
          console.log("Updated Succesfully!")
    }catch(err)
    {
        res.send('Error',+err)
    }
})



//DEL Here...
router.delete('/:id', async(req,res) => {

    try{
           const delobj = await UserModel.findById(req.params.id)
           const a3 = await delobj.delete()
           res.json(a3)
           console.log('Deleted Successfully!')
             
    }catch(err)
    {
        res.send('Error',+err)
    }
})


module.exports =router