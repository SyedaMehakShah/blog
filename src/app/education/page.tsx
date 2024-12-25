"use client";
import Image from 'next/image'
import  education from "../public/edu.png"
import CommentSection from '../components/comment'

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-cyan-950 ">
      <h1 className="text-4xl font-bold text-center mb-8  text-white">AI & Robotics Blog</h1>
      
      {/* AI in Education Post */}
      <div className="bg-cyan-950 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600">AI in Education</h2>

        {/* First Paragraph (Text Only) */}
        <p className="text-gray-300 mt-4">
          Artificial Intelligence is playing an increasingly important role in revolutionizing the education system. 
          From personalized learning experiences to AI-driven administrative tasks, AI is transforming the way students learn 
          and educators teach. This post explores how AI is reshaping the education landscape and its potential benefits.
        </p>

        {/* Second Paragraph (Text and Image on Left and Right) */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <Image
              src={education} // Replace with your image file path or URL
              alt="AI in Education"
              width={500} // Set your image width
              height={300} // Set your image height
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:ml-8 mt-1 md:mt-0">
            <p className="text-gray-300">
              AI-powered tools can analyze individual learning styles, helping teachers customize lesson plans for each student. 
              This personalization improves student engagement, retention, and overall performance. Moreover, AI can provide immediate 
              feedback on assignments, enabling students to learn at their own pace. Beyond learning, AI in education also aids in streamlining administrative tasks, such as grading, attendance tracking, 
          and resource allocation, which allows educators to focus more on teaching. AI also enables virtual tutors and chatbots 
          to assist students outside of classroom hours, providing on-demand help.
            </p>

          </div>
          
        </div>
      </div> 
      <div>
        <CommentSection />
      </div>
    </div>
  )
}
