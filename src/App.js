import "./App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {
  createBrowserRouter,
  createRoutesFromElements,
  // Link,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductPage from "./Components/Products/ProductPage";
import Home from "./Components/Homepage/Home";
import CategoryPage from "./Components/Categories/CategoryPage";
import OfferPage from "./Components/Offerpage/OfferPage";
const Root = () => {
  return (
    <>
      <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Fashion Hub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/ProductPage">Products</Nav.Link>
            <Nav.Link href="/CategoryPage">Categories</Nav.Link>
            <Nav.Link href="/OfferPage">Offers</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      <Outlet/>
    </>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/"  element={<Root/>}>
        <Route  index  element={<Home/>} />
        <Route path="ProductPage"  element={<ProductPage/>} />
        <Route path="CategoryPage"  element={<CategoryPage/>} />
        <Route path="OfferPage"  element={<OfferPage/>} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider

        router={router}
      />
    </div>
  );
}

export default App;
