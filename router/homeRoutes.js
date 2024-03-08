const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../module/User');
const {userSchema, loginSchema } = require('../module/joiValidation');

const { home, upload, forget, create, del } = require('../controller/homepage');
const Pant_user = require('../module/User');


router.get('/', home)

router.get('/login',(req, res) =>{
res.render('login')
})


router.post('/login', async(req,res)=>{
    try {
        const { username, password } = req.body;

        const user = await Pant_user.findOne({
            where:{ username }});

    if(!user){
        return res.status(404).json({ error: 'User not found'});
    }

const isPasswordValid = await bcrypt.compare(password, user.password);

if(!isPasswordValid){
    return res.status(401).json({ error: 'invalid password'});
}
 
//  res.json({ user });
res.render('profile')

} catch (error) {
    res.status(500).json({ error: error.message});
}
});




// router.get('/forget', forget)

router.get('/signup', create)



router.post('/signup', async(req, res) =>{
    try{
// joi validation

const { error } = userSchema.validate(req.body);
if ( error ) return res.status(400).send(error.details[0].message);

        const { firstname, lastname, username, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await Pant_user.create({firstname, lastname, username, email, password:hashedPassword});

        res.status(201).json({user});
     
    } catch (error) {
        res.status(500).json({error:error.message})
    }
});



router.get('/forget', forget)

router.post('/forget', async (req, res)=> {
try {
    const { email , password } = req.body;
    const user = await Pant_user.findOne({
        where: {email: email }
    });
        
    if (!user) {
        return res.status(404).json({ message: 'User not found'})
    }

    user.password = password;
    await user.save();
    return res.status(200).json({ message: 'password updated', user})
    
} catch (error) {
    res.send(error)
}

})



router.get ('/delete', del )

router.post('/delete', async (req, res)=> {
    try {
        const { email } = req.body;
        const user = await Pant_user.findOne({
            where: { email } 
            
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found'})
        }

        await user.destroy();
        return res.render('login')
       

    } catch (error) {
        res.send(error)
    }
    })
    
    











module.exports = router;
