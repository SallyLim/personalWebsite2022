import './About.css';

function About() {
  return (
    <a id='about'>
        <div  className='flex'>
        <div className='textFlexbox'>
            <div>
                <h2 className='SectionTitle'>About Me</h2>
                <div className='introductionContainer'>
                    <p className='introduction'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. I'm currently in my final year of a Computer Science program at the University of British Columbia in Vancouver, BC.</p>
                </div>
            </div>
            {/* <div>
            <p>Languages and Tools I've worked with in no particular order:</p>
                <ul>
                    <li>Python</li>
                    <li>Docker</li>
                    <li>Django</li>
                    <li>React</li>
                    <li>HTML, CSS</li>
                </ul>
            </div> */}
        </div>
        <div className='imageFlexbox'>
            <img src="sampleProfile.jpg" width="300px"/>
        </div>
    </div>
    </a>
    );
}

export default About;

