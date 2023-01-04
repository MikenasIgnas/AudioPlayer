/* eslint-disable radix */
import { VolumeDown, VolumeUp } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import React from 'react';

type MusicLineProps = {
  duration:number
  percentage:number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  currentTime:number
};
const MusicLine = ({
 percentage, duration, onChange, currentTime,
}:MusicLineProps) => {
  const [position, setPosition] = React.useState(0);
  const [volume, setVolume] = React.useState(0.5);
  const [mute, setMute] = React.useState(false);
  React.useEffect(() => {
    setPosition(percentage);
  }, [currentTime]);

  const secondsToHms = (seconds:number) => {
    if (!seconds) return '0:00';

    let songLength = seconds;
    const hours = String(songLength / 3600);
    songLength %= 3600;

    let min = parseInt(String(songLength / 60));
    songLength %= 60;

    let sec = parseInt(String(songLength));

    if (sec < 10) {
      sec = Number(`0${sec}`);
    }
    if (min < 10) {
      min = Number(`0${min}`);
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}:${min}:${sec}`;
    } if (min === 0) {
      return `0:${sec}`;
    }
      return `${min}:${sec}`;
  };
  const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!mute) {
      const audio = document.getElementById('myAudio') as HTMLAudioElement;
      audio.volume = Number(e.target.value) / 100;
    }
    setVolume(Number(e.target.value) / 100);
  };
  const muteVolume = () => {
    setMute(!mute);
    if (!mute) {
      const audio = document.getElementById('myAudio') as HTMLAudioElement;
      audio.volume = 0;
    }
    if (mute) {
      const audio = document.getElementById('myAudio') as HTMLAudioElement;
      setMute(!mute);
      audio.volume = volume;
    }
  };
  return (
    <div className="Slider">
      <input type="range" step="0.01" value={String(position)} className="RangeSlider" id="myRange" onChange={onChange} />
      <div className="SongDurationInfo">
        <div>{secondsToHms(currentTime)}</div>
        <div style={{ textAlign: 'right' }}>{secondsToHms(duration)}</div>
      </div>
      <div className="volumeControl">
        <IconButton onClick={muteVolume}>
          {mute ? <VolumeOffIcon sx={{ color: 'white' }} /> : <VolumeDown sx={{ color: 'white' }} /> }
        </IconButton>
        <input id="volumeRange" type="range" min="0" max="100" onChange={onVolumeChange} />
        <IconButton onClick={muteVolume}>
          {mute ? <VolumeOffIcon sx={{ color: 'white' }} /> : <VolumeUp sx={{ color: 'white' }} /> }
        </IconButton>
      </div>
    </div>
    );
};

export default MusicLine;
