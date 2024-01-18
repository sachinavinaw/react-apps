import React from 'react';
import ReactHooksExample from '../reacthooks/ReactHooksExample';

function Home() {
  return (
    <>
      <div>This is home coomponent</div>
      <div>
        <h2>useCallback Example</h2>
        <ReactHooksExample />
      </div>
    </>
  );
}

export default Home;
