import './LandingPage.css';

function LandingPage() {
  return (
    <div className='TextParentDiv'>
      <h3 className="Text HiText">Hi! I'm Sally,</h3>
      <h1 className="Text NameText">A Front End Developer</h1>
      {/* <p className="Text ShortDescription">
          I am a Computer Science student
      </p> */}
      <button className="secondaryButton" href="http://www.sallylim.ca/">Contact me</button>
    </div>
  );
}

export default LandingPage;


// TODO: change href links