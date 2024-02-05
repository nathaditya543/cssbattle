import React from 'react';
import "./App.css"
import L2_Q1 from './CSSBattleImages/L2_Q1.mkv'
import L2_Q2 from './CSSBattleImages/L2_Q2.mkv'
import L2_Q3 from './CSSBattleImages/L2_Q3.mkv'
import L2_Q4 from './CSSBattleImages/L2_Q4.mkv'
import L2_Q5 from './CSSBattleImages/L2_Q5.mkv'
import L2_Q6 from './CSSBattleImages/L2_Q6.mkv'

import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Components/Header';
import Vid from './Components/Vid';

function App() {
  // Add state to manage screen width
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  // Update screen width on resize
  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header className="showAtSmall" />
      
      {screenWidth > 768 && (
        <>
          <Vid className="questions"
            qnum={1}
            video={L2_Q1}
            colours={["#ABDBE3", "#e28743", "#1e81b0"]}
          />
          <Vid className="questions"
            qnum={2}
            video={L2_Q2}
            colours={["#48466D", "#3D84A8","#46CDCF","#ABEDD8"]}
          />
          <Vid className="questions"
            qnum={3}
            video={L2_Q3}
            colours={["#F4F4F4", "#3498db", "#00FF00"]}
          />
          <Vid className="questions"
            qnum={4}
            video={L2_Q4}
            colours={["#FFBFCB","#FF0000" ]}
          />
          <Vid className="questions"
            qnum={5}
            video={L2_Q5}
            colours={["#FFFFFF", "#000000", "#4CAF50"]}
          />
          <Vid className="questions"
            qnum={6}
            video={L2_Q6}
            colours={["#78b5c5", "#ffa500"  ]}
          />

        </>
      )}
    </>
  );
}

export default App;