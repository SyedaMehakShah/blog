

import React from 'react';
import HealthComponent from '@/app/components/health';
import EducationComponent from '@/app/components/education';
import RobotComponent from '@/app/components/robot';

interface BlogProps {
  params: { blog: string }; // Ensure params has the correct structure
}

const Blog = async ({ params }: BlogProps) => {
  const renderComponent = () => {
    switch (params.blog) {
      case 'health':
        return <HealthComponent />;
      case 'education':
        return <EducationComponent />;
      case 'robot':
        return <RobotComponent />;
      default:
        return <p>Blog not found. Please select a valid category.</p> // Add a default case
    }
  };

  return (
    <div>
  
      {renderComponent()}
    </div>
  );
};

export default Blog;
