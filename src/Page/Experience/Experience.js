import { useState } from 'react';
import './Experience.css';
import { ReactComponent as Gear } from './gears.svg';

function Experience() {

  const experienceData= require('./Experience.json'); 

  return (
    <div className='ExperienceBody'>
        <h2 className='SectionTitle'>Some Things I've Built</h2>
        <div>
          {experienceData.filter(experienceData => experienceData.category === "big").map((experienceData) =>
              <div className='flex'>
                <div className="projectImage">
                  <img src={experienceData.image} width="400px" height="250px"/>
                </div>
                <div className='card'>
                  <div>
                    <p className='type'>{experienceData.ProjectType}</p>
                    <h4 className='name'>{experienceData.name}</h4>
                    <p className='description'>{experienceData.Description}</p>
                    <p className='language'>{experienceData.Language}</p>
                  </div>
                  <a className='link' href={experienceData.link}>Link</a>
                </div>
              </div>
            )}
        </div>
        <div>
          <h3 className='SectionTitle'>Other Projects</h3>
          <div className='flex'>
          {experienceData.filter(experienceData => experienceData.category === "small").map((experienceData) =>
              <div className='flex flexCards'>
                <div className='card cardSmall'>
                  <div>
                    <Gear width="30px"/>
                    <p className='type'>{experienceData.ProjectType}</p>
                    <h4 className='name'>{experienceData.name}</h4>
                    <p className='description'>{experienceData.Description}</p>
                    <p className='language'>{experienceData.Language}</p>
                  </div>
                  <a className='link' href={experienceData.link}>Link</a>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  );
}

export default Experience;

//big ones -> json file -> big and small and filter on it -> no need
//json -> two different objects-> big experience list -> small experience list -> array

//flexbox with mapping


