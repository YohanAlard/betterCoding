import * as React from 'react';
import './Categorie.scss'
export interface ICategorieProps {
    name : String 
}

export default function Category(props: ICategorieProps) {
  return (
    <div>
       {props.name}
    </div>
  );
}
