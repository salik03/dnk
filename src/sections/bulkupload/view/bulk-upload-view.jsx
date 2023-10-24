import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Button, Container, Typography  } from '@mui/material';


export default function ProductsView() {
  const [csvContent, setCsvContent] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      setCsvContent(content);
    };

    reader.readAsText(file);
  };


  const renderCsvAsTable = () => {
    if (!csvContent) return null;

    const lines = csvContent.split('\n');

    return (
      <table>
        <tbody>
          {lines.map((line, index) => {
            const data = line.split(',');
            return (
              <tr key={index}>
                {data.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Bulk Upload
      </Typography>
      <div>
        <input type="file" accept=".csv" onChange={handleFileUpload} />
        <div>{renderCsvAsTable()}</div>
        <NavLink to="/">
          <Button>Save</Button>
        </NavLink>
        <a
          href="https://docs.google.com/spreadsheets/d/1J4bGxcogRDO49TfGW7bAR8bn6M70tW78/edit?usp=sharing&ouid=100733601089450328957&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="download-button"
        >
          Download Excel Template
        </a>
      </div>
    </Container>
  );
}
