import { motion } from 'framer-motion';

const revealVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const LandingPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <header className="relative h-screen min-h-[800px] w-full overflow-hidden -mt-32">
        <img 
          alt="Gourmet dish presentation" 
          className="absolute inset-0 w-full h-full object-cover scale-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0fuM5_h3xSGVxJPG8laGCGUFSJZHTuzEi9bMG4yUYgwBtKwR9I7yzJ2NuqaysoY1NbAU1Zbq1PzdVhTs9EXSkXmNtAwr4A-oNUGUtRC4aDjWbtJt-GE3rRIKznXT0YBZBpldlsQvFUCDPMFS463gX4TpnABDLGKm5IWWcmt_JaxxVIv_okQ4HlcODsOJA-_K0UQBQjmCRZtOEyTeXfSDerma5lmYdkY52N-8J0j_169l5Jr_gpyejEK5e7p_A20cy5IQjJzID93g"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex flex-col justify-center items-start px-8 md:px-24 max-w-7xl mx-auto z-10 pt-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariant}
          >
            <span className="font-label text-sm tracking-wider uppercase text-on-primary/80 mb-6 block">Established 2024</span>
            <h1 className="font-headline text-5xl md:text-[5.5rem] text-on-primary leading-[1.1] tracking-tight mb-8 max-w-3xl">
              Experience<br/><span className="italic font-serif">Fine Dining</span>
            </h1>
            <p className="text-xl text-on-primary/90 max-w-lg mb-12 font-light leading-relaxed">
              Delicious moments, crafted with passion. Journey through a symphony of seasonal flavors and artistic plating.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-on-primary text-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-all ambient-shadow">
                Book a Table
              </button>
              <button className="text-on-primary font-headline italic editorial-underline flex items-center gap-2 underline underline-offset-4 decoration-1">
                View the Menu
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Featured Dishes - Bento-ish Grid */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}
        >
          <div className="max-w-2xl">
            <h2 className="font-label tracking-wider uppercase text-secondary mb-4 text-xs">Seasonal Highlights</h2>
            <h3 className="font-headline text-5xl leading-tight">Featured Selections</h3>
          </div>
          <p className="text-on-surface-variant max-w-sm">A rotating selection of our chef's most acclaimed creations, highlighting local peak-season ingredients.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large Card */}
          <motion.div 
            className="md:col-span-7 group cursor-pointer"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant} transition={{ delay: 0.1 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-6">
              <img 
                alt="Salmon Carpaccio" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWKH-1IePSH9j37tnTe1AtK4a1gcpjL1ntaH6i-TPlkcytdh-ZZDXPihVd0oTmK-WcYNbDxgJm4NaYeFjLwUq19RMz7ElCuZyrsztppWQo3G0WteqCildFV3HVcVHKtViPCWIMytQCMiX1dLULQpX22e7wcyz9l-aDBEbTZJwweizKbRVYyP_RxveycQ3QE0Wdulb1LrBq7tJRbdNJSbJPVEjN8E7K4QpGkmQlPIMQOz0MhAL2bOr-zDym37-aW9aVsJ2veXfteG0"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-headline text-2xl mb-2">Salmon Carpaccio</h4>
                <p className="text-on-surface-variant">Citrus-cured Atlantic salmon, capers, micro-herbs, lemon emulsion.</p>
              </div>
              <span className="font-headline text-xl text-secondary">$35</span>
            </div>
          </motion.div>

          {/* Small Cards Column */}
          <div className="md:col-span-5 flex flex-col gap-12">
            <motion.div 
              className="group cursor-pointer"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant} transition={{ delay: 0.2 }}
            >
              <div className="relative aspect-video overflow-hidden rounded-xl mb-6">
                <img 
                  alt="Truffle Risotto" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiNQJkyoQFBNKGXVXAC0xGlxX2_QRu0Gkm0CGewwUWISWsb5C0wfbAFbpYQT9Vx_pZrswCtiGQdLU4EiwaswqULcMu8b2JUaIusDe1EiufIUYbhUt5jyuB20A_NMELp8oArrTxEHDTtA1zg8NtH8stYXdN6XzYutKCabdZSMSOd_9UHRuPz5bKQJu3Dg41MeFhGCiH1e0fEGftIZPSngLqcW6BMOx8FmzlvaRmavkk_7hMzdUBuBI2KFuiBpp-A-FFBPNxUt6_Eyk"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-headline text-2xl mb-2">Truffle Risotto</h4>
                  <p className="text-on-surface-variant">Aged carnaroli rice, black winter truffle, 36-month parmesan.</p>
                </div>
                <span className="font-headline text-xl text-secondary">$48</span>
              </div>
            </motion.div>

            <motion.div 
              className="group cursor-pointer"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant} transition={{ delay: 0.3 }}
            >
              <div className="relative aspect-video overflow-hidden rounded-xl mb-6">
                <img 
                  alt="Wagyu Steak" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTUVTQUUukA_odg-G6212R-t9wGpYt-3j99RkmX6IYSyGrhU5VS6lcoR2g_Tg4VUJLE_gLF1PQQmyUsf1jwkQ_IjZviGGGGq6CHoVWOA9Ev_7jFK7sez4-HtwVOhlKKQuDPHSqN1NGBdAkVCrPxP7FcP0lxWXPgB4ZelKTaq0Fk2DXsPPcUPB223TkIHGJQLiSAxrNNrG00mugfsWS5V7G9mqf0N_nEOSJ9ibbUg230os1VHGgCE1W7dLEADB-vqiDlFCbk9k7OyE"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-headline text-2xl mb-2">Wagyu Steak</h4>
                  <p className="text-on-surface-variant">A5 Miyazaki Wagyu, bone marrow jus, smoked carrot purée.</p>
                </div>
                <span className="font-headline text-xl text-secondary">$75</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Asymmetric Layout */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div className="relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-container/30 rounded-full blur-3xl -z-10"></div>
            <img 
              alt="Restaurant interior" 
              className="rounded-xl ambient-shadow w-full aspect-[3/4] object-cover -rotate-2" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh54WLgHWCyKKRR-1OXWtCzhCC6UVujg8fSZl6sPBfsJ1ne9oHF6sg_gQtqxCpGQ2bDZq-DqwycFnESFvr4nJt8l9FqGLbat8LHZ_mwrMjwS_fxaYw8SAyFD_dB2CmWJtrJTZyy0ZiKu80X0oENKWMsthbwUr0I0VeZJCFs_x_upaj_6N56NirzAjd7pPAQu44bWsQ7GdOfBb4NsFDM_M4crbRx-_RzmODIV_sTqX0b7C4ZIeRpW-QJ-F0mD-_yuk2FNQWzbEGAEY"
            />
            <motion.div 
              className="absolute -bottom-8 -right-8 bg-surface-container-lowest p-8 rounded-xl ambient-shadow max-w-[280px] hidden lg:block"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant} transition={{ delay: 0.4 }}
            >
              <p className="font-headline italic text-on-secondary-container">"Every plate tells a story of the soil it came from."</p>
              <p className="font-label text-[10px] uppercase tracking-widest mt-4 opacity-60">— Executive Chef Julian Thorne</p>
            </motion.div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant} transition={{ delay: 0.2 }}>
            <h2 className="font-label tracking-wider uppercase text-secondary mb-6 text-xs">Our Philosophy</h2>
            <h3 className="font-headline text-5xl mb-8 leading-tight">The Art of the Ingredient</h3>
            <p className="text-lg leading-relaxed text-on-surface-variant mb-8">
              We believe that luxury lies in simplicity and integrity. Our kitchen works directly with local artisans and sustainable farms to ensure that every element on your plate is at its absolute peak of flavor.
            </p>
            <p className="text-lg leading-relaxed text-on-surface-variant mb-12">
              Founded on the principles of traditional French technique and modern culinary innovation, The Curated Plate offers an intimate sanctuary where gastronomy meets poetry.
            </p>
            <div className="p-8 bg-secondary-container rounded-xl">
              <h4 className="font-headline text-xl mb-4 text-on-secondary-container">Chef’s Note</h4>
              <p className="text-on-secondary-container/80 leading-relaxed italic">
                Our tasting menu is updated daily based on the morning's harvest. We invite you to trust our process and enjoy the element of surprise.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
