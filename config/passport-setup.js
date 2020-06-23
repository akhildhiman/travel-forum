const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: "/auth/google/redirect",
    },
    () => {}
  )
)
