import "./App.css";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import ServiceProvide from "./component/ServiceProvide";
import ServiceProvider from "./component/ServiceProvider";
import ServiceProducts from "./component/Serviceproducts";
import Category from "./component/Category";
import Sticky from "./component/Sticky";
import AllServices from "./component/AllServices";
import Floater from "./component/Floater";
function App() {
  return (
    <div className="bg-[#f4feff]">
      <Header />
      <Sticky />
      <Banner />
      <AllServices/>
      <Category />
      <ServiceProducts />
      <ServiceProvider />
      <ServiceProvide />
      <Footer />
      <Floater/>
    </div>
  );
}

export default App;
