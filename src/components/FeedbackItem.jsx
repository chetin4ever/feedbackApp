import Card from "./shared/Card"
import PropTypes from "prop-types"

function FeedbackItem({ item }) {
  //   const [rating, setRating] = useState(7)
  //   const [text, setText] = useState("this is an example of a feedback item")
  //   const handleClick = () => {
  //     setRating((prev) => {
  //       return prev + 1
  //     })
  //   }
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}
FeedbackItem.prototypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
