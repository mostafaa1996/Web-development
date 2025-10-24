import {
  createBrowserRouter,
  //createRoutesFromElements,
  RouterProvider,
  //Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/Products";
import RootLayout from "./Pages/Root";
import ErrorPage from "./components/Error";
import ProductDetails from "./Pages/ProductDetails";

// const routesDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routesDefinition);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> }, // or { index: true, element: <Home /> }
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetails /> },
    ],
  },
  //{ path: "/", element: <Home /> },
  //{ path: "/products", element: <ProductsPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
