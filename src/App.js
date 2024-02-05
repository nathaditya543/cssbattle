import "./App.css"
import L1_Q1 from './CSSBattleImages/L1_Q1.png'
import L1_Q2 from './CSSBattleImages/L1_Q2.png'
import L1_Q3 from './CSSBattleImages/L1_Q3.png'
import L1_Q4 from './CSSBattleImages/L1_Q4.png'
import L1_Q5 from './CSSBattleImages/L1_Q5.png'
import L1_Q6 from './CSSBattleImages/L1_Q6.png'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Components/Header';
import Img from './Components/Img';

function App() {  
  return (
    <>
      <Header></Header>
      <Img
        qnum={1}
        img = {L1_Q1}
        colours = {["#189062", "#610E0E", "#DADA1F" ]}
      />
      
      <Img
        qnum={2}
        img = {L1_Q2}
        colours = {["#3ca48c", "#97510b", "#8a3108", "#fdbc5f" ]}
      />
      
      <Img
        qnum={3}
        img = {L1_Q3}
        colours = {["#87ceeb", "#a42a2a", "#ffffff"]}
      />
      
      <Img
        qnum={4}
        img = {L1_Q4}
        colours = {["#abdbe3", "#000000" ]}
      />
      
      <Img
        qnum={5}
        img = {L1_Q5}
        colours = {["#a9a9a9", "#000000", "#ffffff"]}
      />
      
      <Img
        qnum={6}
        img = {L1_Q6}
        colours = {["#e3e8fd", "#009879", "#a683e3", "#000000" ]}
      />
    </>
  );
}

export default App;