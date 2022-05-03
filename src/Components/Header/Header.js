import './Header.css';

function Header() {
  return (
    <div className='headerBody'>
      {/* <div></div>  */}
      <div className='header'>
            <a className='headerItem' href="#about">About</a>
            <a className='headerItem' href="#work">Work</a>
            <a className='headerItem' href="#experience">Experience</a>
            <a className='headerItem' href="#contact">Contact</a>
          <a href="http://www.sallylim.ca/" className='headerItem'>
            <p className='headerItemResume'>Resume</p>
          </a>
      </div>
    </div>
  );
}

export default Header;

// TODO: change href links
// TODO: sticky header
//TODO: make responsive - shrink into icon
//TODO: add icon at left side empty div