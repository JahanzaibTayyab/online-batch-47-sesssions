import React from "react";

function FilterableProductTable({ products }: any) {
  function ProductCategoryRow({ category }: any) {
    return (
      <tr>
        <th colSpan={2}> Category Name : {category}</th>
      </tr>
    );
  }

  function ProductRow({ product }: any) {
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
  function ProductTable({ products }: any) {
    const rows: any[] = [];
    let lastCategory: any = null;
    // console.log(
    //   "🚀 ~ file: FilterableProductTable.tsx:29 ~ ProductTable ~ lastCategory:",
    //   lastCategory
    // );

    products.forEach((product: any) => {
      // console.log(
      //   "🚀 ~ file: FilterableProductTable.tsx:47 ~ products.forEach ~ product:",
      //   product
      // );
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  return (
    <div className="py-5">
      <form className="flex flex-col gap-2 px-4">
        <input
          className="border"
          type="text"
          placeholder="Search any product"
        />
        <label>
          <input type="checkbox" /> Only show products in stock
        </label>
      </form>
      <ProductTable products={products} />
      {/* <div>
        {products.map((product: any, index: number) => {
          return (
            <div key={index}>
              {product.name} {product.price}
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default FilterableProductTable;
