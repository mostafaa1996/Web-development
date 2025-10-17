import Cart from "./components/cart.jsx";
import Header from "./components/Header.jsx";

const item = {
  Name : "Mac & Cheese",
  Price : "8.99",
  Description : "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
  Image : "logo.jpg"
}
function App() {
  return (
    <>
     <div className="flex flex-col gap-2 w-full">
        <Header  CartCount={2} TextOfLogo={"ReactFood"} ImageOfLogo={"logo.jpg"}/>
        <Cart item = {item} />
     </div>
      
    </>
  );
}

export default App;
