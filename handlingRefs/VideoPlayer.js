import { useEffect, useRef } from "react";

function VideoPlayer({src, isPlaying}){

    const VideoRef = useRef(null);

    useEffect(() => {
        if(isPlaying){
            VideoRef.current.play();
        }
        else{
            VideoRef.current.pause();
        }
    }, [isPlaying]);

    return(
        <div>
            <video src={src} ref={VideoRef}></video>
        </div>
    );
}

export default VideoPlayer;