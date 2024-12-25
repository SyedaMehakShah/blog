// app/about/page.tsx
import Image from 'next/image';
import aiImage from '../public/ai.png';

const About = () => {
  return (
    <div className="bg-cyan-950 min-h-screen py-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-6">About Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <Image
              src={aiImage}
              alt="AI Image"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center text-gray-200">
            <p className="text-lg mb-4">
              Welcome to AI Blog, where we dive deep into the exciting world of Artificial Intelligence and Machine Learning. Our goal is to bring you the latest trends, insights, and developments in AI, helping you stay informed and ahead in this rapidly evolving field.
            </p>
            <p className="text-lg mb-4">
              We cover a wide range of topics, including AI in healthcare, education, robotics, and more. Whether you&apos;re a beginner or an expert, you&apos;ll find articles that offer valuable perspectives, practical tips, and the latest research in AI and ML technologies.
            </p>
            <p className="text-lg">
              Join us as we explore how AI is transforming industries and shaping the future of technology. Stay tuned for engaging posts, interviews, and case studies that shed light on the amazing possibilities of AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
