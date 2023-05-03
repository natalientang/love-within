import "./About.css";
import aboutPic from "../components/images/about.png";

export default function AboutPage() {
  return (
    <>
      <div className="App-header">
        <div className="about-container">
          <img src={aboutPic} alt="about pic" className="about-pic" />
          <div className="text-container">
            <div>hello! I'm Natalie, nice to meet you!</div>
            <p>
              for a while, I've struggled to find true happiness within myself
              and often turned to journaling to help process my thoughts and
              emotions. however, I found that writing affirmations towards
              myself was a challenge, and didn't know what to write on the spot.
              that's when the idea for love within was created! love within
              provides these daily affirmations and journal prompts to help
              guide you on your self-love journey.{" "}
            </p>
            <div>
              my biggest inspiration was from “The Five Minute Journal,” where I
              first journaled in and started my path to personal growth.{" "}
            </div>
            <div>remember, this is a safe space.</div>
            <div className="inline-container">
              <div>please be kind to yourself and always <span className="about-lovewithin">love within</span></div>
            </div>
            <div>have a question? <a href="/contact" className="ask-link">ask me!</a></div>
          </div>
        </div>
      </div>
    </>
  );
}
