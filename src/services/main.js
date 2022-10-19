import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Main() {
  return (
    <>
    <React.Fragment>
      <CssBaseline />
      <div > 
        <Box sx={{width:'100%', bgcolor: '#181818', height: '100vh', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', margin: 0,  }}>
          <Box sx={{
            color: 'white',
            display:'hidden'
          }}>1</Box>
          <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 1,
            },
          }}
          >
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button>Brazil</Button>
              <Button>Draw</Button>
              <Button>Italia</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined" aria-label="text button group">
              <Button>Netherlands</Button>
              <Button>Draw</Button>
              <Button>Argentina</Button>
            </ButtonGroup>
          </Box>
          <Box sx={{
            color: 'white',
            display:'hidden'
          }}>3</Box>
        </Box>
      </div>
    </React.Fragment>
    <React.Fragment>
    <CssBaseline />
    
  </React.Fragment>
  </>
  );
}
