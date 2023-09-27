import {useState} from 'react'
import OTPInput from 'otp-input-react'
import {Link} from 'react-router-dom'
import './index.css'

const OtpComp = () => {
  const [OTP, setOTP] = useState('')

  return (
    <div className="otp-container">
      <form>
        <img
          src="https://i.imgur.com/b9USkGb.jpg"
          alt="otp-avatar"
          className="otp-avatar"
        />
        <p className="otp-heading">Please verify Mobile Number</p>
        <p className="otp-para">An OTP is sent to +91 1234567890</p>
        <Link to="/">
          <p className="otp-sub-para">
            <u>change phone number</u>
          </p>
        </Link>
        <div className="otp-input-item-container">
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number"
            disabled={false}
          />
        </div>

        <p className="otp-footer-para">
          {`Didn't receive the code?`}{' '}
          <span className="otp-footer-para-2">Resend</span>
        </p>
        <Link to="/success-view">
          <button type="submit" className="otp-button">
            Verify
          </button>
        </Link>
      </form>
    </div>
  )
}

export default OtpComp
