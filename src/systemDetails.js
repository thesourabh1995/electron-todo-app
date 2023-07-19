import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SystemDetails = () => {
    const [electron, setElectron] = useState([]);

    useEffect(() => {
        const electron = window.electron;
        setElectron(electron);
        console.log("electron :: ", electron);
      }, []);

    return (
      <div className='system-details'>
        <div className='navigation-wrapper'>
          <div className='navigation-div'>
            <Link key="main" to="/" style={{ textDecoration: 'none', padding: '0.5rem', margin: '0 0.5rem', color: 'blue', borderRadius: '4px', background: 'lightgray' }}>Todo</Link>
            <Link key="gallery" to="/gallery" style={{ textDecoration: 'none', padding: '0.5rem', margin: '0 0.5rem', color: 'blue', borderRadius: '4px', background: 'lightgray' }}>Gallery</Link>
            <Link key="system" to="/system" style={{ textDecoration: 'none', padding: '0.5rem', margin: '0 0.5rem', color: 'blue', borderRadius: '4px', background: 'lightgray' }}>System Details</Link>
          </div>
        </div>
        {electron ?
        <div>
            <p>Home Directory : {electron?.homeDir}</p>
            <p>OS version : {electron?.osVersion}</p>
            <p>OS Architecture : {electron?.osArch}</p> 
        </div>
        : <div><p>OS details not found</p></div>}   
      </div>
    );
};

export default SystemDetails;
