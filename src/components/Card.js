import React from 'react'

function Card({id,item,handleClickCard}) {
    const itemClass = item.stat ? " active " + item.stat : ""


  return (
    <div onClick={()=> !item.stat ?  handleClickCard(id) : ""} className={"cardItem"+itemClass}>
                <img className="cardImage" src={item.image} alt="cardImage" />
            </div>
  )
}

export default Card