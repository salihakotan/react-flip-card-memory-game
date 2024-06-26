import React from "react";
import { useSelector } from "react-redux";
import { cardsSelector } from "../redux/cardsSlice";
import cover from "../images/cover.png"

function Cards() {
  const cards = useSelector(cardsSelector);



  const handleClickImage = (id) => {

    //is first? //setfirst id
    //else compare id
    console.log("id",id)
  }

  return (
    <div className="pageContent">
      <div className="cardsGrid">
        {cards &&
          cards.map((card,i) => (
            <div onClick={()=>handleClickImage(card.id)} key={i} className="cardItem">
                <img className="coverImage" src={cover} alt="cover"/>
                <img className="cardImage" src={card.image} alt="cardImage" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Cards;
