import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';


  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 45,
    height: 30,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 25,
      height: 25,
    },
    '& .MuiSwitch-track': {
      borderRadius: 30 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#5e5e69' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

export default function MusicToggle() {
 const [isPlaying, setIsPlaying] = useState(false);
  const url = "https://www.youtube.com/watch?v=xQ0RgaDTydY&list=PLxvJ3-kdDEEiOxO55t1LrDvkNtWzO-Ohx&index=5"

 const toggleAudio = () => {
  setIsPlaying(!isPlaying);
 };
    return (
      <>
        <IOSSwitch onClick={toggleAudio} checked={isPlaying} />
        {isPlaying && (
          <audio loop>
            <source
              src={url}
              type="audio/mp3"
            />
          </audio>
        )}
      </>
    );
  }
