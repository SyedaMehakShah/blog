import Image from "next/image";
import health from "../public/health.png";
import education from "../public/education.png";
import robot from "../public/robot.png";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="py-10 bg-cyan-950">
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* AI in Healthcare Card */}
        <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          <Image
            src={health}
            alt="AI in Healthcare - Revolutionizing healthcare with AI"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-semibold mb-2 text-gray-100">
              AI in Healthcare
            </h3>
            <p className="text-gray-300 mb-4">
              Learn how AI is revolutionizing the healthcare industry by
              providing better diagnostics and treatments.
            </p>
            <Link href="/post/health">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-200">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* AI & Robotics Card */}
        <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          <Image
            src={robot}
            alt="AI and Robotics - AI and robotics working together to automate industries"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-semibold mb-2 text-gray-100">
              AI & Robotics
            </h3>
            <p className="text-gray-300 mb-4">
              Discover how robotics and AI work together to automate industries
              and transform lives.
            </p>
            <Link href="/post/robot">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-200">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* AI in Education Card */}
        <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          <Image
            src={education}
            alt="AI in Education - AI reshaping education through personalized learning"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-semibold mb-2 text-gray-100">
              AI in Education
            </h3>
            <p className="text-gray-300 mb-4">
              Explore the role of AI in reshaping education through personalized
              learning experiences.
            </p>
            <Link href="/post/education">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-200">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
