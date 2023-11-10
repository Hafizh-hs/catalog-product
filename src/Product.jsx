import { Link } from "react-router-dom";
import products from "./data/products.json";
import ProductDetail from "./ProductDetail";

export default function Product() {
  return (
    <div className="row g-3">
      {products.map((product, index) => (
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
                <Link to={`product/${product.id}`} className="btn btn-success">
                  Product Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
