import React from 'react';
import boxes from './boxes';

export default function DisplayBox(){

const someBoxes =boxes.map(box => <div key={box.id} className='box'>{box.id}</div>)

return(
<div className='main--display'>
<h1>Boxes will Display Here</h1>
{someBoxes}
</div>

);

}