import React from 'react';
import items from '../data';

export default () => {
  return (
    <div className="cards">
      <div className="pt-3 ">
        <div class="card pt-5 mt-5 mr-5">
          <img src={items[0].image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{items[0].title}</h5>
            <p class="card-text">{items[0].description}</p>
          </div>
          <div class="card-body">
            <button className="btn btn-info-btn-block">More Info</button>
          </div>
        </div>
      </div>
      <div className="pt-3 cards">
        <div class="card pt-5 mt-5 mr-5">
          <img src={items[1].image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{items[1].title}</h5>
            <p class="card-text">{items[1].description}</p>
          </div>
          <div class="card-body">
            <button className="btn btn-info-btn-block">More Info</button>
          </div>
        </div>
      </div>
      <div className="pt-3 cards">
        <div class="card pt-5 mt-5 mr-5">
          <img src={items[2].image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{items[2].title}</h5>
            <p class="card-text">{items[2].description}</p>
          </div>
          <div class="card-body">
            <button className="btn btn-info-btn-block">More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};
