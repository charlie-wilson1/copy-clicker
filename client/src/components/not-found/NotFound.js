import React from 'react';
import ProperEmoji from '../common/ProperEmoji';

export default () => {
  return (
    <div className="my-5">
      <h1 className="display-4 text-center">
        <ProperEmoji emoji="📄" alt="Page not found" />{' '}
        <ProperEmoji emoji="❌" alt="" /> <ProperEmoji emoji="🗺" alt="" />
      </h1>
      {/* <h3 className="text-center">
        ...<ProperEmoji emoji="🤔" alt="Try another page" />
      </h3>
      <hr /> */}
      <h1 className="display-4 text-center mb-4">Page not found</h1>
      <h3 className="text-center">Try another page</h3>
    </div>
  );
};
