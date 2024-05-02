import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
const intialCommentsList = [
  {
    id: uuidv4(),
    username: 'Ganesh',
    userComment:
      'Most insightfull, lot to learn new things and build confidence on my skills',
    isLiked: false,
    intialColor: 'amber',
  },
  {
    id: uuidv4(),
    username: 'Virat',
    userComment:
      'Highly demanding and industry ready skills embedded with real world projects learnt here',
    isLiked: false,
    intialColor: 'teal',
  },
]

class Comments extends Component {
  state = {username: '', userComment: '', commentsList: intialCommentsList}

  onchangeName = event => {
    this.setState({username: event.target.value})
  }

  onchangeComment = event => {
    this.setState({userComment: event.target.value})
  }

  onCommentAdded = event => {
    event.preventDefault()
    let {username, userComment} = this.state

    let randomindex = Math.ceil(
      Math.random() * (initialContainerBackgroundClassNames.length - 1),
    )
    console.log(randomindex)
    let classNameforcolor = initialContainerBackgroundClassNames[randomindex]

    const commentNew = {
      id: uuidv4(),
      username: username,
      userComment: userComment,
      isLiked: false,
      intialColor: classNameforcolor,
    }

    this.setState(prevstate => ({
      username: '',
      userComment: '',
      commentsList: [...prevstate.commentsList, commentNew],
    }))
  }

  toggleLIke = togglecommentid => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === togglecommentid) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        } else {
          return eachComment
        }
      }),
    }))
  }

  deleteComment = deleteCommentId => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(eachobj => {
        if (eachobj.id !== deleteCommentId) {
          return true
        } else {
          return false
        }
      }),
    }))
  }

  render() {
    const {username, userComment, commentsList} = this.state

    return (
      <div className="bg-conatiner">
        <h1 className="main-heading">Comments</h1>
        <div className="commentsection">
          <div className="Comment-area">
            <p>Say something about 4.0 Technologies</p>
            <form onSubmit={this.onCommentAdded}>
              <input
                value={username}
                type="text"
                onChange={this.onchangeName}
                placeholder="Your Name"
                className="usernameinput"
              />
              <br />
              <textarea
                value={userComment}
                cols="40"
                rows="5"
                onChange={this.onchangeComment}
                placeholder="Your Comment"
                className="user_comment_input"
              />
              <br />
              <button type="submit" className="add_comment_button">
                Add Comment
              </button>
            </form>
          </div>

          <img
            className="commentsadvImg"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="hori-line" />
        <div>
          <span className="comments-count">{commentsList.length}</span>
          <span className="comm_count_show">Comments</span>
        </div>

        <ul className="comments_list">
          {commentsList.map(eachCommentObj => (
            <CommentItem
              key={eachCommentObj.id}
              eachCommentObj={eachCommentObj}
              toggleLIke={this.toggleLIke}
              deleteComment={this.deleteComment}
              initialContainerBackgroundClassNames={
                initialContainerBackgroundClassNames
              }
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
