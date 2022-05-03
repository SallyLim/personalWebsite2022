import { useState } from 'react';
import './Experience.css';
import { ReactComponent as Gear } from './gears.svg';
import { ReactComponent as Link } from './link.svg';

function Experience() {

  const experienceData= require('./Experience.json'); 

  return (
    <a id='experience'>
      <div className='experienceBody'>
          <h2 className='sectionTitle'>Some Things I've Built</h2>
        <div className='bigProjectCardsContainer'>
          {experienceData.filter(experienceData => experienceData.category === "big").map((experienceData) =>
              <div className='flex'>
                <div className="projectImage">
                  <img src={experienceData.image} width="400px" height="250px"/>
                </div>
                <div className='card'>
                  <div>
                  <div className='iconFlexContainer'>
                    <p className='type'>{experienceData.ProjectType}</p>
                    <div className='iconGroup'>
                      {experienceData.gitHubLink && <a className='link' href={experienceData.gitHubLink}><img className="iconLink" src="github.png" /></a>}
                      {experienceData.devpostLink && <a className='link' href={experienceData.devpostLink}><img className="iconLink" src="devpost.png" /></a>}
                      {experienceData.videoLink && <a className='link' href={experienceData.videoLink}><img className="iconLink" src="video.png" /></a>}
                      {experienceData.figmaLink && <a className='link' href={experienceData.figmaLink}><img className="iconLink" src="figma.png" /></a>}
                      {experienceData.websiteLink && <a className='link' href={experienceData.websiteLink}><Link className="iconLink" /></a>}
                    </div>
                  </div>
                    <h4 className='name'>{experienceData.name}</h4>
                    <p className='description'>{experienceData.Description}</p>
                    <p className='language'>{experienceData.Language}</p>
                  </div>
                </div>
              </div>
            )}
        </div>
        <div>
          <h3 className='SectionTitle'>Other Projects</h3>
          <div className='flex flexSmallExperience'>
          {experienceData.filter(experienceData => experienceData.category === "small").map((experienceData) =>
              <div className='flex flexCards'>
                <div className='card cardSmall'>
                  <div>
                    <div className='iconFlexContainer'>
                    <Gear width="30px"/>
                    <div className='iconGroup'>
                      {experienceData.gitHubLink && <a className='link' href={experienceData.gitHubLink}><img className="iconLink" src="github.png" /></a>}
                      {experienceData.devpostLink && <a className='link' href={experienceData.devpostLink}><img className="iconLink" src="devpost.png" /></a>}
                      {experienceData.videoLink && <a className='link' href={experienceData.videoLink}><img className="iconLink" src="video.png" /></a>}
                      {experienceData.figmaLink && <a className='link' href={experienceData.figmaLink}><img className="iconLink" src="figma.png" /></a>}
                      {experienceData.websiteLink && <a className='link' href={experienceData.websiteLink}><Link className="iconLink" /></a>}
                    </div>
                  </div>
                    <p className='type'>{experienceData.ProjectType}</p>
                    <h4 className='name'>{experienceData.name}</h4>
                    <p className='description'>{experienceData.Description}</p>
                    <p className='language'>{experienceData.Language}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
    </a>
  );
}

export default Experience;

//big ones -> json file -> big and small and filter on it -> no need
//json -> two different objects-> big experience list -> small experience list -> array

//flexbox with mapping


