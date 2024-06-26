import { createSlice } from "@reduxjs/toolkit";

import cloud from "../images/cloud.png";
import color from "../images/color.png";

export const cardsSelector = (state) => state.cards.items;

const cards = [
  {
    id: "1",
    image: cloud,
  },
  {
    id: "2",
    image: cloud,
  },
  {
    id: "1",
    image: color,
  },
  {
    id: "2",
    image: color,
  },
  {
    id: "1",
    image: color,
  },
  {
    id: "2",
    image: color,
  },
  {
    id: "1",
    image: cloud,
  },
  {
    id: "2",
    image: cloud,
  },
  {
    id: "1",
    image: color,
  },
  {
    id: "2",
    image: color,
  },
  {
    id: "1",
    image: color,
  },
  {
    id: "2",
    image: color,
  },
];

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    items: cards,
  },
  reducers: {},
});

export default cardsSlice.reducer;
