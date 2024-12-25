// import Image from 'next/image';
// import AI from '../public/image.png';

// export default function Home() {
//   return (
//     <div className="bg-cyan-950 py-8">
//       <div className=" flex flex-col md:flex-row items-center mr-28 gap-2">
//           <div className="md:w-1/2">
//             <Image
//               src={AI} 
//               alt="AI Image" 
//               width={500} 
//               height={300} 
//               className="rounded-lg pt-8 pl-5"
//             />
//           </div>
//           <div className="md:w-1/2 md:ml-8 mt-1 md:mt-0">
//             <p className="text-gray-300 ">
//             Artificial Intelligence (AI) is the field of computer science focused on creating machines and systems that 
//             can perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving,
//              and language understanding. Through techniques like machine learning, natural language processing, and computer vision,
//               AI enables machines to analyze data, recognize patterns, and make decisions autonomously. AI has wide-ranging applications 
//               across industries, including healthcare, finance, education, and entertainment, transforming the way we work and live. However, 
//               its growth also raises important ethical concerns regarding privacy,
//              bias, and job displacement, highlighting the need for responsible and transparent AI development.
//             </p>
//           </div>
//         </div>
//     </div>
//   );
// }


import Image from 'next/image';
import AI from '../public/image.png';

export default function Home() {
  return (
    <div className="bg-cyan-950 py-8">
      <div className="flex flex-col md:flex-row items-center gap-4 px-4 md:px-28">
        {/* Image Section */}
        <div className="md:w-1/2">
          <Image
            src={AI}
            alt="AI Image"
            width={500}
            height={300}
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 md:ml-8 mt-4 md:mt-0">
          <p className="text-gray-300 text-base md:text-lg">
            Artificial Intelligence (AI) is the field of computer science focused on creating machines and systems that
            can perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving,
            and language understanding. Through techniques like machine learning, natural language processing, and computer vision,
            AI enables machines to analyze data, recognize patterns, and make decisions autonomously. AI has wide-ranging applications
            across industries, including healthcare, finance, education, and entertainment, transforming the way we work and live. However,
            its growth also raises important ethical concerns regarding privacy, bias, and job displacement, highlighting the need for responsible
            and transparent AI development.
          </p>
        </div>
      </div>
    </div>
  );
}
