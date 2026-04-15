import { motion, useScroll, useTransform } from 'framer-motion';

const revealVariant = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const About = () => {
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 1000], [0, 200]);

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="max-w-screen-2xl mx-auto px-12 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <motion.div 
                        className="lg:col-span-7"
                        initial="hidden" animate="visible" variants={revealVariant}
                    >
                        <span className="font-label text-xs tracking-[0.2em] uppercase text-outline mb-6 block">Est. 2014</span>
                        <h1 className="font-headline text-5xl md:text-8xl leading-[1.05] text-on-surface mb-10 tracking-tight">
                            Where <span className="italic font-light">Gastronomy</span> meets the Art of <span className="italic font-light">Patience.</span>
                        </h1>
                        <p className="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed mb-12">
                            We believe that a plate is more than a vessel; it is a narrative of the season, the soil, and the skilled hands that nurture the earth. Our journey began with a simple question: How can we elevate nature's raw purity into an unforgettable sensory experience?
                        </p>
                    </motion.div>
                    <motion.div 
                        className="lg:col-span-5 relative overflow-hidden rounded-xl shadow-2xl"
                        initial="hidden" animate="visible" variants={revealVariant} transition={{ delay: 0.2 }}
                    >
                        <div className="aspect-[4/5] relative z-10 w-full h-full pb-[125%]">
                            <motion.img 
                                style={{ y: yHero, scale: 1.25 }}
                                alt="Minimalist gourmet plating" 
                                className="absolute top-0 left-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6rHB2QxU-kjqQF6h4Louug9ieP47IoY695qt_4jWIe3C1WY0XL_KZLHIUtRJyAkDqATW6l6GOf-pHG6vf_lIFHCnwFQNn8yUAs7gupiIKHbKurygvmhm3FRr3LsEwrfH4exSbBLxAw9d6w5yqIo1vOV3gP17k8iYP4hZN2qvs5Frxj0Qq9IpCCXMVdHeKaHvLupSl5CHq3apgG4jlMTDW0vhpTTVRDw4qPg9g0QKUPbJH8GTXow24rintKzzY_1cJlYGiohUeXPs" 
                            />
                        </div>
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary-container rounded-xl -z-10 hidden lg:block opacity-50"></div>
                    </motion.div>
                </div>
            </section>

            {/* Our Story */}
            <section className="bg-surface-container-low py-32">
                <div className="max-w-screen-2xl mx-auto px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                        <motion.div 
                            className="space-y-16"
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}
                        >
                            <div className="aspect-square rounded-xl overflow-hidden shadow-lg group">
                                <img alt="Chef preparing detailed dish" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6bMoDuFsKY5MGxZJYgsJG8cOH0mgaNHc0_V6AHkK6rimSf2FPMeIh6eHUNGoKLlClQ3E_H-qn4BQJhMlf7J8bPALS93h-L1wRCg8JoKVD5B70F5zzOCkYs0qQgyc_Ec-x9Pt39dy67XUkjZW5toL_uzpo-i3SV2HWrx-_OHsIaqVgmfvMcdVICisii4_aUmjWcDhwOinN_v2IszdzkwYWhcaAj6G9mTo3JZQELsPdF74wZO5yYuNJ1uduPYIKJlsc2nIRooJwxZg" />
                            </div>
                            <div className="p-12 bg-white/50 backdrop-blur-sm rounded-xl border border-stone-200/20">
                                <h3 className="font-headline text-3xl mb-6">Our Mission</h3>
                                <p className="font-body text-on-surface-variant leading-relaxed">
                                    To redefine dining through conscious sourcing and meticulous execution. We bridge the gap between the rural harvest and the urban table, ensuring every ingredient's integrity is preserved and celebrated.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div 
                            className="lg:pt-24"
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant} transition={{ delay: 0.2 }}
                        >
                            <h2 className="font-headline text-5xl mb-8 editorial-underline decoration-outline-variant">The Philosophy of Sourcing</h2>
                            <div className="space-y-8 font-body text-on-surface-variant leading-relaxed text-lg">
                                <p>
                                    Every morning, before the city stirs, our team visits the local coastal foragers and mountain farmers. This isn't just about freshness; it's about a deep respect for the ecosystem. 
                                </p>
                                <p>
                                    At The Curated Plate, we operate on a "zero-compromise" framework. If the heirloom tomatoes aren't at their peak, they don't enter our kitchen. If the catch of the day doesn't meet our standards for sustainable fishing, our menu evolves to reflect what the sea provides.
                                </p>
                                <div className="pt-8 border-t border-outline-variant/20">
                                    <blockquote className="font-headline italic text-2xl text-on-surface">
                                        "A chef is only as good as the trust they build with the land."
                                    </blockquote>
                                    <cite className="block mt-4 font-label text-[10px] uppercase tracking-widest text-outline">— Executive Chef, Julian Vance</cite>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-32 bg-surface">
                <div className="max-w-screen-2xl mx-auto px-12">
                    <motion.div 
                        className="text-center mb-24"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}
                    >
                        <span className="font-label text-xs tracking-[0.3em] uppercase text-secondary mb-4 block">The Distinction</span>
                        <h2 className="font-headline text-4xl md:text-5xl">Why The Curated Plate</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <motion.div className="group text-center px-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant} transition={{ delay: 0.1 }}>
                            <div className="mb-8 flex justify-center">
                                <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-stone-700 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
                                    <span className="material-symbols-outlined text-3xl">restaurant</span>
                                </div>
                            </div>
                            <h4 className="font-headline text-xl mb-4">Precision Plating</h4>
                            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                                Every dish is composed with the precision of a master artisan, balancing color, texture, and negative space.
                            </p>
                        </motion.div>
                        <motion.div className="group text-center px-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant} transition={{ delay: 0.2 }}>
                            <div className="mb-8 flex justify-center">
                                <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-stone-700 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
                                    <span className="material-symbols-outlined text-3xl">eco</span>
                                </div>
                            </div>
                            <h4 className="font-headline text-xl mb-4">Hyper-Local Sourcing</h4>
                            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                                90% of our ingredients are sourced within a 50-mile radius, supporting local biodiversity and small-scale producers.
                            </p>
                        </motion.div>
                        <motion.div className="group text-center px-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant} transition={{ delay: 0.3 }}>
                            <div className="mb-8 flex justify-center">
                                <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-stone-700 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
                                    <span className="material-symbols-outlined text-3xl">wine_bar</span>
                                </div>
                            </div>
                            <h4 className="font-headline text-xl mb-4">Sommelier Selection</h4>
                            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                                A curated cellar of rare vintages and biodynamic wines, specifically chosen to complement our seasonal tasting menus.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Chef's Note */}
            <section className="max-w-4xl mx-auto px-12 mb-32">
                <motion.div 
                    className="bg-stone-900 p-16 rounded-xl shadow-2xl relative overflow-hidden"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-stone-800 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-20"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-[1px] bg-stone-400"></div>
                            <span className="font-label text-xs uppercase tracking-widest text-stone-400">Chef's Note</span>
                        </div>
                        <h3 className="font-headline text-3xl md:text-4xl mb-8 text-white italic leading-tight">"Our kitchen is a quiet laboratory where nature's chaos is organized into clarity."</h3>
                        <p className="font-body text-stone-300 leading-relaxed mb-0 text-lg opacity-80">
                            We invite you to dine not just to eat, but to experience a moment of profound presence. In a world that moves too fast, we provide the luxury of time. Each course is a meditative step through the seasons.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Imagery Grid */}
            <section className="max-w-screen-2xl mx-auto px-12 pb-32">
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[800px]"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}
                >
                    <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden group">
                        <img alt="Restaurant interior ambiance" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa52rMDFqJP4WXBix5F1A78rsQJSNWlAnMsInCyfHAUx_kUhkA_UCElmxzRErw3BXdwI_IBzcFBUa-jOvGQMpG2RZTFF8YaSgMsDsaBGdo3PU_XurdYemcR7Acd_0xpJO4PuDrZE_wbS0y0XJYV-bgE8fp6nsfT2IhSYNKZesBzsXeBxHTgBgK47ljwZzkqSkK2l_ASnQkzn7zwh_8Y2NzgGQhk2zQ8arJMXPE74g4nsPjyUDRlBSqjT5tGfJ0XZdZ4chUaK_Kgqo" />
                    </div>
                    <div className="md:col-span-1 rounded-xl overflow-hidden group">
                        <img alt="Fresh root vegetables" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4iwdMqJbwYI-_dUTQgRzjoy5JRDNl_gasjUyeAvf4-bIvJbuphaiRhrF2sZLFPqn-jskwvKhF4lv4vYV9ajcy9g0IW4-NrAh8wRjtz7uRJOADrcc1xMKKE-LRCNBJih5yFDBGi22mvDXRp6sxsV38bqWvCN-F0UlfmOZm1JJruk6l0X0ixEKee9y8e1kAIfgjisti6RFVgQCieyWnhlNpFmk_NAqKwAspOvzS30cSmPTUpAR2Skq_PAxu1wtrbtx36umNRjWUq3w" />
                    </div>
                    <div className="md:col-span-1 rounded-xl overflow-hidden group">
                        <img alt="Craft cocktail pouring" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfRW07mWxe08wGubjXNzpjOoNUJ5IE_y2-mSkOKaFXVhcECeXy9ZPBrEGImmoTUB41lg0KQDqm7eSOGiYA1zQmMougUBo4Vnp5rXfE29vi7YpBCua0X9YNmAvxUOsDOiBHzLJqz6JDmj8D2ROUQcy-xIVno3lEjQ4rU1F6U0rkvAwll9XXjss2g98NwbO3Muqdl5yqJUc2QCwK9MW4MNvZ-GRGuWI2BBneKQNmSR6YbIEeKYEFhSsClpfLd1Q6wN87Uqr6yJ7ot-s" />
                    </div>
                    <div className="md:col-span-2 rounded-xl overflow-hidden group">
                        <img alt="Seafood plate" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCPVyMplRNmDrNKqIP0Lcaoiad6KODH5tL-bxC3hotZq_me8H_3kYz5lhYI9xxYGu-7izxryHHnGmiU7q5y-l85OtISb6rZ5QfysIR7nOv9giohnScc-K1lmph79wYi3AMLsVFJKC2ktp_EGJ054J8LeFUJb7B8ZxT53v8CArndei440ajRjNH66NDexZi3zPIG2kLkU2OSgO9PqL5eI-8FrE2HIo42HfzrWZH5tnGovIvEejImJKZ5P4PfuFBkXZS-ekM9lhzm1k" />
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default About;
