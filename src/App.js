import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignInComp from './components/SignInComp'
import OtpComp from './components/OtpComp'
import SuccessItem from './components/SuccessItem'
import './App.css'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={SignInComp} />
      <Route path="/otp-page" component={OtpComp} />
      <Route path="/success-view" component={SuccessItem} />
    </Switch>
  </Router>
)

export default App
