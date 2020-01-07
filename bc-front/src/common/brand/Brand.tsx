import * as React from 'react';
import './Brand.scss'

export interface IAppProps {
    name: String
}


export default function Brand (props: IAppProps) {
  return (
    <div className="brand">
        <svg className="brand-svg" viewBox="0 0 800 80"> 
            <symbol id="s-text">
                <text x="0" y="0" dy=".8em">  {props.name}</text>
            </symbol>
            <use className="text" href="#s-text"></use>
            <use className="text" href="#s-text"></use>
            <use className="text" href="#s-text"></use>
            <use className="text" href="#s-text"></use>
            <use className="text" href="#s-text"></use>

       </svg>
    </div>
  );
}
