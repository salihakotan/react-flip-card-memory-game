import { createSlice } from "@reduxjs/toolkit";

import cloud from "../images/cloud.png";
import color from "../images/color.png";

import egg from "../images/egg.png";
import flower from "../images/flower.png";
import heart from "../images/heart.png";
import icecream from "../images/icecream.png";
import mn from "../images/mn.png";
import sun from "../images/sun.png";

export const cardsSelector = (state) => state.cards.items;
export const scoreSelector = (state) => state.cards.score;
export const movesSelector = (state) => state.cards.moves;
export const leftCardsSelector = (state) => state.cards.leftCards;

const cards = [
  {
    id: 1,
    image: cloud,
    stat: "",
  },
  {
    id: 1,
    image: cloud,
    stat: "",
  },
  {
    id: 2,
    image: color,
    stat: "",
  },
  {
    id: 2,
    image: color,
    stat: "",
  },
  {
    id: 3,
    image: egg,
    stat: "",
  },
  {
    id: 3,
    image: egg,
    stat: "",
  },
  {
    id: 4,
    image: flower,
    stat: "",
  },
  {
    id: 4,
    image: flower,
    stat: "",
  },
  {
    id: 5,
    image: heart,
    stat: "",
  },
  {
    id: 5,
    image: heart,
    stat: "",
  },
  {
    id: 6,
    image: icecream,
    stat: "",
  },
  {
    id: 6,
    image: icecream,
    stat: "",
  },
  {
    id: 7,
    image: mn,
    stat: "",
  },
  {
    id: 7,
    image: mn,
    stat: "",
  },
  {
    id: 8,
    image: sun,
    stat: "",
  },
  {
    id: 8,
    image: sun,
    stat: "",
  },
].sort(() => Math.random() - 0.5);

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    items: cards,
    score: 0,
    moves:0,
    leftCards: cards.length,
  },
  reducers: {
    updateStat: (state, action) => {
      console.log("id: ", action.payload.id);
      console.log("stat: ", action.payload.stat);
      state.items[action.payload.id].stat = action.payload.stat
      if(action.payload.stat ==="correct"){
        state.leftCards -= 1
      }
    },
    updateMoves:(state,action)=>{
      state.moves +=1
    },
    updateScore: (state,action)=> {
        state.score += action.payload
    },
    resetGame:(state,action)=> {
        state.items.forEach((item)=> {
            item.stat =""
        })
        state.score = 0
        state.moves = 0
        state.leftCards = cards.length
        state.items.sort(()=> Math.random() - 0.5)
        console.log("reset game")
    }
  },
});

export const {updateMoves, updateStat,updateScore,resetGame } = cardsSlice.actions;

export default cardsSlice.reducer;
