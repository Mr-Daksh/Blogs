import './Blog.css';

function Video({ title, id, channel = "Design Script", views, time, verified, children, deleteVideo, editVideo }) {
  console.log('render Video')


  return (
    <>
    <div className='top-container'>
      <div className='container'>
        <button className='close' onClick={() => deleteVideo(id)}>X</button>
        <button className='edit' onClick={() => editVideo(id)}>Edit</button>
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel} {verified && '✅'} </div>
        <div className="views">
        {time}
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
    </>
  );
}

export default Video;
