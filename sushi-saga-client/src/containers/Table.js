import React, { Fragment } from 'react'

class Table extends React.Component {

  renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  render() {
    return (
      <Fragment>
        <h1 className="remaining">
          You have: ${this.props.wallet} remaining!
        </h1>
        <div className="table">
          <div className="stack">
            {this.renderPlates(this.props.numberOfSushisEaten)}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Table