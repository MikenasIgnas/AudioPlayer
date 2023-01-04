/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PlayerButtons from './PlayerButtons';
import MusicLine from './MusicLine';
import SongInfo from './SongInfo';
import song from '../Song.mp3';

const MusicPlayer = () => {
  const audioRef = React.useRef() as React.MutableRefObject<HTMLAudioElement>;
  const [clicked, setClicked] = React.useState(false);
  const [percentage, setPercentage] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const playMusic = () => {
    const audio = audioRef.current;
    const songDuration = audio.duration;

    setClicked(!clicked);
    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
      setDuration(Number(songDuration.toFixed(0)));
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberValue = Number(e.target.value);
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * numberValue;
    setPercentage(numberValue);
  };
  const getCurrDuration = (e: { currentTarget: { currentTime: number; duration: number; }; }) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2);
    const time = e.currentTarget.currentTime;
    setPercentage(+percent);
    setCurrentTime(Number(time.toFixed(2)));
  };
  return (
    <div className="PlayerContainer">
      <div className="Player">
        <div style={{ width: '100%' }}>
          <div className="MenuBar">
            <IconButton>
              <MenuIcon sx={{ color: 'white', fontSize: 40 }} />
            </IconButton>
            <div>NOW PLAYING</div>
            <IconButton>
              <SearchIcon sx={{ color: 'white', fontSize: 40 }} />
            </IconButton>
          </div>
          <div className="SongData">
            <img className="image" src="https://imgs.search.brave.com/OX-zgFBruD38PdJRxjY7RPhDwl5_4SljFBR1jU0sYAk/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzIwMDAvMSpP/WW1zMVctZEo2WTVQ/OGNlSm1QVlN3QDJ4/LmpwZWc" alt="error" />
            <SongInfo />
          </div>
        </div>
        <div>
          <MusicLine
            onChange={onChange}
            percentage={percentage}
            duration={duration}
            currentTime={currentTime}
          />
          <PlayerButtons playMusic={playMusic} clicked={clicked} />
        </div>
        <audio
          id="myAudio"
          onLoadedData={
          (e) => { setDuration(Number(e.currentTarget.duration.toFixed(0))); }
}
          onTimeUpdate={getCurrDuration}
          ref={audioRef}
          src={song}
        />
      </div>
    </div>
      );
};

export default MusicPlayer;
