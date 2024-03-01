import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./Dashboard2.css"; // Import CSS file for styling

const Dashboard2 = () => {
    const [projectName, setprojectName] = useState('');
    const [projectVersion, setProjectVersion] = useState('');
    const [projectLocation, setProjectLocation] = useState('');
    const [sourceJDKVersion, setSourceJDKVersion] = useState('');
    const [targetJDKVersion, setTargetJDKVersion] = useState('');
    const [targetSpringVersion, settargetSpringVersion] = useState('');
    useEffect(() => {
        // Fetch data from the API
        axios.get('https://mocki.io/v1/83b80baa-e57c-471f-91fd-bbd5d6270732')
          .then(response => {
            // Extract relevant data from the response
            const { projectName,  targetSpringVersion, projectVersion, projectLocation, sourceJDKVersion, targetJDKVersion } = response.data;
            // Update state with the fetched data
            setprojectName(projectName.toString());
            setProjectVersion(projectVersion.toString());
            setProjectLocation(projectLocation.toString());
            setSourceJDKVersion(sourceJDKVersion.toString());
            setTargetJDKVersion(targetJDKVersion.toString());
            settargetSpringVersion(targetSpringVersion.toString());
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
  return (
    <div className="container">
      <div className="center-content">
        <div className="form form--signup">
          <form autoComplete="off">
            <div>
              <div className="form--item">
                <label htmlFor="projectName">ProjectName: </label>
                <span>{projectName}</span>
              </div>
              <div className="form--item">
                <label htmlFor="projectVersion">Project Version: </label>
                <span>{projectVersion}</span>
              </div>
              <div className="form--item">
                <label htmlFor="projectLocation">Project Location: </label>
                <span>{projectLocation}</span>
              </div>
              <div className="form--item">
                <label htmlFor="sourceJDKVersion">Source JDK Version: </label>
                <span>{sourceJDKVersion}</span>
              </div>
              <div className="form--item">
                <label htmlFor="targetJDKVersion">Target JDK Version: </label>
                <select id="targetJDKVersion" name="targetJDKVersion" value={targetJDKVersion} onChange={(e) => setTargetJDKVersion(e.target.value)}>
                <option value="jdk1.8"> 1.8</option>
                <option value="jdk11"> 11</option>
                <option value="jdk17"> 17</option>
                <option value="jdk17"> 21</option>
                </select>
              </div>
              <div className="form--item">
                <label htmlFor="targetSpringVersion">Target SpringVersion: </label>
                <span>{targetSpringVersion}</span>
              </div>
            </div>
            <button className="button pre-process">Pre-Process</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
