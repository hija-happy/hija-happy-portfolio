import React from 'react'
import "./MainPage.css";
const MainPage = () => {

    const [showAbout, setShowAbout] = useState(false);

  // Automatically show the About page after a delay (or trigger it with a button)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAbout(true);
    }, 1000); // Delay of 1 second
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="gradient-bg">
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    <div className="gradients-container">
      <div className="g1"></div>
      <div className="g2"></div>
      <div className="g3"></div>
      <div className="g4"></div>
      <div className="g5"></div>
      <div className="interactive"></div>
      
    </div>

    <div className="content-container">
        {/* About Page Card */}
        {showAbout && (
          <div className="about-container slide-in">
            <Card>
              <About />
            </Card>
          </div>
        )}
      </div>
   </div>
  )
}

export default MainPage