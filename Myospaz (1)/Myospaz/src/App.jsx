
// import { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Header from './components/Header';
// import Home from './components/Home';
// import About from './components/About';
// // import Products from './components/Products'
// import Services from './components/Services';
// import Services2 from './components/Services2';
// import Testimonials from './components/Testimonials';
// import Client from './components/Client';
// import Team from './components/Team';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import ProductDetail from './components/ProductDetail';
// import ProductsPage from './components/Products';
// import ScrollToTop from './components/ScrollToTop'; 
// import ApplicationService from './pages/ApplicationService'
// import ProductEngineering from './pages/ProductEngineering';
// import BusinessServices from './pages/BusinessServices';
// import SeoServices from './pages/SeoServices';
// import Uiux from './pages/UiuxDesign';
// import PaymentGatewyay from './pages/PaymentGateway';
// import BoardbandService from './pages/BoardbandsServices';
// import Healthcare from './pages/HealthCare';
// import Education from './pages/Education';
// import Travel from './pages/Travel'
// import Retail from './pages/Retail'
// import Manufacturing from'./pages/Manufacturing'
// import Tattoo from './pages/Tattoo';
// import Internship from './pages/Internship'
// import VideoData from './pages/Videodata';
// import Bulksms from './pages/Bulksms';
// import EmailMarketing from './pages/EmailMarketing';
// import ContenWriting from './pages/ContentWriting';
// import Sitemap from './pages/SiteMap';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import Deodesk from './pages/Ceodesk';
// import Ceodesk from './pages/Ceodesk';
// import UserAgreement from './pages/UserAgreement';
// import WeAreHiring from './pages/WeareHiring';
// import LifeAtMyospaz from './pages/LifeAtMyospaz';
// import Highlight from './pages/Highlights';


// //admin
// import SignIn from './Admin/SignIn'
// import DefaultLayout from './components/dashboard/DefaultLayout';
// import ECommerce from './components/dashboard/Ecommerce';
// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-in-out',
//       once: true,
//       mirror: false
//     });
//   }, []);

//     const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);


//   const hiddenHeaderRoutes = [
//   "/signin",
//   "/dashboard",

// ];

//   const shouldHideHeader = hiddenHeaderRoutes.some((route) =>
//     pathname.startsWith(route)
//   );

//   return (
//       <>
//       {!shouldHideHeader && <Header />}
//     <Router>
//       <div className="App">
//         <Header />
//         <ScrollToTop />
//         <main className="main">
//           <Routes>
//             <Route path="/" element={
//               <>
//                 <Home />
//                 {/* <About /> */}
//                 {/* <Products /> */}
//                 <Services />
//                 <Services2 />
//                 <VideoData/>
//                 <Highlight/>
//                 <Testimonials />
//                 <Client />
                
//                 <Contact />
//               </>
//             } />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services2 />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/client" element={<Client />} />
//             <Route path="/product" element={<ProductsPage />} />
//             <Route path="/products/:category/:id" element={<ProductDetail />} />
//             <Route path="/internship" element={<Internship/>}/>
//             <Route path="/highlight" element={<Highlight/>}/>

//             <Route path="/services/applicationservices" element={< ApplicationService/>}/>
//             <Route path ="/services/productengineering" element={< ProductEngineering/>}/>
//             <Route path="/services/businessservices" element={<BusinessServices/>}/>
//             <Route path="/services/seoservices" element={< SeoServices/>}/>
//             <Route path="/services/uiux" element={< Uiux/>}/>
//             <Route path="/services/paymentgateway" element={<PaymentGatewyay/>}/>

//             <Route path="/industries/broadband" element={<BoardbandService />}/>
//             <Route path="/industries/healthcare" element={<Healthcare/>}/>
//             <Route path="/industries/education" element={<Education/>}/>
//             <Route path="/industries/travel" element={<Travel/>}/>
//             <Route path="/industries/retail" element={<Retail/>}/>
//             <Route path="/industries/manufacturing" element={<Manufacturing/>}/>
//             <Route path="/industries/tattoo" element={<Tattoo/>}/>
        

//             {/* footer */}
//             <Route path="/bulksms" element={<Bulksms/>}/> 
//             <Route path="/emailmarketing" element={<EmailMarketing/>}/> 
//             <Route path="/contentwriting" element={<ContenWriting/>}/>
//             <Route path="/sitemap" element={<Sitemap/>}/>
//             <Route path="/privacy" element={< PrivacyPolicy/>}/>
//             <Route path="/ceodesk" element={<Ceodesk/>}/>
//             <Route path="/useragreement" element={<UserAgreement/>}/>
//             <Route path="/wearehiring" element={<WeAreHiring/>}/>
//             <Route path="/lifeatmyospaz" element={< LifeAtMyospaz/>}/>

//    <Route
//           path="/dashboard"
//           element={
//             <DefaultLayout>
//               <ECommerce />
//             </DefaultLayout>
//           }
//         />
//           </Routes>
//           <Footer />
//         </main>
//       </div>
//     </Router>

//       {!shouldHideHeader && <Footer />}
//     </>
//   );
// }

// export default App;











import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.css"

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Services2 from './components/Services2';
import Testimonials from './components/Testimonials';
import Client from './components/Client';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import ProductsPage from './components/Products';
import ScrollToTop from './components/ScrollToTop'; 
import ApplicationService from './pages/ApplicationService';
import ProductEngineering from './pages/ProductEngineering';
import BusinessServices from './pages/BusinessServices';
import SeoServices from './pages/SeoServices';
import Uiux from './pages/UiuxDesign';
import PaymentGatewyay from './pages/PaymentGateway';
import BoardbandService from './pages/BoardbandsServices';
import Healthcare from './pages/HealthCare';
import Education from './pages/Education';
import Travel from './pages/Travel';
import Retail from './pages/Retail';
import Manufacturing from './pages/Manufacturing';
import Tattoo from './pages/Tattoo';
import Internship from './pages/Internship';
import VideoData from './pages/Videodata';
import Bulksms from './pages/Bulksms';
import EmailMarketing from './pages/EmailMarketing';
import ContenWriting from './pages/ContentWriting';
import Sitemap from './pages/SiteMap';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Ceodesk from './pages/Ceodesk';
import UserAgreement from './pages/UserAgreement';
import WeAreHiring from './pages/WeareHiring';
import LifeAtMyospaz from './pages/LifeAtMyospaz';
import Highlight from './pages/Highlights';
import MobileApplication from './pages/MobileApplication';
import Ecommers1 from './pages/Ecommers1';
// import ErpPage from './pages/ErpPage';





// Admin
import SignIn from './Admin/SignIn';
import DefaultLayout from './components/dashboard/DefaultLayout';
import ECommerce from './components/dashboard/Ecommerce';
import JobsPage from './Admin/JobsPage';
import InternshipApplications from './Admin/InternshipApplications';
import ErpPage  from './pages/ErpPage';
import AdminGallery  from './Admin/AdminGallery';





function AppWrapper() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const hiddenAdminRoutes = ["/signin", "/dashboard", "/jobspage", "/applications", "/gallery"];
const shouldHideHeader = hiddenAdminRoutes.some((route) => pathname.startsWith(route));


  return (
    <>
       {!shouldHideHeader && <Header />}

      <ScrollToTop />

      <main className="main">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Services />
               <VideoData />
              <Services2 />
              <Highlight />
              <Testimonials />
              {/* <Client /> */}
              <Contact />
            </>
          }/>

          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services2 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/client" element={<Client />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/products/:category/:id" element={<ProductDetail />} />

          <Route path="/internship" element={<Internship />} />
          <Route path="/highlight" element={<Highlight />} />

          <Route path="/services/applicationservices" element={<ApplicationService />} />
          <Route path="/services/productengineering" element={<ProductEngineering />} />
          <Route path="/services/businessservices" element={<BusinessServices />} />
          <Route path="/services/seoservices" element={<SeoServices />} />
          <Route path="/services/uiux" element={<Uiux />} />
          <Route path="/services/paymentgateway" element={<PaymentGatewyay />} />

          <Route path="/industries/broadband" element={<BoardbandService />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/travel" element={<Travel />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/tattoo" element={<Tattoo />} />

         <Route path="/mobileapplication" element={<MobileApplication />} />
        <Route path="/ecommers1" element={<Ecommers1/>} />
        <Route path="/erppage" element={<ErpPage/>} />
       
         
         
          

          {/* Footer Pages */}
          <Route path="/bulksms" element={<Bulksms />} /> 
          <Route path="/emailmarketing" element={<EmailMarketing />} /> 
          <Route path="/contentwriting" element={<ContenWriting />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/ceodesk" element={<Ceodesk />} />
          <Route path="/useragreement" element={<UserAgreement />} />
          <Route path="/wearehiring" element={<WeAreHiring />} />
          <Route path="/lifeatmyospaz" element={<LifeAtMyospaz />} />

          {/* Admin Routes */}
           <Route path="/signin" element={<SignIn />} />
            
          <Route path="/dashboard" element={
            <DefaultLayout>     
              <ECommerce />
            </DefaultLayout>
          }/>
            <Route path="/jobspage" element={
            <DefaultLayout>
              <JobsPage />
            </DefaultLayout>
          }/>

          <Route path="/applications" element={
  <DefaultLayout>
    <InternshipApplications />
  </DefaultLayout>
  
}/>
        <Route path="/gallery" element={
  <DefaultLayout>
    < AdminGallery/>
  </DefaultLayout>
  
}/>



        </Routes>

       
      </main>
      {!shouldHideHeader && <Footer />}
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
