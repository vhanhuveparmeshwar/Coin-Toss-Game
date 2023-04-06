// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    isHead: true,
    totalToss: 0,
    totalHead: 0,
    totalTail: 0,
  }

  onTossCoin = () => {
    const tossCoin = Math.floor(Math.random() * 2)

    if (tossCoin === 0) {
      this.setState(prevState => ({
        isHead: true,
        totalToss: prevState.totalToss + 1,
        totalHead: prevState.totalHead + 1,
      }))
    } else if (tossCoin === 1) {
      this.setState(prevState => ({
        isHead: false,
        totalToss: prevState.totalToss + 1,
        totalTail: prevState.totalTail + 1,
      }))
    }
  }

  render() {
    const {isHead, totalToss, totalHead, totalTail} = this.state

    const srcImage = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="game-heading">Coin Toss Game</h1>
          <p className="game-sub-heading">Heads (or) Tails</p>
          <img src={srcImage} className="heads-tails-image" alt="toss result" />
          <button
            type="button"
            className="toss-coin-button "
            onClick={this.onTossCoin}
          >
            Toss Coin
          </button>

          <div className="scores-container">
            <p className="score-text">Total: {totalToss} </p>
            <p className="score-text">Heads: {totalHead}</p>
            <p className="score-text">Tails: {totalTail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
