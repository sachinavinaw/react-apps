import React from 'react';

type CardProps = {
  data: any[];
};

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className='row p-5'>
      {data.map((photo: any, index: number) => (
        <div className='col-3 mb-3' key={index}>
          <div className='card'>
            <img src={photo.url} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Album ID : {photo.albumId}</h5>
              <p className='card-text'>{photo.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
