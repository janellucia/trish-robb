import React from 'react';

import showData from './shows.json'

function Shows() {
  return (
    <section id="shows">
      <h2>Upcoming Shows</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Venue</th>
            <th>City</th>
            <th>Tickets</th>
            <th>RSVP</th>
          </tr>
        </thead>
        <tbody>
          {showData.map((showDetail, index) => {
            return <tr key={index}>
              <td className="date">{showDetail.date}</td>
              <td className="venue"><a href={showDetail.tickets} aria-label={showDetail.venue + 'tickets'} target="_blank" rel="noopener noreferrer">{showDetail.venue}</a></td>
              <td className="city">{showDetail.city}</td>
              <td className="tickets"><a href={showDetail.tickets} aria-label={showDetail.venue + 'tickets'} target="_blank" rel="noopener noreferrer">Tickets</a></td>
              <td className="rsvp"><a href={showDetail.rsvp} aria-label={showDetail.venue + 'RSVP on Facebook'} target="_blank" rel="noopener noreferrer">RSVP</a></td>
            </tr>
          })}
        </tbody>
      </table>
    </section>
  );
}

export default Shows;
