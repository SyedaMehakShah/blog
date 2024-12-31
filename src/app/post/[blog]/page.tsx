import React from 'react';
import HealthComponent from '@/app/components/health';
import EducationComponent from '@/app/components/education';
import RobotComponent from '@/app/components/robot';

interface BlogProps {
  params: {
    blog: string;
  };
}

// Convert the component to an async function to properly handle the `params`
const Blog = async ({ params }: BlogProps) => {
  // Await the `params` object to ensure its properties are ready to use
  const { blog } = params;

  // Dynamically render the correct component based on the blog parameter
  const renderComponent = () => {
    switch (blog) {
      case 'health':
        return <HealthComponent />;
      case 'education':
        return <EducationComponent />;
      case 'robot':
        return <RobotComponent />;
      default:
        return <p>Blog not found. Please select a valid category.</p>;
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dynamic Blog Page</h1>
      {renderComponent()}
    </div>
  );
};

export default Blog;


