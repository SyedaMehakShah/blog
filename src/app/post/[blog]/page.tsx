
import React from 'react';
import HealthComponent from '@/app/components/health';
import EducationComponent from '@/app/components/education';
import RobotComponent from '@/app/components/robot';

interface BlogProps {
  params: { blog: string };
}

const Blog = ({ params }: BlogProps) => {
  const renderComponent = () => {
    switch (params.blog) {
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
    <div>
      {/* <h1>Dynamic Blog Page</h1> */}
      {renderComponent()}
    </div>
  );
};

export default Blog;
