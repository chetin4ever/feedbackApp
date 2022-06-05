import { createContext, useEffect, useState } from "react"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  useEffect(() => {
    fetchFeedback()
  }, [])

  const [isLoading, setIsLoding] = useState(true)
  const [feedback, setFeedback] = useState([])

  const [feedbackedit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })
  // adding feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()
    setFeedback([data, ...feedback])

    // console.log(newFeedback)
  }
  // delete feedback
  const deleteFeedback = async (id) => {
    await fetch(`/feedback/${id}`, { method: "DELETE" })

    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  // update feedback
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    })
    const data = await response.json()
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    )
    console.log(feedback)
  }
  // set item tobe updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }
  // fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()
    setFeedback(data)
    setIsLoding(false)
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackedit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
