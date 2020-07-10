import React from 'react';

import './collection-item.styles.scss';


const CollectionItem = ({id, ...OtherItemProps}) => (

    <div className='collection-item'>
       <div
       className='image'
       style={{backgroundImage: `url(${OtherItemProps.imageUrl})`
       
       }} />

       <div className='collection-footer'>
           <span className='name'>{OtherItemProps.name}</span>
           <span className='price'>{OtherItemProps.price}</span>
       </div>

    </div>
);

export default CollectionItem;