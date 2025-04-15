import React from 'react';

interface AnalysisResultPanelProps {
  temperature: number | null;
  humidity: number | null;
  uvIndex: number | null;
}

const AnalysisResultPanel = ({ temperature, humidity, uvIndex }: AnalysisResultPanelProps) => {
  return (
    <div className="analysis-result-panel">
      <h2>Analysis Results</h2>
      <div>Temperature: {temperature !== null ? `${temperature}°F` : 'N/A'}</div>
      <div>Humidity: {humidity !== null ? `${humidity}%` : 'N/A'}</div>
      <div>UV Index: {uvIndex !== null ? uvIndex : 'N/A'}</div>
    </div>
  );
};

export default AnalysisResultPanel;
