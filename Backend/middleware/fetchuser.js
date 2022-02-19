const jwt = require("jsonwebtoken");
const JWT_SECRET = "THIS IS NICE";



const fetchuser = (req, res, next) => {
    //get the user from jwt token 
    try {
        const token = req.header('auth-token')
        if (!token) {
            res.status(401).send({ error: "Please authenticate yourself" })
        }
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user;
        next();

    } catch (error) {
        res.status(401).send({ error: "Please authenticate yourself" })
    }
}

module.exports=fetchuser

