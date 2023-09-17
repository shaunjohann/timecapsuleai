import React from 'react';

const InsightList = ({ papers }) => (
  <div>
    <h2>Papers</h2>
    <ul>
      {papers.map((paper) => (
        <li key={paper.id}>{paper.title}</li>
      ))}
    </ul>
  </div>
);
export default InsightList;
