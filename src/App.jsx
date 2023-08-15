import React from 'react';
import './App.css'; // Import your CSS file

const Header = ({ title }) => (
  <header>
    <h1>{title}</h1>
  </header>
);

const ConferenceDetails = ({ date, location, university }) => (
  <div className="conference-details">
    <p>Date: {date}</p>
    <p>Location: {location}</p>
    <p>Hosted by: {university}</p>
  </div>
);

// Create similar components for other sections...

function App() {
  return (
    <div className="App">
      <Header title="IRMCAS2023" />
      <ConferenceDetails
        date="14 October 2023"
        location="Chennai, Tamil Nadu, India"
        university="SRM Institute of Science And Technology"
      />
      {/* Render other components here */}
    </div>
  );
}

export default App;
