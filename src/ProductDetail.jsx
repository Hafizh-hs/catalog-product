import { useParams } from "react-router-dom";
import products from "./data/products.json";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <img src={product.thumbnail} className="w-100" />
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between align-items-center">
            <h1>{product.title}</h1>
            <p className="fw-bold">
              Rating :{" "}
              <span className="badge bg-warning text-dark">
                {product.rating}
              </span>
            </p>
          </div>
          <p className="text-muted fs-6">
            Brand : {product.brand} ({product.category})
          </p>

          <p>{product.description}</p>
          <p>
            Stock :{" "}
            <span className="fw-bold text-success">{product.stock}</span>
          </p>
          <p className="d-flex justify-content-end align-items-center">
            <span className="fs-5 text-decoration-line-through me-2">
              $ {product.price}
            </span>
            <span className="fs-1 fw-bold text-danger">
              ${" "}
              {(product.price * (1 - product.discountPercentage / 100)).toFixed(
                2
              )}
            </span>
          </p>
        </div>
      </div>
      <div className="row pt-3 g-3">
        {product.images.map((image, index) => (
          <div className="col-md-3" key={index}>
            <img src={image} alt="" className="img-thumbnail w-100" />
          </div>
        ))}
      </div>
    </>
  );
}
