import Video from "./Blog";
import PlayButton from "./AddButton";

function VideoList({videos,deleteVideo,editVideo}){

    return(
        <>
        {videos.map((video) => (
            <Video
              key={video.id}
              title={video.title}
              time={video.time}
              channel={video.channel}
              verified={video.verified}
              id={video.id}
              deleteVideo={deleteVideo}
              editVideo={editVideo}
            >
              <PlayButton
                onPlay={() => console.log('Playing..',video.title)}
                onPause={() => console.log('Paused..',video.title)}
              >
                {video.title}
              </PlayButton>
            </Video>
          ))}
          </>
    )
}

export default VideoList