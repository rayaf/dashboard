import React, { useState } from 'react';

import { Container, ToggleLabel, ToggleSelector } from './style';

const Toggle: React.FC = () => {
  const [online, setOnline] = useState(false);
  return (  
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={()=> setOnline(!online)}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  )
}

export default Toggle;