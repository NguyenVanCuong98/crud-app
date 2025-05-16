import React from 'react';

const Page = ({ Component, ...props }) => {
  return (
    <div>
      <Component {...props} />
    </div>
  );
};

export default Page;
