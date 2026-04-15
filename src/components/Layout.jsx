import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="bg-background text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
