import { useState } from "react"
import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return (
    <div className='App'>
      {/* <Header text='feedback ui'></Header> */}
      <Header text='Feedback UI'></Header>
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </div>
  )
}

export default App
