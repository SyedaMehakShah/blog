
import Image from 'next/image';
import banner from '../public/banner.jpg';

const Banner = () => {
  return (
    
    <section className="relative py-16 px-8 sm:px-16 md:px-24 border-teal-950 border ">
     
         <div className="absolute inset-0 w-full h-full">
        <Image 
          src={banner} 
          alt="AI Banner" 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center" 
          className="opacity-50 " 
        />
      </div>
      <div className="relative z-10 container mx-auto text-center ">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-sky-950  ">Welcome to the AI Blog</h1>
        <p className="text-lg sm:text-xl mb-6 text-teal-950">Explore the latest trends, insights, and news in Artificial Intelligence and Machine Learning.</p>
        <a href="/blog" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-200">Read Our Posts</a>
      </div>
     

    </section>

  );
};

export default Banner;
