"use client";
import CommentSection from "../components/comment";
export default function Health() {
  return (
    <>
     
      <div className="bg-cyan-950 min-h-screen py-7 text-gray-300">
        <header className=" text-center py-6">
          <h1 className="text-3xl font-bold">AI in Health</h1>
          <p className="text-lg">Revolutionizing Healthcare with Artificial Intelligence</p>
        </header>

        <main className="max-w-4xl mx-auto mt-8 p-6 bg-gray-800 rounded-lg shadow">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Welcome to AI in Health</h2>
            <p className=" leading-relaxed">
              In today&apos;s fast-paced world, artificial intelligence (AI) is transforming industries—and healthcare is no exception. From improving diagnostic accuracy to streamlining hospital operations, AI is paving the way for a future where technology and medicine work hand-in-hand to save lives.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">What You&apos;ll Find on Our Blog</h2>
            <ul className="list-disc pl-5 ">
              <li className="mb-2">
                <strong>AI-Powered Diagnostics:</strong> Learn how AI is helping doctors detect diseases like cancer, diabetes, and heart conditions earlier and more accurately than ever before.
              </li>
              <li className="mb-2">
                <strong>Personalized Treatment Plans:</strong> Discover how AI is being used to create tailored treatments based on a patient&apos;s unique genetic makeup and medical history.
              </li>
              <li className="mb-2">
                <strong>Robotic Surgeries:</strong> Explore how AI-powered robots assist surgeons with precision, reducing recovery times and improving outcomes.
              </li>
              <li className="mb-2">
                <strong>AI in Mental Health:</strong> Uncover the role of AI in mental health, from virtual therapists to tools for detecting signs of depression and anxiety.
              </li>
              <li className="mb-2">
                <strong>Health Monitoring Wearables:</strong> Dive into the latest AI-driven wearables that monitor vital signs in real-time, keeping patients informed and connected to their healthcare providers.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Why AI in Health Matters</h2>
            <p className=" leading-relaxed">
              Artificial intelligence holds the potential to address some of the biggest challenges in healthcare:
            </p>
            <ul className="list-disc pl-5 ">
              <li className="mb-2">Bridging gaps in underserved areas with telemedicine and AI tools.</li>
              <li className="mb-2">Reducing healthcare costs through efficiency and automation.</li>
              <li className="mb-2">Enhancing the patient experience with faster, more reliable care.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Join the Conversation</h2>
            <p className=" leading-relaxed">
              We aim to inspire and inform healthcare professionals, patients, and AI enthusiasts. Stay updated with the latest advancements and success stories in the AI and healthcare space. Let’s shape the future of health together!
            </p>
          </section>
        </main>
        <div>
          <CommentSection />
        </div>
      </div>
    </>
  );
}
