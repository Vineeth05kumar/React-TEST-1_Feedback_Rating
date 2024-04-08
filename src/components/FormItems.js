import React, { useEffect, useState } from "react";
export default function FormItems({ items, onDelete }) {
  const [starCounts, setStarCounts] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  useEffect(() => {
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    items.forEach((item) => {
      counts[item.rating]++;
    });
    setStarCounts(counts);
  }, [items]);

  const handleDelete = (index) => {
    onDelete(index);
  };

  const handleEdit = (index) => {
    onDelete(index);
  };

  return (
    <div>
      <h2>The Ratings are</h2>
      <p id="1star">{`1 Star: ${starCounts[1]}`}</p>
      <p id="2star">{`2 Stars: ${starCounts[2]}`}</p>
      <p id="3star">{`3 Stars: ${starCounts[3]}`}</p>
      <p id="4star">{`4 Stars: ${starCounts[4]}`}</p>
      <p id="5star">{`5 Stars: ${starCounts[5]}`}</p>

      {items.map((item, index) => (
        <div key={index}>
          <p>
            Name: {item.name} Rating:{item.rating}{" "}
            <button type="button" onClick={() => handleDelete(index)}>
              Delete
            </button>
            <button type="button" onClick={() => handleEdit(index)}>
              Edit
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}
