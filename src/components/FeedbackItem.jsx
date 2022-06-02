import { FaTimes, FaEdit } from "react-icons/fa"
import Card from "./shared/Card"
import PropTypes from "prop-types"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  //   const [rating, setRating] = useState(7)
  //   const [text, setText] = useState("this is an example of a feedback item")
  //   const handleClick = () => {
  //     setRating((prev) => {
  //       return prev + 1
  //     })
  //   }
  // const handleClick = (id) => {
  //   console.log(id)
  // }
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => deleteFeedback(item.id)}>
        <FaTimes color='purple' />
      </button>
      <button className='edit' onClick={() => editFeedback(item)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}
FeedbackItem.prototypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
