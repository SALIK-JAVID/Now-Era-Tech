import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full border-t border-neutral-100 dark:border-neutral-800 bg-stone-50 dark:bg-stone-950 mt-auto">
            <div className="flex flex-col md:flex-row justify-between items-center px-12 py-20 w-full max-w-screen-2xl mx-auto">
                <div className="mb-12 md:mb-0 text-center md:text-left">
                    <span className="text-lg font-headline italic text-neutral-800 dark:text-neutral-200 block mb-4">The Curated Plate</span>
                    <p className="text-xs font-body tracking-tight text-neutral-600 dark:text-neutral-400">© 2024 The Curated Plate. All rights reserved.</p>
                </div>
                <div className="flex space-x-12">
                    <div className="flex flex-col space-y-4">
                        <span className="text-sm font-headline text-neutral-900 dark:text-white mb-2">Connect</span>
                        <a className="text-xs font-body text-neutral-500 dark:text-neutral-400 hover:underline underline-offset-4 decoration-neutral-300 cursor-pointer">Instagram</a>
                        <a className="text-xs font-body text-neutral-500 dark:text-neutral-400 hover:underline underline-offset-4 decoration-neutral-300 cursor-pointer">Journal</a>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <span className="text-sm font-headline text-neutral-900 dark:text-white mb-2">Legal</span>
                        <a className="text-xs font-body text-neutral-500 dark:text-neutral-400 hover:underline underline-offset-4 decoration-neutral-300 cursor-pointer">Privacy Policy</a>
                        <a className="text-xs font-body text-neutral-500 dark:text-neutral-400 hover:underline underline-offset-4 decoration-neutral-300 cursor-pointer">Accessibility</a>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <span className="text-sm font-headline text-neutral-900 dark:text-white mb-2">Join Us</span>
                        <Link to="/contact" className="text-xs font-body text-neutral-500 dark:text-neutral-400 hover:underline underline-offset-4 decoration-neutral-300">Contact</Link>
                        <a className="text-xs font-body text-neutral-500 dark:text-neutral-400 hover:underline underline-offset-4 decoration-neutral-300 cursor-pointer">Careers</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
