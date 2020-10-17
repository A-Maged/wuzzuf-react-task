import React from 'react';
import { Spin } from 'antd';

export default function OptionsFallback() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '10px',
      }}
    >
      <Spin />
    </div>
  );
}
