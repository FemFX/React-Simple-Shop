import React from 'react';
import BestTelephone from '../components/BestTelephones';

export default () => {
  return (
    <div className="pt-5 pl-5">
      <div className="pt-5">
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">New Telephones. </h2>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio qui
              nobis, blanditiis asperiores maiores quod quo necessitatibus
              incidunt nostrum? Doloribus maiores fugiat nemo earum? Harum
              mollitia inventore aliquam! Nemo, nihil!
            </p>
          </div>
          <div class="col-md-5">
            <img
              src="https://goodki.ru/upload/iblock/f1d/f1d441854b196d6ed972adc4896dd6b4.jpg"
              width="300"
              height="300"
              alt="phone"
            />
          </div>
        </div>
      </div>
      <hr />
      <h3 className="text-center">MOST POPULAR</h3>
      <BestTelephone />
    </div>
  );
};
