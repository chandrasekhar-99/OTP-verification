const express = require('express')
const app = express()
const port = 3001 // Choose a port number

// Generate a random 4-digit OTP
function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000)
}

app.get('/generate-otp', (req, res) => {
  const otp = generateOTP()
  res.json({otp})
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
