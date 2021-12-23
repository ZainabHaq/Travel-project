const router= require('express').Router();

let contactForm= require('../models/contactus.model')

router.route('/add').post((req,res)=>{
       const name= req.body.name;
       const email= req.body.email;
       const message= req.body.message;
       const newContactForm = new contactForm({
           name,
           email,
           message
       });
       newContactForm.save()
       .then(()=>{
           console.log('DATA API')
       })
       .catch(err=>{
           res.status(400).json('Error' +err)
       })
})

module.exports=router