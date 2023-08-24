import React from 'react';
import './App.css'
const Center=(state)=>{
const {items}=state;
    return(

items.map(item=>{
    return(
        
        <div className='cen' key={item.id}>

    <p>
<b className='id'>{item.id}</b>
<b className='name'>{item.name}</b>
<b className='eml'>{item.email}</b>
<b>{item.workdays}</b>
<b className='cs'> {item.comment}</b>
{'\n'}

</p>
   
   </div>
    )
})

)
}
export default Center;