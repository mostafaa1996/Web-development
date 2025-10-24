import { useParams } from "react-router-dom";

function RootLayout() {
  const params = useParams();

  return (
    <>
      <main>
        <h2>Product Details</h2>
        <p>{params.productId}</p>
      </main>
    </>
  );
}

export default RootLayout;
