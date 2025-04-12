import AboutUs from "./pages/AboutUs";
import ContactUS from "./pages/ContactUS";
import Home from "./pages/home";
import ProductCat from "./pages/productCat";
import ProductShow from "./pages/productShow";
import Project from "./pages/project";
import ProjectList from "./pages/ProjectList";


let routes=[
    {path : '/' , element : <Home />},
    {path : '/productCat' , element : <ProductCat />},
    {path : '/aboutUs' , element : <AboutUs />},
    {path : '/contactUs' , element : <ContactUS />},
    {path : '/projectList' , element : <ProjectList />},
    {path : '/project/:projectId' , element : <Project />},
    {path : '/product/:productId' , element : <ProductShow />},

]

export default routes