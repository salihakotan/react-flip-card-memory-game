import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardsSelector, leftCardsSelector, resetGame, updateMoves, updateScore, updateStat } from "../redux/cardsSlice";
import Card from "./Card";

function Cards() {
  const cards = useSelector(cardsSelector);
  const leftCards = useSelector(leftCardsSelector);

  const [prev,setPrev] = useState(-1)

  const dispatch = useDispatch()



    const check = (current) => {
        console.log("will check")
            if(cards[current].id === cards[prev].id){
                dispatch(updateScore(50))
                dispatch(updateStat({id:current, stat:"correct"}))
                dispatch(updateStat({id:prev, stat:"correct"}))
                setPrev(-1)
            }else {
               
                dispatch(updateScore(-10))
                dispatch(updateStat({id:current, stat:"wrong"}))
                dispatch(updateStat({id:prev, stat:"wrong"}))
                setPrev(-1)
                setTimeout(() => {
                        dispatch(updateStat({id:current, stat:""}))
                        dispatch(updateStat({id:prev, stat:""}))
                }, 1000);
            }
    }



  const handleClickCard = (id) => {
    dispatch(updateMoves())

    if(prev === -1){
        dispatch(updateStat({id,stat:"active"}))
        setPrev(id)
    }else{
        check(id)
    }
    
  }

  return (
    <div className="pageContent">


      <div className="cardsGrid">
        {cards &&
          cards.map((card,i) => (
                <Card key={i} id={i} item={card} handleClickCard={handleClickCard} />
          ))}
      </div>

          {leftCards <= 0 && (
            <div className="playAgainDiv"> <button className="playAgainBtn" onClick={() => dispatch(resetGame())}>Play Again</button></div>
          )}


    </div>
  );
}

export default Cards;
