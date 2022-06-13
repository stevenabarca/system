const e = require("express");
var express = require("express");
var router = express.Router();


const credential = {
    email:"admin@gmail.com",
    password:"admin123"

}

//login user
router.post('/login',(req,res)=>{
    if(req.body.email==credential.email&&req.body.password==credential.password){
        req.session.user=req.body.email;
        res.redirect('/route/dashboard');
        //res.end("Login Sucessful")
    }else{
        res.redirect('Invalid Username');
    }
});

//route to dashboard
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else
        res.send('Unauthorized User') 
        
})

router.get('/cc', (req, res) => {
    //console.log('Request for about page recieved');
    if(req.session.user){
        res.render('cc',{user:req.session.user})
    }else
        res.send('Unauthorized User')
  });

  router.get('/bp', (req, res) => {
    //console.log('Request for about page recieved');
    if(req.session.user){
        res.render('bp',{user:req.session.user})
    }else
        res.send('Unauthorized User')
  });

  router.get('/loans', (req, res) => {
    //console.log('Request for about page recieved');
    if(req.session.user){
        res.render('loans',{user:req.session.user})
    }else
        res.send('Unauthorized User')
  });

  router.get('/summary', (req, res) => {
    //console.log('Request for about page recieved');
    if(req.session.user){
        res.render('summary',{user:req.session.user})
    }else
        res.send('Unauthorized User')
  });

  router.get('/transfer', (req, res) => {
    //console.log('Request for about page recieved');
    if(req.session.user){
        res.render('transfer',{user:req.session.user})
    }else
        res.send('Unauthorized User')
  });

  router.post('/transfer', (req, res) => {
    console.log('req.body');
    //var transaction = req.form.transaction;
    if(req.session.user){
        res.render('./review',{user:req.session.user})
    }else
        res.send('Unauthorized User')

  })


  router.get('/profile', (req, res) => {
    //console.log('Request for about page recieved');
    if(req.session.user){
        res.render('profile',{user:req.session.user})
    }else
        res.send('Unauthorized User')
  });


//route for logout
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err)
            res.send('Error')
        }else{
        res.render('base',{title:'City Bank'})
    
    }
    
    })

/*router.get("/",(req,res)=>{
    res.render('base',{title:'Login System'})
})
    
router.get("/",(req,res)=>{
        res.render('base',{title:'Login System'})
})
    
router.get("/",(req,res)=>{
    res.render('base',{title:'Login System'})
})   */

})
module.exports = router;