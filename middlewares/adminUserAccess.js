const { User } = require("../models");

module.exports = async function (req, res, next) { 
    const user = await User.findByPk(req.auth.id)
    if (user.isAdmin) {
        next()
    } else {
        res.status(401).json({message: "Unauthorized"})
    }
 }
