import React from 'react';
import "./App.css"
import L3_Q1 from './CSSBattleImages/L3_Q1.mp4'
import L3_Q2 from './CSSBattleImages/L3_Q2.png'
import L3_Q3 from './CSSBattleImages/L3_Q3.png'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Components/Header';
import Vid from './Components/Vid';
import Img from './Components/Img';

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
          <Vid className="questions special"
            qnum={1}
            video={L3_Q1}
            colours={["#8EE4D6", "#1F3735", "#3D6F6A"]}
          />
          <Img className="questions"
            qnum={2}
            img={L3_Q2}
            colours={["#CCCCCC", "#FF0000"]}
          />
          <Img className="questions"
            qnum={3}
            img={L3_Q3}
            colours={[
                "#000000",
                "#f1f1f1",
                "#8f9297",
                "#4e4e4e",
                "#1f1f1f",
                "#151515",
                "#383838",
                "#494949",
                "#161616",
                "#424242",
                "#060606",
                "#3e3c3f",
                "#1e1e1e",
                "#82a1bd",
                "#4d6684",
                "#425a74",
                "#657d99",
                "#1e2f3f",
                "#374858",
                "#43536d",
                "#253141",
                "#4f6479",
                "#3a4153",
                "#7db9e8",
                "#f0f0f0",
                "#aab3ba",
                "#131416",
                "#3a4b5d",
                "#37485a",
                "#2b3b4b",
                "#303f54",
                "#92a4b8",
                "#849fb0",
                "#b9c3cf",
                "#c1d0e3"

            ]}
          />

        </>
      )}
    </>
  );
}

export default App;