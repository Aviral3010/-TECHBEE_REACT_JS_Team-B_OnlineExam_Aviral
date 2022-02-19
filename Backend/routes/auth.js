
var bcrypt = require('bcryptjs');
const express = require('express')
const User = require('../models/User')
const router = express.Router();
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = "THIS IS NICE";



// SignUp using POST   '/auth/signup'
router.post('/signup', async (req, res) => {
   try {
      var user = await User.findOne({ email: req.body.email });
      if (user) {
         return res.status(400).json({ error: "User with this email alredy exists" })
      }
      console.log(req.body);
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt)




      user = await User.create(
         {
            name: req.body.name,
            DOB: req.body.DOB,
            email: req.body.email,
            address: req.body.address,
            mobile: req.body.mobile,
            gender: req.body.gender,
            password: secPass

         }
      )
      res.json({ message: "Success" })


   } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "Internal Server Error" })
   }

})



// login using POST "/auth/login"
router.post('/login', async (req, res) => {
   try {
      const { email, password } = req.body;
      let user = await User.findOne({ email })
      if (!user) {
         return res.status(400).json({ error: "Sorry wrong Credinsial" })
      }
      const passConf = bcrypt.compareSync(password, user.password);
      if (!passConf) {
         return res.status(400).json({ error: "Sorry wrong Credinsial" })

      }
      const payload = {
         user: {
            id: user.id
         }
      }
      const authToken = jwt.sign(payload, JWT_SECRET)
      res.json({ authToken })

   } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" })
   }
})

//Get loggedin user details POST "/auth/getuser"
router.post('/getuser', fetchuser, async (req, res) => {
   try {
      userID = req.user.id
      const userDetail = await User.findById(userID).select("-password")
      res.send(userDetail)
   } catch (error) {

   }
})



module.exports = router