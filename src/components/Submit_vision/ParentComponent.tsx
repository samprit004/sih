'use client';
import React, { useState } from 'react';
import ProposedOutlayTable from './ProposedOutlayTable';
import DisplayBox from './Displaybox';

const ParentComponent: React.FC = () => {
  const initialTableData = {
    '9.1_total': '',
    '9.1_1st': '',
    '9.1_2nd': '',
    '9.1_3rd': '',
    '9.2_total': '',
    '9.2_1st': '',
    '9.2_2nd': '',
    '9.2_3rd': '',
    '9.3_total': '',
    '9.3_1st': '',
    '9.3_2nd': '',
    '9.3_3rd': '',
    '9.4_total': '',
    '9.4_1st': '',
    '9.4_2nd': '',
    '9.4_3rd': '',
    '9.5_total': '',
    '9.5_1st': '',
    '9.5_2nd': '',
    '9.5_3rd': '',
    '9.6_total': '',
    '9.6_1st': '',
    '9.6_2nd': '',
    '9.6_3rd': '',
    '9.7_total': '',
    '9.7_1st': '',
    '9.7_2nd': '',
    '9.7_3rd': '',
    '9.8_total': '',
    '9.8_1st': '',
    '9.8_2nd': '',
    '9.8_3rd': '',
    '9.9_total': '',
    '9.9_1st': '',
    '9.9_2nd': '',
    '9.9_3rd': '',
    '9.10_total': '',
    '9.10_1st': '',
    '9.10_2nd': '',
    '9.10_3rd': '',
    '9.11_total': '',
    '9.11_1st': '',
    '9.11_2nd': '',
    '9.11_3rd': '',
    '9.12_total': '',
    '9.12_1st': '',
    '9.12_2nd': '',
    '9.12_3rd': '',
  };

  const [tableData, setTableData] = useState(initialTableData);

  const handleInputChange = (key: string, value: string) => {
    setTableData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="p-4">
      <ProposedOutlayTable tableData={tableData} onInputChange={handleInputChange} />
      <DisplayBox tableData={tableData} />
    </div>
  );
};

export default ParentComponent;
