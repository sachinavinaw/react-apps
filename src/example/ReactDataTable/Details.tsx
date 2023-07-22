import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type DetailsProps = {
  setState: (isVisible: boolean) => void;
};
const Details = ({ setState }: DetailsProps) => {
  const handleHideChildComponent = () => {
    setState(false);
  };
  return (
    <div>
      <h1>This is detail page</h1>
      <button onClick={handleHideChildComponent}>Return</button>
    </div>
  );
};

export default Details;
