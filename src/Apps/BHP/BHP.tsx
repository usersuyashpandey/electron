import React, { useState } from 'react'
import { Box } from '@mui/material'
import { useTheme } from '@mui/system'
import BhpOutput from './BhpOutput'
import BhpModelInput from './BhpModelInput.json'

import { ModelInputData } from './BhpJsonType';


const Bhp: React.FC = () => {
  const theme = useTheme();
  const [modelInput] = useState<ModelInputData | undefined>({ ...BhpModelInput });

  return (
    <Box
      sx={{
        m: 1,
        mt: -1.7,
        width: "100%",
        height: "calc(100vh-100px)",

      }}
    >
      <h1 style={{ color: theme.palette.text.primary }}>BHP</h1>
      <Box mb={1}>
        <BhpOutput data={modelInput} />
      </Box>
    </Box>
  );
};

export default Bhp;
