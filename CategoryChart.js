import React,
{
  useEffect,
  useState
}
from "react";

import axios from "axios";

function CategoryChart() {

  const [categories,
  setCategories] =
  useState([]);

  useEffect(() => {

    axios
      .get(
        "http://localhost:5000/api/categories/insights"
      )
      .then(res => {

        setCategories(
          res.data
        );

      });

  }, []);
return (

  <div className="chart">

    {categories.map(cat => (

      <div
        key={cat._id}
        className="bar-container"
      >

        <div
          className="bar"
          style={{
            height:
            cat.viewsCount * 3
          }}
        />

        <p>
          {cat.title}
        </p>

        <strong>
          {cat.viewsCount}
        </strong>

      </div>

    ))}

  </div>

);
}

export default CategoryChart;