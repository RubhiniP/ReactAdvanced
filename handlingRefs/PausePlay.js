import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

function PausePlay(){

    const [ isPlaying, setIsPlaying ] = useState(false);

    return(
        <div>
            <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>
            <VideoPlayer src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' isPlaying={isPlaying} />
        </div>
    );
}

export default PausePlay;