import React from 'react';

function Header2({ items, filter }) {
  return (
    <div>
      <br />
      <div style={{ display: 'flex', flexDirection: 'column' , gap: '10px' }}>
        {items.filter(item => item.category.includes(filter)).map(item => (
          <div key={item.id}
            style={{ backgroundColor: 'ButtonFace', display: 'flex', alignItems: 'center', gap: '10px', padding: '10px'}}>
            <img
              src={item.path}
              alt={item.title}
              width={200}
              height={150}/>
            <div>
              <h3>{item.title} ~ {item.author}</h3>
              <p>{item.views} views ~ {item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header2;
