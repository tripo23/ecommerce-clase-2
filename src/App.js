import './assets/styles/css/App.css';
import NavbarTropical from "./components/Navbar.js";
import ItemListContainer from "./components/ItemListContainer.js";

export const onAdd = () => {
  alert("agregado")
}
const App = () => {
  return (
    <>
      <NavbarTropical/>
      <ItemListContainer/>
    </>
  );
}

export default App;
