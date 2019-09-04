import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  state = { firstNum: 0 }
  
  handleClick = () => {
    if (this.state.firstNum === 96) {
      this.setState({ firstNum: 0 })
    } else {
      this.setState({firstNum: this.state.firstNum + 4})
    }
  }
  render() {
    const mappedSushi = this.props.sushiList.slice(this.state.firstNum, this.state.firstNum + 4).map(sushi => {
      return <Sushi key={sushi.id} sushiObj={sushi} handleEaten={this.props.handleEaten}/>
    })
    return (
      <Fragment>
        <div className="belt">
          {mappedSushi}
          <MoreButton handleClick={this.handleClick}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer