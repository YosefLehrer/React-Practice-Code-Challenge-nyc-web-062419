import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.handleEaten(props.sushiObj)}>
        {props.sushiObj.eaten ? null : <img src={props.sushiObj.img_url} width="100%" alt="" /> }
      </div>
      <h4 className="sushi-details">
        {props.sushiObj.name} - ${props.sushiObj.price}
      </h4>
    </div>
  )
}

export default Sushi