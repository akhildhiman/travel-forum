const express = require("express")
const passport = require("passport")
const router = express.Router()
const auth = require("../controllers/auth")

router.get("/login", auth.login)
router.get("/google", passport.authenticate("google", {
    scope: ["profile"]
}))

module.exports = router
