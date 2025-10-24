import { Link, useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  function showProductsHandler() {
    navigate("products");
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Home</h1>
      {/* <a href="/products">list of Products</a>  this approach is not good sending Http request*/}
      <p>
        Got to <Link to="products" >Products</Link>{" "}
      </p>{" "}
      {/* this approach is good doesn`t sending Http request*/}
      <p>
        <button onClick={showProductsHandler}>show products</button>
      </p>
    </div>
  );
}

export default Home;
