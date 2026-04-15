import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const navLinkClasses = ({ isActive }) =>
        `text-sm tracking-widest font-label uppercase hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-300 ${
            isActive
                ? "text-neutral-900 dark:text-white border-b border-neutral-400 pb-1"
                : "text-neutral-500 dark:text-neutral-400"
        }`;

    return (
        <nav className="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-xl shadow-sm dark:shadow-none">
            <div className="flex justify-between items-center px-6 md:px-12 py-6 w-full max-w-screen-2xl mx-auto">
                <Link to="/" className="text-2xl font-headline tracking-tighter text-neutral-800 dark:text-neutral-100">
                    The Curated Plate
                </Link>
                <div className="hidden md:flex items-center space-x-12">
                    <NavLink to="/menu" className={navLinkClasses}>Menu</NavLink>
                    <NavLink to="/about" className={navLinkClasses}>The Story</NavLink>
                    <NavLink to="/contact" className={navLinkClasses}>Reservations</NavLink>
                    <a className="text-sm tracking-widest font-label uppercase text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-300 cursor-pointer">Press</a>
                </div>
                <Link to="/contact" className="bg-primary text-on-primary px-8 py-3 rounded-full text-xs font-label uppercase tracking-widest hover:scale-[1.02] transition-transform duration-300">
                    Book a Table
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
