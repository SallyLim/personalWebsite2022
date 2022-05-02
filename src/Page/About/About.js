import './About.css';

function About() {
  return (
    <div className='flex'>
        <div>
            <div>
                <h2 className='SectionTitle'>About Me</h2>
                <p>I'm a Software Engineer, currently in my final year of a Computer Science program at the University of British Columbia in Vancouver, BC.</p>
            </div>
            <div>
            <p>Languages and Tools I've worked with in no particular order:</p>
                <ul>
                    <li>Python</li>
                    <li>Docker</li>
                    <li>Django</li>
                    <li>React</li>
                    <li>HTML, CSS</li>
                </ul>
            </div>
        </div>
        <div>
            <img src="sampleProfile.jpg" width="300px"/>
        </div>
    </div>
  );
}

export default About;

