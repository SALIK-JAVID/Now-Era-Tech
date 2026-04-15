import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    const location = useLocation();
    
    return (
        <div className="bg-background text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container min-h-screen flex flex-col relative overflow-x-hidden">
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.main 
                    key={location.pathname}
                    initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    exit={{ opacity: 0, filter: "blur(8px)", y: -20 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-grow pt-32"
                >
                    <Outlet />
                </motion.main>
            </AnimatePresence>
            <Footer />
        </div>
    );
};

export default Layout;
