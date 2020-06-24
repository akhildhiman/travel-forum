const passport = require("passport")

module.exports = {
  login: (req, res) => {
    console.log("HHHH", process.env.name)
    return res.status(200).json({ message: "HELLO" })
  },
  google: () => {
    return res.status(200).json({ message: "LOGGING IN WITH GOOGLE" })
  },
}
