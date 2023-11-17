import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// import products from "./data/products.json";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);

  function inputSearch(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setFilterProducts(data.products);
      });
  }, []);

  useEffect(() => {
    const filterProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setFilterProducts(filterProducts);
  });

  return (
    <>
      {" "}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search Product"
        onChange={(event) => inputSearch(event)}
      />
      <div className="row g-3">
        {filterProducts.map((product, index) => (
          <div className="col-md-3">
            <div className="card" key={index}>
              <img
                src={product.thumbnail}
                className="card-img-top object-fit-cover"
                style={{ height: "15vw" }}
              />
              <div className="card-body">
                <h5 className="card-title text-truncate">{product.title}</h5>
                <p className="card-text text-truncate">{product.description}</p>
                <div className="d-flex flex-row-reverse">
                  <p className="fw-bold fs-5">$ {product.price}</p>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-grid">
                  <Link
                    to={`product/${product.id}`}
                    className="btn btn-primary"
                  >
                    Product Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
