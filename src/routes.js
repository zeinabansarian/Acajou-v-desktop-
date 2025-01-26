import AboutUs from "./pages/AboutUs";
import ContactUS from "./pages/ContactUS";
import Home from "./pages/home";
import ProductCat from "./pages/productCat";
import ProjectList from "./pages/ProjectList";

let routes=[
    {path : '/' , element : <Home />},
    {path : '/productCat' , element : <ProductCat />},
    {path : '/aboutUs' , element : <AboutUs />},
    {path : '/contactUs' , element : <ContactUS />},
    {path : '/projectList' , element : <ProjectList />},

]

export default routes