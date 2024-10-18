import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FlashMessage from "../components/FlashMessage";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store";

function Layout() {
  const flashMessage = useSelector((state) => state.flashMessage);
  const dispatch = useDispatch();

  const handleFlashClose = () => {
    dispatch(actions.setFlashMessage(null));
  }

  return (
    <>    <div style={{ position: "fixed", width: "100%", top: 0 }}>
      <Navbar></Navbar>
    </div>

      {flashMessage && <FlashMessage message={flashMessage} onClose={handleFlashClose} />}
      <div style={{ marginTop: "50px" }}>
        <Outlet></Outlet>
      </div>

      <footer class="py-5 bg-dark">
        <div class="container"><p class="m-0 text-center text-white">Copyright &copy; <a href="https://2023.webdev-cf2m.be/Guillaume/"><span class="G">G</span><span class="u">u</span><span class="i">i</span><span class="g">g</span><span class="l">l</span><span class="e">e</span></a> 2024</p></div>
      </footer>
    </>
  );
}

export default Layout;
