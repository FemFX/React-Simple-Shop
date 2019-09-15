import React from 'react';
import items from '../data';

export default () => { 
  return (
    <div className="pt-3 phones">
      {items.map(item => (
        <div class="card pt-5 mt-5 mr-5" >
          <img src={item.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">
              {item.description}
            </p>
          </div>
          {/* <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul> */}
          <div class="card-body">
            <button className="btn btn-info-btn-block">More Info</button>
          </div>
        </div>
      ))}
    </div>
  );
};
