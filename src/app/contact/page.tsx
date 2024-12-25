export default function Contact() {
    return (
        <div className="bg-cyan-950">
      <div className="max-w-4xl mx-auto px-4 py-12 ">
        <h1 className="text-4xl font-bold text-center mb-6 text-white">Contact Us</h1>
        <p className="text-center text-gray-300 mb-8">
          We&apos;d love to hear from you! Please fill out the form below, and we will get back to you as soon as possible.
        </p>
  
        <form className="bg-cyan-950 p-6 rounded-lg shadow-md">
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
  
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      </div>
    );
  }
  