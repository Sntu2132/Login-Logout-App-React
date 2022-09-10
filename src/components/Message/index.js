// Write your code here
import './index.css'

const Message = props => {
  const {isLogin} = props
  const displayMessageText = isLogin ? 'Welcome User' : 'Please Login'

  return <h1 className="display-message">{displayMessageText}</h1>
}

export default Message
