import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* Include the Header component at the top of the app */}
      <Header />
      
      {/* Create the main content area, centering its content horizontally and vertically */}
      <main className="flex justify-center items-center main-wrap">
        {/* Render the content determined by the current route */}
        <Outlet />
      </main>
      
      {/* Include the Footer component at the bottom of the app */}
      <Footer />
    </>
  );
}

export default App;
