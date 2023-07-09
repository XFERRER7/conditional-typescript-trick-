import React = require('react');

type props = {
  name: string;
} & (
  | {
      gender: 'male';
      height: number;
    }
  | {
      gender: 'female';
      weight: number;
    }
);

export const User = (props: props) => {
  return (
    <div>
      <div>
        <p>Nome: {props.name}</p>

        {props.gender === 'male' && <span>Altura: {props.height}</span>}

        {props.gender === 'female' && <span>Peso: {props.weight}</span>}
      </div>
    </div>
  );
};
