import {useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {Link} from 'react-router-dom'
import './index.css'

const SignInComp = () => {
  const [otp, setOTP] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const generateOTP = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:3001/generate-otp')
      const data = await response.json()
      setOTP(data.otp)
    } catch (error) {
      console.error('Error generating OTP:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="signIn-container">
      <form>
        <img
          className="signIn-avatar"
          src="https://i.imgur.com/WqrMJMy.jpg"
          alt="signIn-logo"
        />
        <h1 className="welcome-heading">Welcome Back</h1>
        <p className="welcome-para">Please sign in to your account</p>
        <div className="input-item-container">
          <PhoneInput
            className="phoneInput"
            type="tel"
            id="mobile-number"
            country="in"
          />
          <label className="label-item" htmlFor="mobile-number">
            Enter Contact Number
          </label>
        </div>
        <p className="signIn-para">
          We will send you a one time SMS message.
          <br />
          Charges may apply.
        </p>
        <Link to="/otp-page">
          <button
            type="submit"
            className="signIn-button"
            onClick={generateOTP}
            disabled={isLoading}
          >
            Sign In with OTP
          </button>
        </Link>
        {otp && <p>Generated OTP: {otp}</p>}
      </form>
    </div>
  )
}

export default SignInComp
