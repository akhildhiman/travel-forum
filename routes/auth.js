const express = require("express")
const passport = require("passport")
const router = express.Router()
const auth = require("../controllers/auth")

router.get("/login", auth.login)

// auth with google
router.get("/google", passport.authenticate("google", {
    scope: ["profile"]
}))

// callback route for google to redirect to
//middleware    
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
    res.json({ message: "redirected "})
})

module.exports = router
