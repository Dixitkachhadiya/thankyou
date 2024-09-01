import React,{useEffect} from "react";
import "./ThankYouMessage.css";
import AOS from "aos";
import "aos/dist/aos.css";
const ThankYouMessage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
    });
  }, []);
  return (
    <div className="thank-you-container">
      <div className="thank-you-message" data-aos="zoom-in">
        <h1>Thank You for the Birthday Wishes ❤️😀</h1>
        <p>Your thoughtfulness made my day extra special.😊</p>
        <p>By Dixit Kachhadiya 🎂</p>
      </div>
      <div className="sprinkles">
        {[...Array(200)].map((_, index) => (
          <div key={index} className="sprinkle"></div>
        ))}
      </div>
      <div className="balloons">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="balloon"></div>
        ))}
      </div>
    </div>
  );
};

export default ThankYouMessage;
