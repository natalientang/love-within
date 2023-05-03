import "./MainPage.css";
import mainPageBanner from "../components/images/mainpage-banner.png";
import selfLove from "../components/images/self-love-pic.png";
import heartPlane from "../components/images/heart-plane.png";
import heartPic from "../components/images/heart.png";
import writePic from "../components/images/write.png";

export default function MainPage() {
  return (
    <div className="App-header">
      <img src={mainPageBanner} alt="banner" className="banner" />
      <div className="welcome-container">
        <div>
          <div className="call-to-action-container">
            <h1 className="welcome">welcome to</h1>
            <h1 className="lovewithin">love within</h1>
          </div>
          <div className="welcome-paragraph">
            <p>
              love within is your daily companion for cultivating self-love and
              affirmations. through daily affirmations and inspiring messages,
              love within empowers you to discover the love and beauty within
              yourself. with a built-in journaling feature, you can capture your
              thoughts and emotions in a safe and supportive space. let love
              within guide you on a journey towards a happier, more fulfilled
              you.
            </p>
          </div>
        </div>
        <img src={selfLove} alt="self love pic" className="self-love-pic" />
      </div>
      <div className="heart-plane-container">
        <img src={heartPlane} alt="heart plane" className="heart-plane-pic"/>
      </div>
      <div className="second-container">
        <div className="column1">
          <h1>receive a</h1>
          <div class="button-container">
            <a href="/dailyaffirmations">
              <button className="second-container-button">daily affirmation</button>
            </a>
          </div>
          <img src={heartPic} alt="heart pic" className="icons" />
        </div>
        <div className="column2">
          <h1>begin</h1>
          <div class="button-container">
            <a href="/journal">
              <button className="second-container-button">journaling</button>
            </a>
          </div>
          <img src={writePic} alt="write pic" className="icons" />
        </div>
      </div>
    </div>
  );
}
