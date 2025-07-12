import './index.css';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App w-full min-h-screen">
      <Header />
      <main>
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{
          fontSize: '14px',
        }}
      />
    </div>
  );
}

export default App;
