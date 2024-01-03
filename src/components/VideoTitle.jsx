import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';


const VideoTitle = ({title, overview}) => {
  return (
    <>
        <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-5xl font-bold w-1/2">{title}</h1>
            <p className="py-6 text-lg w-1/3">{overview}</p>
            <div className="">
                <button className=" bg-white hover:bg-opacity-80 border-2  text-black p-4 px-12 rounded-lg  ">
                <FontAwesomeIcon icon={faPlay} /> Play
                </button>
                <button className=' mx-2 bg-gray-400 hover:bg-opacity-80 text-black p-4 px-10 rounded-lg bg-opacity-50'>
                <FontAwesomeIcon icon={faCircleInfo} /> More Info
                </button>
            </div>
        </div>
    </>
  )
}

export default VideoTitle