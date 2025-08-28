import React from "react";
import xamzat from "../image/xamzat.jpg";
import venumbox1 from "../image/venumbox1.jpg";
import venumbox2 from "../image/venumbox2.jpg";
import venumbox3 from "../image/venumbox3.jpg";
import venumbox4 from "../image/venumbox4.jpg";
import venum2main from "../image/venum2main.jpg";
import "../styles/main.css";

function Main() {
  
  return (
    <div className="main1">
      <div className="video-player-wrap swipe-video-wrap" style={{ position: "relative", overflow: "hidden", width: '100vw', maxWidth: '100%', margin: 0 }}>
        <img src={xamzat} alt="hero" className="main-image" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
      </div>
      <div className="main-title">VENUM</div>
      <div className="main-gallery">
        <div className="gallery-track">
          <img src={venumbox1} alt="venumbox1" className="gallery-image" />
          <img src={venumbox2} alt="venumbox2" className="gallery-image" />
          <img src={venumbox3} alt="venumbox3" className="gallery-image" />
          <img src={venumbox4} alt="venumbox4" className="gallery-image" />
        </div>
      </div>
      <div className="venum-main-image" style={{marginTop:12}}>
        <img src={venum2main} alt="venum main" style={{width:'100%', objectFit:'cover', display:'block'}} />
      </div>
      {/* removed Squatwolf and Under Armour sections */}

    </div>
  );
}

export default Main;