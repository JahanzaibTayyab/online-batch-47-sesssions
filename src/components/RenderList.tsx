import React from "react";
const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
  { title: "Apple", id: 4 },
  { title: "Apple", id: 5 },
  { title: "Apple", id: 6 },
];

function RenderList() {
  return (
    <div className="flex flex-col gap-5 p-2">
      Never use For loop within html
      <p>Always Use Map Function</p>
      <div>Manually</div>
      <div className="flex flex-col gap-3">
        <p>{products[0].title}</p>
        <p>{products[1].title}</p>
        <p>{products[2].title}</p>
      </div>
      <div>Map Function</div>
      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default RenderList;
