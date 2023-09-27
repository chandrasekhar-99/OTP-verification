import './index.css'

const SuccessItem = () => (
  <form className="end-container">
    <form>
      <img
        src="https://i.imgur.com/WmYWCrB.jpg "
        alt="success-avatar"
        className="end-avatar"
      />
      <p className="end-heading">Welcome to AdmitKard</p>
      <p className="end-para">
        In order to provide you with a custom experience, <br />
        <span className="end-para-2">we need to ask you a few questions.</span>
      </p>
      <button type="submit" className="end-button">
        Get Started
      </button>

      <p className="end-sub-para">*This will only take 5 min.</p>
    </form>
  </form>
)
export default SuccessItem
