import React, { useState } from 'react'
import './Dashboard.css' // Import CSS file for styling

const Dashboard = () => {
  const [showOutput, setShowOutput] = useState(false)
  const toggleOutput = () => {
    setShowOutput(!showOutput)
  }

  return (
    <div className="container">
      <div className="center-content">
        <div className="form form--signup">
          <form autoComplete="off">
            <div>
              <label htmlFor="repoUpload">Repo: </label>
              <input
                type="file"
                id="repoUpload"
                name="repoUpload"
                multiple
                style={{ display: 'none' }}
              />
              <button
                className="button repo"
                onClick={() => document.getElementById('repoUpload').click()}
              >
                Select Repo
              </button>
            </div>
            <button className="button assessment">Assessment</button>
          </form>
        </div>
      </div>
      {showOutput && (
        <div className="message-container">
          <div className="message">Sample</div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
