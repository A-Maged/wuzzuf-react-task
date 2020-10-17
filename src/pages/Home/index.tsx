import React from 'react';

import { container } from './style';
import LocationForm from './components/LocationForm';

export default function Home() {
  return (
    <div css={container}>
      <LocationForm />
    </div>
  );
}
