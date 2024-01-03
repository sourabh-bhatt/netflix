import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';


const VideoTitle = ({title, overview}) => {
  return (
    <>
        <div className="pt-16 px-12">
            <h1 className="text-5xl font-bold w-1/2">{title}</h1>
            <p className="py-6 text-lg w-1/3">{overview}</p>
            <div className="">
                <button className=" bg-black border-2 border-black text-black p-4 px-12 rounded-lg bg-opacity-50 ">
                <FontAwesomeIcon icon={faPlay} /> Play
                </button>
                <button className=' mx-2 bg-black border-2 border-black text-black p-4 px-10 rounded-lg bg-opacity-50'>
                <FontAwesomeIcon icon={faCircleInfo} /> More Info
                </button>
            </div>
        </div>
    </>
  )
}

export default VideoTitle