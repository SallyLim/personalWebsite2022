import './LandingPage.css';

function LandingPage() {
  return (
    <div className='TextParentDiv'>
      <h3 className="Text HiText">Hi! I'm Sally,</h3>
      <h1 className="Text NameText">A Front End Developer</h1>
      {/* <p className="Text ShortDescription">
          I am a Computer Science student
      </p> */}
      <a href="mailto:lim.sally20@gmail.com"><button className="secondaryButton">Contact me</button></a>
    </div>
  );
}

export default LandingPage;


// TODO: change href links