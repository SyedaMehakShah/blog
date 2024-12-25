
import { useState, useEffect } from 'react';

interface Comment {
  name: string;
  comment: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  // Load comments from localStorage when the component mounts
  useEffect(() => {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  }, [comments]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name && comment) {
      const newComment = { name, comment };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setName('');
      setComment('');
    } else {
      alert('Please enter both your name and comment.');
    }
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className=" p-6  flex justify-center">
      <div className=" max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-white text-center">Leave a Comment</h2>
        
        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg text-gray-300">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-gray-300 rounded-lg p-2 mt-2"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="comment" className="text-lg text-gray-300">Comment</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="border-2 border-gray-300 rounded-lg p-2 mt-2 h-32"
              placeholder="Your comment"
            />
          </div>

          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-700 transition duration-200 w-full">
            Submit Comment
          </button>
        </form>

        {/* Display Comments */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-950">Comments:</h3>
          <div className="mt-4 space-y-4">
            {comments.length === 0 ? (
              <p className="text-gray-300">No comments yet. Be the first to comment!</p>
            ) : (
              comments.map((comment, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-800">{comment.name}</p>
                  <p className="text-gray-700 mt-2">{comment.comment}</p>
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDeleteComment(index)}
                    className="text-red-500 mt-2 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
