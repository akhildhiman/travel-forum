const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const User = require("../models/User")

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: "/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      // passport callback function
      console.log("passport callback function fired")
      console.log(profile)
      // creating a new user
      new User({
        username: profile.displayName,
        googleID: profile.id
      }).save().then((newUser) => {
        console.log(`New user created- ${newUser}`)
      })
    }
  )
)
