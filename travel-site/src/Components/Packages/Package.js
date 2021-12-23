import React, { useState } from "react";
import './package.css';
import img1 from '../../image/Naran.jpg'
import img2 from '../../image/kashmir.jpg'
import img3 from '../../image/sialkot.jpg'
export default function Package() {
  const [pakages, setPackages] = useState([
    {
      title: "Naran Valley",
      description: "5 Days, 4 Nights Start From 18000PKR",
      buttontitle: "Book Now",
      image: img1,
    },
    {
      title: "Kashmir",
      description: "8 Days, 7 Nights Start From 30,000PKR",
      buttontitle: "Book Now",
      image: img2,
    },
    {
      title: "Turkey",
      description: "7 Days, 6 Nights Start From 109500PKR",
      buttontitle: "Book Now",
      image: img3,
    },
  ]);

  return (
    <div className="body2">
        <h1>Tour Packages</h1>
      <div className="container">
        <div className="row">
          {pakages.map((item) => {
            return (
              <div className="col-4">
                <div class="card">
                  <img src={item.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">
                      {item.description}
                    </p>
                    <a href="#" class="btn btn-success">
                     {item.buttontitle}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
