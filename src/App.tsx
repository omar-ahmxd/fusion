import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import PrintingServices from './pages/PrintingServices';
import DesignServices from './pages/DesignServices';
import About from './pages/About';
import Contact from './pages/Contact';

// import { SupabaseAuthProvider } from './contexts/AuthContext';
// import AdminLogin from './pages/AdminLogin';
// import AdminDashboard from './pages/AdminDashboard';
// import AdminContacts from './pages/AdminContacts';
// import AdminQuotes from './pages/AdminQuotes';
// import AdminLayout from './components/AdminLayout';
// import ProtectedRoute from './components/ProtectedRoute';

function AppContent() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100,
    });
  }, []);

  // if (isAdminRoute) {
  //   return (
  //     <Routes>
  //       <Route path="/admin/login" element={<AdminLogin />} />
  //       <Route
  //         path="/admin"
  //         element={
  //           <ProtectedRoute>
  //             <AdminLayout />
  //           </ProtectedRoute>
  //         }
  //       >
  //         <Route path="dashboard" element={<AdminDashboard />} />
  //         <Route path="contacts" element={<AdminContacts />} />
  //         <Route path="quotes" element={<AdminQuotes />} />
  //         <Route index element={<AdminDashboard />} />
  //       </Route>
  //     </Routes>
  //   );
  // }

  return (
    <>
      <Preloader />
      <ScrollToTop />
      <div className="min-h-screen bg-dark-base">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/printing" element={<PrintingServices />} />
            <Route path="/services/design" element={<DesignServices />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      {/* <SupabaseAuthProvider> */}
        <AppContent />
      {/* </SupabaseAuthProvider> */}
    </Router>
  );
}

export default App;