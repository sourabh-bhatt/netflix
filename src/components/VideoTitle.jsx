import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-8 md:px-24 absolute text-white bg-gradient-to-r from-black">

      <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 w-1/4 ">{overview}</p>
      <div>

        <button className=" bg-gray-900 hover:bg-gray-800 mt-1 text-white font-bold py-2 px-4 rounded-full">
          <FontAwesomeIcon icon={faPlay} /> Play
        </button>

        <button className='hidden md:inline-block mx-1 sm:mx-2 bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full bg-opacity-50'>
          <FontAwesomeIcon icon={faCircleInfo} /> More Info
        </button>

      </div>
    </div>

  );
};

export default VideoTitle;