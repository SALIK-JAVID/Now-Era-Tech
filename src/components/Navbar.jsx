import { NavLink, Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav 
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-outline-variant/10 shadow-sm"
        >
            <div className="flex justify-between items-center px-6 lg:px-12 py-5 max-w-screen-2xl mx-auto">
                <Link to="/" className="text-2xl font-serif italic text-stone-900 group">
                    The Curated Plate
                </Link>
                <div className="hidden md:flex items-center space-x-12">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            `font-serif tracking-tight transition-all duration-300 ${isActive ? 'text-stone-900 border-b border-stone-900 pb-1' : 'text-stone-500 hover:text-stone-800'}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/menu" 
                        className={({ isActive }) => 
                            `font-serif tracking-tight transition-all duration-300 ${isActive ? 'text-stone-900 border-b border-stone-900 pb-1' : 'text-stone-500 hover:text-stone-800'}`
                        }
                    >
                        Menu
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => 
                            `font-serif tracking-tight transition-all duration-300 ${isActive ? 'text-stone-900 border-b border-stone-900 pb-1' : 'text-stone-500 hover:text-stone-800'}`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => 
                            `font-serif tracking-tight transition-all duration-300 ${isActive ? 'text-stone-900 border-b border-stone-900 pb-1' : 'text-stone-500 hover:text-stone-800'}`
                        }
                    >
                        Contact
                    </NavLink>
                </div>
                <Link to="/contact">
                    <button className="bg-primary text-on-primary px-6 lg:px-8 py-2.5 rounded-full font-serif tracking-tight transition-all hover:bg-on-surface hover:text-surface shadow-md">
                        Book a Table
                    </button>
                </Link>
            </div>
        </motion.nav>
    );
};

export default Navbar;
