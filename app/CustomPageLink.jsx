import React from 'react';

const CustomPageLink = ({ properties, children }) => {
  // Access the slug property from the properties object
  const slug = properties?.slug; // Make sure to use the correct property name
  return (
    <a href={`/blog/${slug}`} className="custom-link">
      {children} (Custom Link)
    </a>
  );
};

export default CustomPageLink;
