import React from "react";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="dashboard-info">
        <div className="info-card">
          <p>
            <strong>Note:</strong> This is a demonstration page and does not
            reflect real data.
          </p>
        </div>
        <div className="info-card">
          <div className="graph-container">
            <svg width="700" height="300" viewBox="0 0 700 300">
              <rect x="10" y="80" width="30" height="150" fill="#607D8B" />
              <rect x="50" y="100" width="30" height="130" fill="#607D8B" />
              <rect x="90" y="90" width="30" height="140" fill="#607D8B" />
              <rect x="130" y="70" width="30" height="160" fill="#607D8B" />
              <rect x="170" y="60" width="30" height="170" fill="#607D8B" />
              <rect x="210" y="110" width="30" height="120" fill="#607D8B" />
              <rect x="250" y="95" width="30" height="135" fill="#607D8B" />
              <rect x="290" y="85" width="30" height="145" fill="#607D8B" />
              <rect x="330" y="105" width="30" height="125" fill="#607D8B" />
              <rect x="370" y="95" width="30" height="135" fill="#607D8B" />
              <rect x="410" y="85" width="30" height="145" fill="#607D8B" />
              <rect x="450" y="75" width="30" height="155" fill="#607D8B" />
              <text x="20" y="270" fontSize="12" fill="#d1d5db">
                Jan
              </text>
              <text x="60" y="270" fontSize="12" fill="#d1d5db">
                Feb
              </text>
              <text x="100" y="270" fontSize="12" fill="#d1d5db">
                Mar
              </text>
              <text x="140" y="270" fontSize="12" fill="#d1d5db">
                Apr
              </text>
              <text x="180" y="270" fontSize="12" fill="#d1d5db">
                May
              </text>
              <text x="220" y="270" fontSize="12" fill="#d1d5db">
                Jun
              </text>
              <text x="260" y="270" fontSize="12" fill="#d1d5db">
                Jul
              </text>
              <text x="300" y="270" fontSize="12" fill="#d1d5db">
                Aug
              </text>
              <text x="340" y="270" fontSize="12" fill="#d1d5db">
                Sep
              </text>
              <text x="380" y="270" fontSize="12" fill="#d1d5db">
                Oct
              </text>
              <text x="420" y="270" fontSize="12" fill="#d1d5db">
                Nov
              </text>
              <text x="460" y="270" fontSize="12" fill="#d1d5db">
                Dec
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
