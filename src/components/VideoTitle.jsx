// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';


// const VideoTitle = ({title, overview}) => {
//   return (
//     <>
//         <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
//             <h1 className="text-5xl font-bold w-1/2">{title}</h1>
//             <p className="py-6 text-lg w-1/3">{overview}</p>
//             <div className="">
//                 <button className=" bg-white hover:bg-opacity-80 border-2  text-black p-4 px-12 rounded-lg  ">
//                 <FontAwesomeIcon icon={faPlay} /> Play
//                 </button>
//                 <button className=' mx-2 bg-gray-400 hover:bg-opacity-80 text-black p-4 px-10 rounded-lg bg-opacity-50'>
//                 <FontAwesomeIcon icon={faCircleInfo} /> More Info
//                 </button>
//             </div>
//         </div>
//     </>
//   )
// }

// export default VideoTitle

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-1/4 w-1/3 z-10 text-white">
      <h1 className="text-3xl sm:text-5xl font-bold sm:ml-[18%]">{title}</h1>
      <p className="py-4 text-base sm:text-lg sm:ml-[18%]">{overview}</p>
      <div className="flex justify-center">
        <button className="bg-white hover:bg-opacity-80 border-2 text-black p-2 sm:p-4 px-6 sm:px-12 rounded-lg">
          <FontAwesomeIcon icon={faPlay} /> Play
        </button>
        <button className='mx-1 sm:mx-2 bg-gray-400 hover:bg-opacity-80 text-black p-2 sm:p-4 px-4 sm:px-10 rounded-lg bg-opacity-50'>
          <FontAwesomeIcon icon={faCircleInfo} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
