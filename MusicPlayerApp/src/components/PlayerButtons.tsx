import React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import IconButton from '@mui/material/IconButton';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

type PlayerButtonProps = {
    playMusic: VoidFunction;
    clicked: boolean
};

const PlayerButtons = ({ playMusic, clicked }:PlayerButtonProps) => (
  <div className="PlayerButtons">
    <IconButton>
      <SkipPreviousIcon sx={{ color: '#268f95', fontSize: 40 }} />
    </IconButton>
    <IconButton onClick={playMusic}>
      {!clicked ? <PlayCircleIcon sx={{ color: '#268f95', fontSize: 40 }} /> : <PauseCircleOutlineIcon sx={{ color: '#268f95', fontSize: 40 }} />}
    </IconButton>
    <IconButton>
      <SkipNextIcon sx={{ color: '#268f95', fontSize: 40 }} />
    </IconButton>
  </div>
    );

export default PlayerButtons;
