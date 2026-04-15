import { motion } from 'framer-motion';

const revealVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const EditorialMenu = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="px-12 mb-32 -mt-16 pt-16">
                <motion.div 
                    className="max-w-screen-2xl mx-auto text-center"
                    initial="hidden" animate="visible" variants={revealVariant}
                >
                    <span className="block text-xs font-label uppercase tracking-[0.3em] mb-4 text-outline">Seasonal Gastronomy</span>
                    <h1 className="text-6xl md:text-8xl font-headline italic tracking-tight text-on-surface mb-8">The Autumn Palette</h1>
                    <p className="max-w-2xl mx-auto text-on-surface-variant font-body text-lg leading-relaxed">
                        A curated journey through the harvest, celebrating the raw beauty of earth’s offerings with precision and poetic restraint.
                    </p>
                </motion.div>
            </section>

            {/* Section 1: Starters (Image Left) */}
            <section className="mb-48 overflow-hidden">
                <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-24 px-12">
                    <motion.div 
                        className="w-full md:w-[60%] relative group"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}
                    >
                        <div className="aspect-[4/5] overflow-hidden rounded-lg">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBE-8BqNF2wgltOl11kVt0j_kEzhy4egkO7c-JB8fuRe2qE6vtK4L_q8GAY02qXEjBSvJ66Lo33h-RqcKGRZ5ssqPU3m4LU-UOnMqSLfhti_Av7P8dUw7AO1qRqzmjHABqJyT4afcAdTXJ9yXxc9AHqxRkzLhStO67LYYm7U_aUswVOyh5L0AZMCniIj05fEWo4CHn33eaFzN-DroB-_Uh4B6AiZke4_seII-idqJmP1hEv8fnLJL3LHsLfiR0fRFF3x6EeRVWY30" alt="Starters" />
                        </div>
                    </motion.div>
                    <motion.div 
                        className="w-full md:w-[40%]"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant} transition={{ delay: 0.2 }}
                    >
                        <span className="text-xs font-label uppercase tracking-[0.2em] text-outline mb-6 block">Opening Acts</span>
                        <h2 className="text-4xl font-headline mb-12 italic border-b border-outline-variant/20 pb-4">Starters</h2>
                        <div className="space-y-10">
                            <div className="group">
                                <div className="flex justify-between items-baseline gap-4 mb-2">
                                    <h3 className="font-headline text-xl text-on-surface">Burrata & Stone Fruit</h3>
                                    <div className="flex-grow border-b border-dotted border-outline-variant/30 mx-2 mb-1"></div>
                                    <span className="font-body text-sm text-on-surface-variant">24</span>
                                </div>
                                <p className="text-sm text-on-surface-variant font-body leading-relaxed italic">Creamy puglian burrata, charred peach, wild honeycomb, toasted pistachio.</p>
                            </div>
                            <div className="group">
                                <div className="flex justify-between items-baseline gap-4 mb-2">
                                    <h3 className="font-headline text-xl text-on-surface">Wild Atlantic Scallops</h3>
                                    <div className="flex-grow border-b border-dotted border-outline-variant/30 mx-2 mb-1"></div>
                                    <span className="font-body text-sm text-on-surface-variant">28</span>
                                </div>
                                <p className="text-sm text-on-surface-variant font-body leading-relaxed italic">Pan-seared, cauliflower silk, crispy pancetta, golden raisin emulsion.</p>
                            </div>
                            <div className="group">
                                <div className="flex justify-between items-baseline gap-4 mb-2">
                                    <h3 className="font-headline text-xl text-on-surface">Beef Carpaccio</h3>
                                    <div className="flex-grow border-b border-dotted border-outline-variant/30 mx-2 mb-1"></div>
                                    <span className="font-body text-sm text-on-surface-variant">26</span>
                                </div>
                                <p className="text-sm text-on-surface-variant font-body leading-relaxed italic">Hand-cut wagyu, truffle pearls, 24-month aged parmesan, baby arugula.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Chef's Masterpiece Block */}
            <section className="mb-48 px-6 md:px-12">
                <motion.div 
                    className="relative max-w-screen-2xl mx-auto h-[716px] rounded-xl overflow-hidden group"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 1 } } }}
                >
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZNnZWwcTsts76QvYtcIQd3N3gnoJ9Ld5cAQ-uwg8p34zWRwC_-pURO3USrnATYV4lc6wjQ3OLt-ZEhrUANPmoI_f2xd0PZ_3UePi0fHhZwMApb3HTwJGyYVl80J2pk3M8mRjoVzlx7H2WGAh0vYOWJ0zmzUtY_-DbBVyds0Axi3WpANbdVwYeoJY66BAp3OiW40GlXYMU7k97FEhPYHpCBOm5f4r9MyU53nIfeiS7px8NacC3eCATOwPAuOfCoKFr3A0sLcI9lNs" alt="Chef's masterpiece" />
                    <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-12 left-12 right-12 text-on-primary">
                        <div className="bg-surface/10 backdrop-blur-md p-10 rounded-xl max-w-xl editorial-shadow border border-white/10">
                            <span className="text-xs font-label uppercase tracking-widest mb-4 block">Chef's Masterpiece</span>
                            <h2 className="text-5xl font-headline italic mb-4">L'Artichaut de Bretagne</h2>
                            <p className="text-lg font-body mb-6 opacity-90 leading-relaxed">Whole roasted Brittany artichoke filled with black truffle mousseline and 48-hour slow-cooked short rib.</p>
                            <span className="text-2xl font-headline italic">85</span>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Section 2: Main Course (Image Right) */}
            <section className="mb-48 overflow-hidden bg-surface-container-low py-24">
                <div className="max-w-screen-2xl mx-auto flex flex-col-reverse md:flex-row items-center gap-24 px-12">
                    <motion.div 
                        className="w-full md:w-[40%]"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}
                    >
                        <span className="text-xs font-label uppercase tracking-[0.2em] text-outline mb-6 block">The Heart of the Meal</span>
                        <h2 className="text-4xl font-headline mb-12 italic border-b border-outline-variant/20 pb-4">Main Course</h2>
                        <div className="space-y-10">
                            <div className="group">
                                <div className="flex justify-between items-baseline gap-4 mb-2">
                                    <h3 className="font-headline text-xl text-on-surface">Wild Sea Bass</h3>
                                    <div className="flex-grow border-b border-dotted border-outline-variant/30 mx-2 mb-1"></div>
                                    <span className="font-body text-sm text-on-surface-variant">42</span>
                                </div>
                                <p className="text-sm text-on-surface-variant font-body leading-relaxed italic">Line-caught, herb-crusted, braised leeks, champagne beurre blanc.</p>
                            </div>
                            <div className="group">
                                <div className="flex justify-between items-baseline gap-4 mb-2">
                                    <h3 className="font-headline text-xl text-on-surface">Duck Breast L'Orange</h3>
                                    <div className="flex-grow border-b border-dotted border-outline-variant/30 mx-2 mb-1"></div>
                                    <span className="font-body text-sm text-on-surface-variant">48</span>
                                </div>
                                <p className="text-sm text-on-surface-variant font-body leading-relaxed italic">Honey-glazed, spiced carrot purée, confit leg croquette, grand marnier jus.</p>
                            </div>
                            <div className="group">
                                <div className="flex justify-between items-baseline gap-4 mb-2">
                                    <h3 className="font-headline text-xl text-on-surface">Truffle Risotto</h3>
                                    <div className="flex-grow border-b border-dotted border-outline-variant/30 mx-2 mb-1"></div>
                                    <span className="font-body text-sm text-on-surface-variant">38</span>
                                </div>
                                <p className="text-sm text-on-surface-variant font-body leading-relaxed italic">Acquerello rice, porcini dust, fresh black truffle shavings, aged pecorino.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="w-full md:w-[60%] relative group"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant} transition={{ delay: 0.2 }}
                    >
                        <div className="aspect-[4/5] overflow-hidden rounded-lg">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt0fI6LCVtlGbfql5TbVScgcUN3huLs27d_8dbrx2lYqUJH6HhvKemiKalPxt9PTXd5DORJiSP9sEJtTLmjYOxhCb48dYrg9AE_glHymr_VNtayn4DPB92UU8TaBZbJMjvm6dcjasTW8BDuUQ50sFT4mLjR2Gt41ADqMZmf6Fn4SexghG7PWTwrGufEDe6cFoX8n4GM5yWmpdp5as44DcjEFLXDUEOjAvYrbp540J7sSrVsg4zeP5mfa_ZHpeLXqhPYlXV__fqCFc" alt="Main course duck" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 3: Desserts (Image Left) */}
            <section className="mb-48 overflow-hidden">
                <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-24 px-12">
                    <motion.div 
                        className="w-full md:w-[60%] relative group"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}
                    >
                        <div className="aspect-[4/5] overflow-hidden rounded-lg">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg9NTNSueIlZGBddQUZPyDHzN68xQr8XwuV7wPaf7gAAIuXGE-NY8Ob1j1fAtmDFdfFsmz5nK1rMs2RSOPuXrP4DCO8oMivuQlyjx2Q958AuWOCmGBl2RdHnTjLEiYGSZUJdFtBjeGXUg6Jzpwr9EagFzucanW_Utpsg6D_uQa8CkddVK0u0GNFdCCZHbvZ7WtUt6cNs_9UHAOU4_jnPHRGv1V1kIa70mcSLkTeU9ZNfE85YP5dGWWfdwtEg89Od_dZijQ1ZAc4cw" alt="Dessert" />
                        </div>
                    </motion.div>
                    <motion.div 
                        className="w-full md:w-[40%]"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant} transition={{ delay: 0.2 }}
                    >
                        <span className="text-xs font-label uppercase tracking-[0.2em] text-outline mb-6 block">Sweet Finales</span>
                        <h2 className="text-4xl font-headline mb-12 italic border-b border-outline-variant/20 pb-4">Desserts</h2>
                        <div className="space-y-10">
                            <div className="group">
                                <div className="flex justify-between items-baseline gap-4 mb-2">
                                    <h3 className="font-headline text-xl text-on-surface">Valrhona Soufflé</h3>
                                    <div className="flex-grow border-b border-dotted border-outline-variant/30 mx-2 mb-1"></div>
                                    <span className="font-body text-sm text-on-surface-variant">18</span>
                                </div>
                                <p className="text-sm text-on-surface-variant font-body leading-relaxed italic">70% dark chocolate, Madagascar vanilla bean crème anglaise.</p>
                            </div>
                            <div className="group">
                                <div className="flex justify-between items-baseline gap-4 mb-2">
                                    <h3 className="font-headline text-xl text-on-surface">Lemon Verbena Tart</h3>
                                    <div className="flex-grow border-b border-dotted border-outline-variant/30 mx-2 mb-1"></div>
                                    <span className="font-body text-sm text-on-surface-variant">16</span>
                                </div>
                                <p className="text-sm text-on-surface-variant font-body leading-relaxed italic">Shortbread crust, Italian meringue, candied citrus zest.</p>
                            </div>
                        </div>

                        {/* Chef's Note Signature Component */}
                        <div className="mt-20 p-8 bg-secondary-container rounded-xl">
                            <h4 className="font-headline text-lg italic text-on-secondary-container mb-3">Chef’s Note</h4>
                            <p className="font-body text-sm text-on-secondary-container leading-relaxed">"Dessert is the final impression—the lingering echo of the meal. We source our cacao directly from ethical farms in Peru to ensure every bite tells a story of origin."</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default EditorialMenu;
