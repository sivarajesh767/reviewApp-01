// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewIndex: 0}
  onClickRightArrow = () => {
    const {reviewIndex} = this.state
    const {reviewsList} = this.props
    if (reviewIndex < reviewsList.length - 1) {
      this.setState(preState => ({reviewIndex: preState.reviewIndex + 1}))
    }
  }

  renderRightArrow = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="displayImgs-co">
        <img src={imgUrl} alt={username} className="display-imgs" />
        <p className="username">{username}</p>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
  onClickLeftArrow=()=>{
    const {reviewIndex}=this.state
    if (reviewIndex > 0){
      this.setState(preState=>({reviewIndex:preState.reviewIndex-1}))
    } 
  }

  render() {
    const {reviewIndex} = this.state
    const {reviewsList} = this.props
    const currentResult = reviewsList[reviewIndex]
    return (
      <div className="bg-co">
        <div className="inner-co">
          <h1 className="review-head">Reviews</h1>
          <div className="btn-co">
            <button
              className="button1"
              type="button"
              textid="leftArrow"
              onClick={this.onClickRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="leftArrow-img"
              />
            </button>
            
            {this.renderRightArrow(currentResult)}
            </div>
            <button className="button2" type="button" onClick={this.onClickLeftArrow}>
            <img src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png" alt="right arrow" className="leftArrow-img"/>
            </button>
                 </div>
      </div>
    )
  }
}
export default ReviewsCarousel
