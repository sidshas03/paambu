import React, { useState } from 'react';
import ImageAnalysisPanel from './ImageAnalysisPanel';
import AnalysisResultPanel from './AnalysisResultPanel';
import LearnMoreSection from './LearnMoreSection';

const ClimateVisionDashboard = () => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [humidity, setHumidity] = useState<number | null>(null);
  const [uvIndex, setUvIndex] = useState<number | null>(null);

  const handlePrediction = (temp: number, humid: number, uv: number) => {
    setTemperature(temp);
    setHumidity(humid);
    setUvIndex(uv);
  };

  return (
    <div className="dashboard-container">
      <h1>NYC Climate Vision Analysis</h1>
      <div className="dashboard-content">
        <ImageAnalysisPanel onPredict={handlePrediction} />
        <AnalysisResultPanel temperature={temperature} humidity={humidity} uvIndex={uvIndex} />
      </div>
      <LearnMoreSection />
    </div>
  );
};

export default ClimateVisionDashboard;
