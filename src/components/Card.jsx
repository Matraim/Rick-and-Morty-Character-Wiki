import React from 'react';
import trunceate from '../utils/helpers/text.js';
import { AiTwotonePlusCircle } from 'react-icons/ai';
import { userStatusColor } from '../utils/helpers/status';
import CastomImg from './CastomImg';

const Card = ({ status, name, type, url, origin }) => {
  return (
    <div className="myCard">
      <CastomImg className="img" src={url} alt="Images Ricki and morty" />
      <div className="allText">
        <h2 className="textName">{name}</h2>
        <h4 id="h4">
          <AiTwotonePlusCircle color={userStatusColor(status)} />{' '}
          {String(status)} Human
        </h4>
        <br />
        <p>Last know location</p>
        <h4 title={origin.name}>{trunceate(origin.name, 29)}</h4>
        <br />
        <p>First seen in:</p>
        <h5>{type}</h5>
      </div>
    </div>
  );
};

export default Card;
