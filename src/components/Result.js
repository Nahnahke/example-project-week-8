import React from 'react';

export const Result = ({ name, food, drink }) => {
  return (
    <>
      <p>{name}</p>
      <p>{food}</p>
      <p>{drink}</p>
    </>
  );
}