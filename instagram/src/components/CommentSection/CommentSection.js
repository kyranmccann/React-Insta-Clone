import React from 'react';
import Comment from './Comment'
import CommentEntry from './CommentEntry'
import Timestamp from './Timestamp'
import {WrapperDiv} from '../Styles'

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      newComment: '',
      username: this.props.username,
    }
  }





  addNewComment = event => {
    event.preventDefault();
    if (this.state.newComment.length > 0) {
      this.setState({
        comments: [...this.state.comments, {
          username: this.state.username,
          text:this.state.newComment,
          }],
        newComment: '',
      })
    }

  }


  handleCommentChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
      return (
        <WrapperDiv commentSection>
              {this.state.comments.map((comment, i) =>
                <Comment key={i} comment={comment} />
              )}
              <Timestamp timestamp={this.props.timestamp} />
              <CommentEntry addNewComment={this.addNewComment} handleCommentChange={this.handleCommentChange} newComment={this.state.newComment} />
        </WrapperDiv>

    )
  }
}


export default CommentSection;
