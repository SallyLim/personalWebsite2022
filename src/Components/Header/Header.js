import './Header.css';

function Header() {
  return (
    <div className='headerBody'>
      <div></div>
      <div className='header'>
            <a className='headerItem' href="http://www.sallylim.ca/">About</a>
            <a className='headerItem' href="http://www.sallylim.ca/">Work</a>
            <a className='headerItem' href="http://www.sallylim.ca/">Experience</a>
            <a className='headerItem' href="http://www.sallylim.ca/">Contact</a>
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