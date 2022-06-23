import React from 'react';
import Chao from '../Chao';

const ChaoList = (props) => {
  const {users} = props;
  const mapUsers = ({ id, fname }) => (
    <Chao key={id} id={id} name={fname} />
  );
  return (
    <div>
      {users.map(mapUsers)}
    </div>
  );
}

export default ChaoList;
