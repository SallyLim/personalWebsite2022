import './Contact.css';
import { ReactComponent as GitHub } from './github.svg';
import { ReactComponent as Email } from './newsletter.svg';
import { ReactComponent as LinkedIn } from './linkedin.svg';
import { ReactComponent as Calendar } from './calendar-line.svg';


function Contact() {
  return (
      <a id="contact">
        <div div className="contactBody">
        <h2 className='SectionTitle'>Let's chat!</h2>
        <p>I'm currently looking for internship experiences. Whether you have a question or just want to say hi, my contact information is below!</p>
        <div className='contactContent'>
            <div className="contactCard">
                <a className='contactLink' href="mailto:lim.sally20@gmail.com">
                    <div className="circle"><Email className='icon'/></div>
                    <h5 className='contactLinkTitle'>EMAIL</h5>
                    <p className='contactDescription'>lim.sally20@gmail.com</p>
                </a>
            </div>
            <div className="contactCard">
                <a className='contactLink' href="https://www.linkedin.com/in/sallyslim/">
                    <div className="circle"><LinkedIn className='icon'/></div>
                    <h5 className='contactLinkTitle'>LINKEDIN</h5>
                    <p className='contactDescription'>Connect with me</p>
                </a>
            </div>
            <div className="contactCard">
                <a className='contactLink' href="https://github.com/SallyLim/">
                    <div className="circle"><GitHub className='icon'/></div>
                    <h5 className='contactLinkTitle'>GITHUB</h5>
                    <p className='contactDescription'>Checkout my work</p>
                </a>
            </div>
            {/* <div className="contactCard">
                <a className='contactLink' href="https://github.com/SallyLim/">
                    <div className="circle"><Calendar className='icon'/></div>
                    <h5 className='contactLinkTitle'>CALENDLY</h5>
                    <p className='contactDescription'>Book a chat</p>
                </a>
            </div> */}
        </div>
    </div>
      </a>
  );
}

export default Contact;


//TODO: make calendly link and replace href