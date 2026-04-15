import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const revealVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const menuData = [
    { id: 1, category: "Opening Acts", title: "Citrus Cured Hokkaido Scallop", description: "Finger lime, white soy, kelp oil, micro shiso.", price: "$32", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWKH-1IePSH9j37tnTe1AtK4a1gcpjL1ntaH6i-TPlkcytdh-ZZDXPihVd0oTmK-WcYNbDxgJm4NaYeFjLwUq19RMz7ElCuZyrsztppWQo3G0WteqCildFV3HVcVHKtViPCWIMytQCMiX1dLULQpX22e7wcyz9l-aDBEbTZJwweizKbRVYyP_RxveycQ3QE0Wdulb1LrBq7tJRbdNJSbJPVEjN8E7K4QpGkmQlPIMQOz0MhAL2bOr-zDym37-aW9aVsJ2veXfteG0" },
    { id: 2, category: "Opening Acts", title: "Burrata & Heirloom Tomato", description: "Basil oil, aged balsamic, toasted pine nut crumb.", price: "$26", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiNQJkyoQFBNKGXVXAC0xGlxX2_QRu0Gkm0CGewwUWISWsb5C0wfbAFbpYQT9Vx_pZrswCtiGQdLU4EiwaswqULcMu8b2JUaIusDe1EiufIUYbhUt5jyuB20A_NMELp8oArrTxEHDTtA1zg8NtH8stYXdN6XzYutKCabdZSMSOd_9UHRuPz5bKQJu3Dg41MeFhGCiH1e0fEGftIZPSngLqcW6BMOx8FmzlvaRmavkk_7hMzdUBuBI2KFuiBpp-A-FFBPNxUt6_Eyk" },
    { id: 3, category: "Chef's Masterpiece", title: "Duck Breast à l'Orange", description: "Dry-aged duck, blood orange reduction, smoked parsnip purée, chicory.", price: "$65", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt0fI6LCVtlGbfql5TbVScgcUN3huLs27d_8dbrx2lYqUJH6HhvKemiKalPxt9PTXd5DORJiSP9sEJtTLmjYOxhCb48dYrg9AE_glHymr_VNtayn4DPB92UU8TaBZbJMjvm6dcjasTW8BDuUQ50sFT4mLjR2Gt41ADqMZmf6Fn4SexghG7PWTwrGufEDe6cFoX8n4GM5yWmpdp5as44DcjEFLXDUEOjAvYrbp540J7sSrVsg4zeP5mfa_ZHpeLXqhPYlXV__fqCFc" },
    { id: 4, category: "The Mains", title: "Miso Glazed Black Cod", description: "Charred bok choy, dashi broth, pickled ginger root.", price: "$52", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTUVTQUUukA_odg-G6212R-t9wGpYt-3j99RkmX6IYSyGrhU5VS6lcoR2g_Tg4VUJLE_gLF1PQQmyUsf1jwkQ_IjZviGGGGq6CHoVWOA9Ev_7jFK7sez4-HtwVOhlKKQuDPHSqN1NGBdAkVCrPxP7FcP0lxWXPgB4ZelKTaq0Fk2DXsPPcUPB223TkIHGJQLiSAxrNNrG00mugfsWS5V7G9mqf0N_nEOSJ9ibbUg230os1VHGgCE1W7dLEADB-vqiDlFCbk9k7OyE" },
    { id: 5, category: "The Mains", title: "A5 Wagyu Striploin", description: "Truffle potato mille-feuille, bone marrow jus, seasonal asparagus.", price: "$90", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh54WLgHWCyKKRR-1OXWtCzhCC6UVujg8fSZl6sPBfsJ1ne9oHF6sg_gQtqxCpGQ2bDZq-DqwycFnESFvr4nJt8l9FqGLbat8LHZ_mwrMjwS_fxaYw8SAyFD_dB2CmWJtrJTZyy0ZiKu80X0oENKWMsthbwUr0I0VeZJCFs_x_upaj_6N56NirzAjd7pPAQu44bWsQ7GdOfBb4NsFDM_M4crbRx-_RzmODIV_sTqX0b7C4ZIeRpW-QJ-F0mD-_yuk2FNQWzbEGAEY" },
    { id: 6, category: "Sweet Finales", title: "Madagascar Vanilla Bean Panna Cotta", description: "Rhubarb compote, pistachio tuile, micro mint.", price: "$18", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAg9NTNSueIlZGBddQUZPyDHzN68xQr8XwuV7wPaf7gAAIuXGE-NY8Ob1j1fAtmDFdfFsmz5nK1rMs2RSOPuXrP4DCO8oMivuQlyjx2Q958AuWOCmGBl2RdHnTjLEiYGSZUJdFtBjeGXUg6Jzpwr9EagFzucanW_Utpsg6D_uQa8CkddVK0u0GNFdCCZHbvZ7WtUt6cNs_9UHAOU4_jnPHRGv1V1kIa70mcSLkTeU9ZNfE85YP5dGWWfdwtEg89Od_dZijQ1ZAc4cw" },
    { id: 7, category: "Sweet Finales", title: "Dark Chocolate Delice", description: "70% Valrhona chocolate, sea salt caramel, espresso gelato.", price: "$22", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1600&auto=format&fit=crop" },
];

const categories = ["All", "Opening Acts", "Chef's Masterpiece", "The Mains", "Sweet Finales"];

const EditorialMenu = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredMenu = menuData.filter(item => 
        activeFilter === "All" ? true : item.category === activeFilter
    );

    return (
        <div className="w-full">
            {/* Minimalist Hero */}
            <section className="pt-32 pb-24 px-12 max-w-screen-2xl mx-auto text-center">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                    <motion.span variants={revealVariant} className="font-label text-xs tracking-[0.3em] uppercase text-outline mb-6 block">Carte du Jour</motion.span>
                    <motion.h1 variants={revealVariant} className="font-headline text-6xl md:text-8xl leading-[1.1] mb-8">
                        The <span className="italic text-secondary">Editorial</span> Menu
                    </motion.h1>
                    <motion.p variants={revealVariant} className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto font-light">
                        A curated selection of our finest seasonal offerings. Hover over our masterpiece for a closer look.
                    </motion.p>
                </motion.div>
            </section>

            {/* Menu Filters */}
            <section className="px-12 max-w-screen-2xl mx-auto mb-20">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-6 py-2 rounded-full font-label text-xs tracking-[0.1em] uppercase transition-all duration-300 border ${
                                activeFilter === category 
                                ? 'bg-primary text-on-primary border-primary shadow-md scale-105' 
                                : 'bg-transparent text-outline border-outline-variant/30 hover:border-primary hover:text-primary'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Dynamic Menu Grid */}
            <section className="px-12 py-12 max-w-6xl mx-auto relative mb-32">
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
                >
                    <AnimatePresence>
                        {filteredMenu.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="group cursor-pointer flex gap-8 items-center p-4 -m-4 hover:bg-surface-container-low rounded-2xl transition-colors duration-300"
                            >
                                {/* Thumbnail Image */}
                                <div className="w-28 h-28 shrink-0 rounded-full overflow-hidden shadow-md hidden sm:block border-[3px] border-surface">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                
                                <div className="flex-1">
                                    <span className="font-label text-[10px] tracking-widest uppercase text-secondary mb-2 block">{item.category}</span>
                                    <div className="flex justify-between items-baseline mb-3 gap-4">
                                        <h3 className="font-headline text-2xl leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
                                        <div className="flex-grow border-b border-dotted border-outline-variant/30 mx-2 mb-1 hidden lg:block"></div>
                                        <span className="font-headline text-xl text-outline shrink-0">{item.price}</span>
                                    </div>
                                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                
                {filteredMenu.length === 0 && (
                    <p className="text-center text-outline w-full py-12">No menu items found.</p>
                )}
            </section>

            {/* Chef's Masterpiece - Sticky Image Scroll */}
            <section className="bg-surface-container-low border-y border-outline-variant/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 px-12 max-w-screen-2xl mx-auto py-32 gap-24">
                    <motion.div className="flex flex-col justify-center gap-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <motion.h2 variants={revealVariant} className="font-headline text-5xl">The Signature Plating</motion.h2>
                        <motion.p variants={revealVariant} className="font-body text-lg text-on-surface-variant leading-relaxed">
                            Each dish is more than a sum of its ingredients. Notice the negative space, the bold colors contrasting against the minimalist ceramic canvas. We eat with our eyes first, and our kitchen treats plating as a sacred architecture.
                        </motion.p>
                        <motion.div variants={revealVariant}>
                            <button className="font-headline italic text-lg text-primary underline underline-offset-8 decoration-primary/30 hover:decoration-primary transition-all">Discover our philosophy</button>
                        </motion.div>
                    </motion.div>
                    <motion.div className="relative group" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
                        <div className="aspect-[4/5] rounded-xl overflow-hidden editorial-shadow">
                            <img alt="Chef's Masterpiece Detail" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1600&auto=format&fit=crop" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <span className="font-label text-[10px] tracking-[0.2em] uppercase text-white">Examine</span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default EditorialMenu;
