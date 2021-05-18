import React from 'react';
import {
  Pause as PauseIcon,
  PlayArrow as PlayArrowIcon,
} from '@material-ui/icons/';
import formatSeconds from '../utils/formatSeconds';

export default function TimerTask({ timer = 0, isActive, onPlay, onPause }) {
  return (
    <div>
      <div>{formatSeconds(timer).format}</div>
      <div>
        {isActive ? (
          <PauseIcon onClick={() => onPlay()} />
        ) : (
          <PlayArrowIcon onClick={() => onPause()} />
        )}
      </div>
    </div>
  );
}
