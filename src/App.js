import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import { movesSelector, scoreSelector } from "./redux/cardsSlice";
import { useSelector } from "react-redux";
import { Heading, Text } from "@chakra-ui/react";



function App() {
  
  const score = useSelector(scoreSelector)
  const moves = useSelector(movesSelector)

  return (
    <div className="App">
        <Header/>
        <div className="scoreArea">
        <Text fontSize="20px">Score: <b>{score}</b></Text>
        <Text fontSize="20px">Moves: <b>{moves}</b></Text>
        </div>
        <Cards/>
        <Footer/>
    </div>
  );
}

export default App;
