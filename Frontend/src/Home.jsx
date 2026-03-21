import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Home() {
    return (
        <>
            <section>
                <div className="container p-0">
                    <div className="row align-items-center m-0 w-100 g-0 d-block h-100 p-5" style={{backgroundColor : "#32462f"}}>
                        <div className="col-md-4 mx-auto d-flex align-items-center gap-3 flex-lg-row flex-column">
                            <p className="m-0 fw-bolder text-white fs-5 text-break">It's a great day for coffee</p>
                            <Link to="/Menu"><motion.button className="btn border border-2 rounded-4 text-white fw-bold" whileHover={{backgroundColor : "#00754A"}} transition={{duration : 0.1}}>Start An Order</motion.button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <motion.div className="container" initial={{opacity : 0}} whileInView={{opacity : 1}}>
                    <div className="row align-items-center">
                        <div className="col-md-6 p-0">
                            <motion.img initial={{scale : 1}} whileHover={{scale : 1.03}} transition={{type : "spring", duration : 1}} src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-106042.jpg" alt="Coffee" className="img img-fluid"/>
                        </div>
                        <div className="col-md-6">
                            <div className="p-5 d-flex flex-column align-items-center">
                                <p className="fs-4 fw-bold text-center text-break" style={{color : "#006242"}}>New ways to celebrate Valentine’s</p>
                                <p className="fs-5 text-center text-break" style={{color : "#006242"}}>Treat yourself or your loved ones to our new White Chocolate Strawberry Cream Cold Brew or Strawberry Shortcake Frappuccino® blended beverage.</p>
                                <Link to="/Menu" className="text-decoration-none d-inline-block"><motion.button className="btn fw-bold border border-1 border-success rounded-pill text-break" whileHover={{backgroundColor : "#006242", color : "white", y : "-2px"}} transition={{duration : 0.1}} style={{color : "#00754a"}}>Order Now</motion.button></Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="container mt-5" initial={{opacity : 0}} whileInView={{opacity : 1}}>
                    <div className="row align-items-center" style={{backgroundColor : "#006241"}}>
                        <div className="col-md-6 h-100">
                            <div className="p-5 d-flex flex-column align-items-center">
                                <p className="fs-4 fw-bold text-center text-white">A new era of bakery</p>
                                <p className="fs-5 text-center text-white">Six new crave-worthy treats have arrived, blending global inspiration and nostalgic flavors. Find them in our refreshed bakery case.</p>
                                <Link to="/Menu" className="text-decoration-none d-inline-block"><motion.button className="btn fw-bold border border-1 border-white rounded-pill text-white text-break" whileHover={{backgroundColor : "#024730", y : "-2px"}} transition={{duration : 0.1}}>Order Now</motion.button></Link>
                            </div>
                        </div>
                        <div className="col-md-6 p-0 d-block">
                            <motion.img initial={{scale : 1}} whileHover={{scale : 1.03}} transition={{type : "spring", duration : 1}} src="/assets\137-106183.jpg" className="img img-fluid" alt="Image"/>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="container mt-5" initial={{opacity : 0}} whileInView={{opacity : 1}}>
                    <div className="row align-items-center" style={{backgroundColor : "#006241"}}>
                        <div className="col-md-6 p-0 d-block">
                            <motion.img initial={{scale : 1}} whileHover={{scale : 1.03}} transition={{type : "spring", duration : 1}} src="/assets\img-2.jpg" className="img img-fluid" alt="Image"/>
                        </div>
                        <div className="col-md-6">
                            <div className="p-5 d-flex flex-column align-items-center">
                                <p className="fs-4 fw-bold text-center text-white">Meet Starbucks 1971 Roast™</p>
                                <p className="fs-5 text-center text-white">Five decades of expertise shines through in our new dark roast with notes of toasted sugar and rich walnut—made for those who love a bold cup. Available freshly brewed.</p>
                                <Link to="/Menu" className="text-decoration-none d-inline-block"><motion.button className="btn fw-bold border border-1 border-white rounded-pill text-white text-break" whileHover={{backgroundColor : "#024730", y : "-2px"}} transition={{duration : 0.1}}>Order Now</motion.button></Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="container mt-5" initial={{opacity : 0}} whileInView={{opacity : 1}}>
                    <div className="row align-items-center" style={{backgroundColor : "#D1D1AA"}}>
                        <div className="col-md-6 h-100">
                            <div className="p-5 d-flex flex-column align-items-center">
                                <p className="fs-4 fw-bold text-center" style={{color : "#32462F"}}>Bold new matcha menu</p>
                                <p className="fs-5 text-center"  style={{color : "#32462F"}}>Meet the Matcha Edit: delicious matcha made from shade-grown green tea leaves, layered with flavors of banana bread, double berry and Dubai chocolate.</p>
                                <Link to="/Menu" className="text-decoration-none d-inline-block"><motion.button className="btn fw-bold border border-1 border-white rounded-pill text-white text-break" initial={{backgroundColor : "#006241"}} whileHover={{backgroundColor : "#024730", y : "-2px"}} transition={{duration : 0.1}}>Order Matcha</motion.button></Link>
                            </div>
                        </div>
                        <div className="col-md-6 p-0 d-block">
                            <motion.img initial={{scale : 1}} whileHover={{scale : 1.03}} transition={{type : "spring", duration : 1}} src="/assets\137-106183.jpg" className="img img-fluid" alt="Image"/>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="container mt-5" initial={{opacity : 0}} whileInView={{opacity : 1}}>
                    <div className="row align-items-center">
                        <div className="col-md-6 p-0 d-block">
                            <motion.img initial={{scale : 1}} whileHover={{scale : 1.03}} transition={{type : "spring", duration : 1}} src="/assets\img-3.jpg" className="img img-fluid" alt="Image"/>
                        </div>
                        <div className="col-md-6">
                            <div className="p-5 d-flex flex-column align-items-center">
                                <p className="fs-4 fw-bold text-center" style={{color : "#006242"}}>Starbucks® Rewards is leveling up in March</p>
                                <p className="fs-5 text-center" style={{color : "#006242"}}>On March 10, the Starbucks Rewards program is getting an exciting update including new perks, new status levels and so much more.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                 <motion.div className="container mt-5" initial={{opacity : 0}} whileInView={{opacity : 1}}>
                    <div className="row align-items-center" style={{backgroundColor : "#006242"}}>
                        <div className="col-md-6 h-100">
                            <div className="p-5 d-flex flex-column gap-3 align-items-center">
                                <p className="fs-1 fw-bolder text-center text-white">Now brewing: Team USA</p>
                                <p className="fs-3 fw-semibold text-center text-white">Meet the Matcha Edit: delicious matcha made from shade-grown green tea leaves, layered with flavors of banana bread, double berry and Dubai chocolate.</p>
                                <Link to="/Menu" className="text-decoration-none d-inline-block"><motion.button className="btn fw-bold border border-1 border-white rounded-pill text-break" initial={{backgroundColor : "white", color : "#006242"}} whileHover={{backgroundColor : "transparent", color : "white", y : "-2px"}} transition={{duration : 0.1}}>About Us</motion.button></Link>
                            </div>
                        </div>
                        <div className="col-md-6 p-0 d-flex">
                            <motion.img initial={{scale : 1}} whileHover={{scale : 1.03}} transition={{type : "spring", duration : 1}} src="/assets\img-4.jpg" className="img img-fluid" alt="Image"/>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="container mt-5" initial={{opacity : 0}} whileInView={{opacity : 1}} style={{backgroundColor : "#006342"}}>
                    <div className="row align-items-center">
                        <div className="col-md-6 p-0 d-flex">
                            <motion.img initial={{scale : 1}} whileHover={{scale : 1.03}} transition={{type : "spring", duration : 1}} src="/assets\img-5.png" className="img img-fluid" alt="Image"/>
                        </div>
                        <div className="col-md-6">
                            <div className="p-5 d-flex align-items-center">
                                <p className="fs-5 fw-bold text-center text-white text-break">Starbucks is proud to support Team USA in the Olympic and Paralympic Winter GamesMilano Cortina 2026</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}