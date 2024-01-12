import React from "react";
import Layout from "../components/layout/Layout";
import { useSearch } from "../contextapi/Search";
import { BaseUrl } from "../services/helper";
import { useCart } from "../contextapi/cart";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [values, setValues] = useSearch();
  const [cart, setCart] = useCart([]);
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Resuts</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2" key={p._id} style={{ width: "18rem" }}>
                <img
                  src={`${BaseUrl}/api/v1/product/product-photo/${p?._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="card-name-price d-flex justify-content-between">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price text-success fw-bold">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h5>
                  </div>
                  <p className="text-start">
                    {p.description.substring(0, 45)}...
                  </p>
                  <div className="card-name-price d-flex justify-content-between">
                    <button
                      className="btn btn-info ms-1 fw-bold text-capitalize"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button
                      className="btn btn-dark ms-1 text-capitalize"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
