// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {eachCommentObj, toggleLIke, deleteComment} = props
  const {id, username, userComment, isLiked, intialColor} = eachCommentObj

  console.log(intialColor)

  const onClickLike = () => {
    toggleLIke(id)
  }

  const onClickDelete = () => {
    return deleteComment(id)
  }

  const onlikedObj = isLiked
    ? {
        imgUrl:
          'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png',
        className: 'blue-Color_to_like',
      }
    : {
        imgUrl:
          'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png',
        className: 'Normal-Color_to_like',
      }

  const timeDistance = formatDistanceToNow(new Date())

  return (
    <li>
      <div className="intialAndCommentCont">
        <div>
          <p className={`IntialCommon_className ${intialColor}`}>
            {username[0]}
          </p>
        </div>

        <div>
          <p className="commenter_name">
            {username} <span className="timedistancevalue">{timeDistance}</span>
          </p>
          <p className="userCommentValue">{userComment}</p>
        </div>
      </div>
      <div className="likeDelbuttonsCont">
        <button
          onClick={onClickLike}
          type="button"
          className="commonbuttonclass"
        >
          <img alt="Like" className="likebutton" src={onlikedObj.imgUrl} />
        </button>

        <button
          testid="delete"
          onClick={onClickDelete}
          className="commonbuttonclass"
          type="button"
        >
          <img
            alt="delete"
            className="deletebutton"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
