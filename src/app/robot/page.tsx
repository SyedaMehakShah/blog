"use client";
import Image from 'next/image'
import ai from '../public/ai.png'
import CommentSection from '../components/comment'

export default function Robotic() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-cyan-950 text-gray-300">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">AI & Robotics Blog</h1>
      
      <div className=" p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600">The Rise of AI and Robotics</h2>
        <p className=" mt-2">
          Artificial Intelligence (AI) and robotics are two fields that have revolutionized industries and transformed the way we live and work. In this post, we&apos;ll explore how these technologies are changing the landscape of various sectors.
        </p>

        <div className="mt-6 relative h-96 w-full rounded-lg overflow-hidden">
          <Image
            src={ai} 
            alt="AI and Robotics"
            layout="fill"
            className="rounded-lg"
          />
        </div>

        <p className=" mt-4">
          Robotics involves designing and building machines capable of performing tasks that are typically done by humans. Coupled with AI, these robots are becoming smarter, more autonomous, and capable of executing complex tasks without human intervention.
        </p>

        <p className=" mt-4">
          From healthcare to manufacturing, AI-powered robots are making processes more efficient and cost-effective. In this blog, we will dive deeper into some key advancements and their impact on society.
        </p>
      </div>
      <div>
        <CommentSection />
      </div>
    </div>
  )
}
