import AboutUs from "./Home/About/about";
import Navigation from "./Navbar/page";
import Home_page from "./Home/Home_pg/page";
import Desktop from "./Home/faqs/page";
import BlogPage from "./Home/blogs/page";
import ClientPage from "./Home/clients/page";
import Footer from "./Home/footer/page";
import ContactUsExplore from "./Home/Home_Cta/page";




export default function Home() {
  return (
    <div>
      {/* Render the Navbar */}
      
      <Navigation />
      <Home_page/>
      <AboutUs/>
      <ClientPage/>
      <Desktop/>
      <BlogPage/>
      <>
      <ContactUsExplore />
      <Footer />

      </>
    
    </div>
  );
}