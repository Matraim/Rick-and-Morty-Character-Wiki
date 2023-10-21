import React, { useState } from 'react';
import errorImg from '../assets/icon/400.svg';

const CastomImg = ({ src, className, ...props }) => {
  const [error, setError] = useState(false);

  const onError = (e) => {
    setError(true);
  };

  const imgSrc = error ? errorImg : src;

  return (
    <img onError={onError} className={className} alt="Imgaes" src={imgSrc} />
  );
};

export default CastomImg;
