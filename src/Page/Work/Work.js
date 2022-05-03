import { useState } from 'react';
import './Work.css';
import classNames from 'classnames';

function Work() {

    // TODO: complete the work db
    const workData= require('./Work.json'); 

    const [activeData, setActiveData] = useState(workData[0]);

  return (
      <a id="work">
        <div className="workBody">
        <h2 className='SectionTitle'>Where I've Worked</h2>
        <div className='WorkTab'>
            <div>
                {workData.map((tabData) =>
                <p className={classNames('tab', { 'active': tabData.Company === activeData.Company })}
                onClick={() => {
                    setActiveData(tabData)
                }}>{tabData.Company}</p>
            )}</div>
            <div className='tabData'>
                <h3 className='tabTitle'>{activeData.JobTitle} @ {activeData.Company}</h3>
                <p className='date'>{activeData.Date}</p>
                <ul>
                    {activeData.Description.map((description) => 
                        <li className='workDescription'>{description}</li>
                    )} 
                </ul>
            </div>
        </div>
    </div>
      </a>

  );
}

export default Work;

