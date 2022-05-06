import React from "react"
import FeedbackItem from "./FeedbackItem"
import PropTypes from "prop-types"

function FeedbackList({ feedback }) {
  console.log(feedback)
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )
}
FeedbackList.prototypes = {
  feedback: PropTypes.object.isRequired,
}

export default FeedbackList
