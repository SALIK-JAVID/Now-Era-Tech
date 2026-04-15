import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const revealVariant = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const menuData = [
    { id: 1, category: "Opening Acts", title: "Citrus Cured Hokkaido Scallop", description: "Finger lime, white soy, kelp oil, micro shiso.", price: "$32" },
    { id: 2, category: "Opening Acts", title: "Burrata & Heirloom Tomato", description: "Basil oil, aged balsamic, toasted pine nut crumb.", price: "$26" },
    { id: 3, category: "Chef's Masterpiece", title: "Duck Breast à l'Orange", description: "Dry-aged duck, blood orange reduction, smoked parsnip purée, chicory.", price: "$65" },
    { id: 4, category: "The Mains", title: "Miso Glazed Black Cod", description: "Charred bok choy, dashi broth, pickled ginger root.", price: "$52" },
    { id: 5, category: "The Mains", title: "A5 Wagyu Striploin", description: "Truffle potato mille-feuille, bone marrow jus, seasonal asparagus.", price: "$90" },
    { id: 6, category: "Sweet Finales", title: "Madagascar Vanilla Bean Panna Cotta", description: "Rhubarb compote, pistachio tuile, micro mint.", price: "$18" },
    { id: 7, category: "Sweet Finales", title: "Dark Chocolate Delice", description: "70% Valrhona chocolate, sea salt caramel, espresso gelato.", price: "$22" },
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
            <section className="px-12 max-w-screen-2xl mx-auto mb-16">
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
            <section className="px-12 py-16 max-w-5xl mx-auto relative mb-32">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-outline-variant/10 hidden md:block"></div>
                
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredMenu.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="group cursor-pointer relative"
                            >
                                {/* Background hover effect */}
                                <div className="absolute -inset-6 bg-surface-container-low rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                                
                                <span className="font-label text-[10px] tracking-widest uppercase text-secondary mb-3 block">{item.category}</span>
                                <div className="flex justify-between items-start mb-4 gap-4">
                                    <h3 className="font-headline text-2xl leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
                                    <span className="font-headline text-xl text-outline shrink-0">{item.price}</span>
                                </div>
                                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                                    {item.description}
                                </p>
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
                            <img alt="Chef's Masterpiece Detail" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQqA8c3g5CjX02CrdvB8f_xO6hXw5GOfT2D7hM0Fz8r_M9g_6n7kS1vW_Ktt201aEaUaFm500XgD1sIINX5yqXfQEL5OEQ2d6tZkC3_o9Qn5T83_uA_C1-w4B5t6sW48x1H4s8tBwK_q44iM-Rz-G2QvFkRj61Y3r8iU0c6hQ7uX_Y8P1pX-5kXUoIofXk" />
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
