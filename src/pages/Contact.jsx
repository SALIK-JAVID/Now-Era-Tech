import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const revealVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const formStepVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3, ease: "easeIn" } }
};

const Contact = () => {
    const [step, setStep] = useState(1);
    
    const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Booking request sent! Our concierge will contact you shortly.");
    };

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="px-6 lg:px-12 max-w-screen-2xl mx-auto mb-32 -mt-16 pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
                    <motion.div 
                        className="lg:col-span-7"
                        initial="hidden" animate="visible" variants={revealVariant}
                    >
                        <span className="label-md tracking-[0.3em] text-primary uppercase text-[10px] mb-6 block font-bold">The Dialogue</span>
                        <h1 className="text-6xl md:text-8xl leading-[1.1] font-headline tracking-tighter text-on-surface mb-8">
                            The art of <span className="italic text-secondary">hospitality</span> begins with a dialogue.
                        </h1>
                    </motion.div>
                    <motion.div 
                        className="lg:col-span-5 pb-4"
                        initial="hidden" animate="visible" variants={revealVariant} transition={{ delay: 0.2 }}
                    >
                        <p className="text-on-surface-variant text-lg leading-relaxed max-w-md font-body">
                            Whether you are looking to reserve a private corner for an intimate evening or have specific dietary inquiries, our concierge is ready to assist.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact & Reservation Grid */}
            <section className="px-6 lg:px-12 max-w-screen-2xl mx-auto mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left: Form Widget */}
                    <motion.div 
                        className="lg:col-span-7 bg-surface-container-low p-8 lg:p-12 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-outline-variant/10 relative overflow-hidden"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant} transition={{ delay: 0.1 }}
                    >
                        {/* Progress Bar */}
                        <div className="absolute top-0 left-0 h-1 bg-primary/20 w-full">
                            <motion.div 
                                className="h-full bg-primary"
                                initial={{ width: "33%" }}
                                animate={{ width: `${(step / 3) * 100}%` }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                        </div>

                        <div className="flex justify-between items-center mb-12">
                            <h2 className="text-3xl font-headline">Inquiry & Reservation</h2>
                            <span className="font-label text-[10px] uppercase tracking-widest text-outline">Step {step} of 3</span>
                        </div>
                        
                        <form className="space-y-12" onSubmit={handleSubmit}>
                            <div className="min-h-[220px]">
                                <AnimatePresence mode="wait">
                                    {step === 1 && (
                                        <motion.div 
                                            key="step1" 
                                            variants={formStepVariant} 
                                            initial="hidden" animate="visible" exit="exit"
                                            className="grid grid-cols-1 md:grid-cols-2 gap-12"
                                        >
                                            <div className="relative group">
                                                <label className="block text-[10px] uppercase tracking-[0.2em] text-outline mb-2 font-label group-focus-within:text-primary transition-colors">Party Size</label>
                                                <select className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary py-3 transition-all font-body text-on-surface-variant outline-none appearance-none">
                                                    {[1,2,3,4,5,6,7,8,"9+"].map(n => <option key={n} value={n}>{n} Guests</option>)}
                                                </select>
                                                <span className="material-symbols-outlined absolute right-0 bottom-3 text-outline-variant pointer-events-none">expand_more</span>
                                            </div>
                                            <div className="relative group">
                                                <label className="block text-[10px] uppercase tracking-[0.2em] text-outline mb-2 font-label group-focus-within:text-primary transition-colors">Preferred Date</label>
                                                <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary py-3 transition-all font-body text-on-surface-variant outline-none" type="date" />
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 2 && (
                                        <motion.div 
                                            key="step2" 
                                            variants={formStepVariant} 
                                            initial="hidden" animate="visible" exit="exit"
                                            className="space-y-8"
                                        >
                                            <label className="block text-[10px] uppercase tracking-[0.2em] text-outline mb-2 font-label">Select Time Slot</label>
                                            <div className="grid grid-cols-3 gap-4">
                                                {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30'].map(time => (
                                                    <div key={time} className="border border-outline-variant/30 rounded-lg py-3 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all font-body text-on-surface-variant">
                                                        {time}
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-xs text-outline-variant font-body italic flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[14px]">info</span> All dinner seatings are allocated 2.5 hours.
                                            </p>
                                        </motion.div>
                                    )}

                                    {step === 3 && (
                                        <motion.div 
                                            key="step3" 
                                            variants={formStepVariant} 
                                            initial="hidden" animate="visible" exit="exit"
                                            className="space-y-12"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                                <div className="relative group">
                                                    <label className="block text-[10px] uppercase tracking-[0.2em] text-outline mb-2 font-label group-focus-within:text-primary transition-colors">Your Name</label>
                                                    <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary py-3 transition-all placeholder:text-outline-variant/40 font-body outline-none" placeholder="Julianne Vane" type="text" required/>
                                                </div>
                                                <div className="relative group">
                                                    <label className="block text-[10px] uppercase tracking-[0.2em] text-outline mb-2 font-label group-focus-within:text-primary transition-colors">Email Address</label>
                                                    <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary py-3 transition-all placeholder:text-outline-variant/40 font-body outline-none" placeholder="concierge@curated.com" type="email" required/>
                                                </div>
                                            </div>
                                            <div className="relative group">
                                                <label className="block text-[10px] uppercase tracking-[0.2em] text-outline mb-2 font-label group-focus-within:text-primary transition-colors">Message or Dietary Notes</label>
                                                <textarea className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary py-3 transition-all placeholder:text-outline-variant/40 resize-none font-body outline-none" placeholder="How may we curate your experience?" rows="2"></textarea>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="pt-4 flex items-center justify-between border-t border-outline-variant/10 pb-2">
                                {step > 1 ? (
                                    <button 
                                        type="button" 
                                        onClick={prevStep}
                                        className="text-on-surface-variant font-label text-xs uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2"
                                    >
                                        <span className="material-symbols-outlined text-[16px]">arrow_back</span> Back
                                    </button>
                                ) : (
                                    <div></div>
                                )}

                                {step < 3 ? (
                                    <button 
                                        type="button" 
                                        onClick={nextStep}
                                        className="bg-primary text-on-primary px-8 py-3 rounded-full font-serif tracking-wide text-md transition-all hover:bg-on-surface hover:scale-[1.02] flex items-center gap-4 shadow-lg shadow-primary/10"
                                    >
                                        <span>Continue</span>
                                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                    </button>
                                ) : (
                                    <button 
                                        type="submit" 
                                        className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-serif tracking-wide text-md transition-all hover:bg-on-surface hover:scale-[1.02] flex items-center gap-4 shadow-lg shadow-secondary/20"
                                    >
                                        <span>Confirm Request</span>
                                        <span className="material-symbols-outlined text-[18px]">check</span>
                                    </button>
                                )}
                            </div>
                        </form>
                    </motion.div>

                    {/* Right: Contact Info & Chef's Note */}
                    <motion.div 
                        className="lg:col-span-5 flex flex-col justify-between py-4"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant} transition={{ delay: 0.2 }}
                    >
                        <div className="space-y-16">
                            <div>
                                <h3 className="text-[10px] uppercase tracking-[0.3em] text-outline mb-8 font-label">The Residence</h3>
                                <p className="text-3xl font-headline leading-snug">
                                    482 Heritage Way, <br/>
                                    Culinary District, <br/>
                                    London, EC1A 4JQ
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[10px] uppercase tracking-[0.3em] text-outline mb-8 font-label">Direct Lines</h3>
                                <div className="space-y-6">
                                    <a className="block text-3xl font-headline hover:text-secondary transition-colors underline underline-offset-8 decoration-outline-variant/30" href="tel:+442079460123">+44 (0) 20 7946 0123</a>
                                    <a className="block text-3xl font-headline hover:text-secondary transition-colors underline underline-offset-8 decoration-outline-variant/30" href="mailto:hello@thecuratedplate.com">hello@thecuratedplate.com</a>
                                </div>
                            </div>

                            {/* Chef's Note Signature Component */}
                            <div className="bg-secondary-container/50 border border-secondary/10 p-10 rounded-2xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h4 className="text-xl font-headline italic mb-4 text-on-secondary-container">A Note from Chef Marcus</h4>
                                    <p className="text-sm leading-relaxed text-on-secondary-container opacity-90 font-body">
                                        "Our kitchen operates on the rhythm of the seasons. If you have a specific ingredient preference or a celebratory request, please let us know in advance so we can prepare something truly singular for you."
                                    </p>
                                </div>
                                <span className="material-symbols-outlined absolute -bottom-6 -right-6 text-9xl opacity-[0.03] select-none text-on-secondary-container">restaurant</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Map Section Polished */}
            <section className="px-6 lg:px-12 max-w-screen-2xl mx-auto mb-32">
                <motion.div 
                    className="relative h-[650px] rounded-2xl overflow-hidden shadow-2xl group border border-outline-variant/10"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}
                >
                    <div className="absolute inset-0 bg-stone-200 grayscale contrast-[1.1] saturate-[0.8]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDcy7buZwuPB-JsVaUgo0K6qAmfvh0ffwKaszVLCRE2WlAzRYkWCzOoVbfbbqT3E2oVp65Y--OFbRwc2jVXFyFUz0JI0njzGto3TI1JLJjN5mBOh0ZC4KliQ_emtAuW6bbGgWOHtZUWxRbwqGppc3ufM9XKiGCgZRpY7cTWhJ-4mYEn1uivs7gWxZ38L_Wk9S6BOqaVB-MnLmRu8g6Q6rgiQaLEej6EU9xVE0kg2XEaftIQiGCmqJT0TPWnheekKuyppZmSk_EiAIA')", backgroundPosition: "center", backgroundSize: "cover" }}>
                        <div className="absolute inset-0 bg-on-surface/5 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent pointer-events-none"></div>
                    </div>
                    {/* Interactive Pin Proxy */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="w-14 h-14 bg-on-surface text-surface rounded-full flex items-center justify-center shadow-2xl relative z-20 transition-transform duration-500 group-hover:scale-110">
                            <span className="material-symbols-outlined text-2xl font-variation-settings-'FILL'-1">location_on</span>
                        </div>
                        <div className="mt-4 bg-surface/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-xl text-center relative z-20 border border-outline-variant/10">
                            <p className="text-[10px] uppercase tracking-[0.2em] font-label font-bold text-on-surface">The Curated Plate</p>
                            <p className="text-[9px] text-outline mt-1 font-body">Open until 11:00 PM</p>
                        </div>
                        <div className="absolute top-0 w-32 h-32 bg-secondary/30 rounded-full blur-3xl -translate-y-1/4 animate-pulse"></div>
                    </div>
                </motion.div>
                
                <motion.div 
                    className="mt-10 flex flex-col md:flex-row justify-between items-start md:items-center border-t border-outline-variant/10 pt-10"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}
                >
                    <div className="flex items-center gap-4 mb-4 md:mb-0 group cursor-default">
                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-xl">directions</span>
                        </div>
                        <span className="text-[10px] font-label tracking-[0.2em] uppercase text-outline group-hover:text-primary transition-colors">Valet Parking Available at Main Entrance</span>
                    </div>
                    <button className="font-serif italic text-on-surface text-lg underline underline-offset-8 decoration-primary/20 hover:decoration-primary transition-all">Get Detailed Directions</button>
                </motion.div>
            </section>

            {/* Hours Asymmetric Block */}
            <section className="px-6 lg:px-12 max-w-screen-2xl mx-auto mb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                    <motion.div 
                        className="aspect-square relative overflow-hidden rounded-2xl shadow-2xl"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}
                    >
                        <img alt="Interior detail" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr7z8A0rbag2gaWi6yzjZkON9I-oezdY8jWEK4iitSkkmkgVYnnz0TekHSAw482fOwqEHtAyh3-nM08WDm0RZYE9ozNm9dBTa0Yh4_d2axbFsvsnU0V0U5yYxcFIXZ1_UKvM85bsYIX7ISHwMQRpwpOG_CDbye1gZq9nwgMDVRahCdYEHxBc83pPpWDLamrCmpSs-VXnYl1fQIt6V67w0zbB_RTd_gTR7txXOBwck6pryk2qB5LiDsn6qDtLTewcO93RnS3h0rOfc" />
                        <div className="absolute inset-0 bg-inverse-surface/10"></div>
                    </motion.div>
                    
                    <motion.div 
                        className="flex flex-col justify-center lg:pl-12"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant} transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-5xl font-headline mb-16">Service Hours</h2>
                        <div className="space-y-10 max-w-md">
                            <div className="flex justify-between items-end border-b border-outline-variant/20 pb-6 group">
                                <div>
                                    <span className="label-md font-bold uppercase tracking-[0.2em] text-[10px] block mb-2 text-primary">Lunch</span>
                                    <span className="text-on-surface-variant font-body">Wednesday — Sunday</span>
                                </div>
                                <span className="font-headline italic text-2xl group-hover:text-secondary transition-colors">12:00 — 15:00</span>
                            </div>
                            <div className="flex justify-between items-end border-b border-outline-variant/20 pb-6 group">
                                <div>
                                    <span className="label-md font-bold uppercase tracking-[0.2em] text-[10px] block mb-2 text-primary">Dinner</span>
                                    <span className="text-on-surface-variant font-body">Monday — Saturday</span>
                                </div>
                                <span className="font-headline italic text-2xl group-hover:text-secondary transition-colors">18:30 — 23:00</span>
                            </div>
                            <div className="flex justify-between items-end border-b border-outline-variant/20 pb-6 group">
                                <div>
                                    <span className="label-md font-bold uppercase tracking-[0.2em] text-[10px] block mb-2 text-primary">The Lounge</span>
                                    <span className="text-on-surface-variant font-body">Daily</span>
                                </div>
                                <span className="font-headline italic text-2xl group-hover:text-secondary transition-colors">17:00 — Late</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
