import React, { useState, useContext, useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext"
import RatingSelect from "./RatingSelect"
import Button from "./shared/Button"
import Card from "./shared/Card"

function FeedbackForm() {
  const { addFeedback, feedbackedit, updateFeedback } =
    useContext(FeedbackContext)
  useEffect(() => {
    if (feedbackedit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackedit.item.text)
      setRating(feedbackedit.item.rating)
    }
  }, [feedbackedit])
  const [text, setText] = useState("")
  const [rating, setRating] = useState("")

  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")
  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 character")
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    console.log(e.target.value)
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      if (feedbackedit.edit === true) {
        updateFeedback(feedbackedit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }
      setText("")
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='write a review'
            value={text}
          />
          {/* <Button type='submit' version='secondary'> */}
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
