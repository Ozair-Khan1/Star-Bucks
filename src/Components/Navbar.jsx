import { BsMenuButtonFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { FaFacebook, FaInstagram, FaPinterest, FaSpotify } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink, Outlet } from "react-router-dom";
import { BiLogoInstagram, BiLogoInstagramAlt } from "react-icons/bi";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";



export function Navbar() {
    return(
        <>
            <section>
                <nav className="nav-underline navbar navbar-expand-xl bg-tranparent">
                    <div className="container-fluid mx-auto bg-tranparent">
                        <NavLink to="/" className="navbar-brand d-flex justify-content-center">
                            <img src="/assets\Logo2.svg" className="w-25 img-fluid" alt="Star Bucks"/>
                        </NavLink>

                        <button
                        className="navbar-toggler justify-content-center align-items-center mx-auto border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar-content"
                        aria-controls="navbar-content"
                        aria-expanded="false"
                        aria-label="toggle-navigation">
                            <span><BsMenuButtonFill className="w-100 h-100"/></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar-content">
                            <ul className="navbar-nav me-auto d-flex justify-content-center align-items-center gap-3">
                                <motion.li className="nav-item" whileHover={{y : "-2px"}}><NavLink to="/Home" className="nav-link fw-bold text-uppercase"><motion.span initial={{color : "black"}} whileHover={{color : "green"}}>Home</motion.span></NavLink></motion.li>
                                <motion.li className="nav-item" whileHover={{y : "-2px"}}><NavLink to="/Menu" className="nav-link fw-bold text-uppercase"><motion.span initial={{color : "black"}} whileHover={{color : "green"}}>Menu</motion.span></NavLink></motion.li>
                                <motion.li className="nav-item" whileHover={{y : "-2px"}}><NavLink to="/Reward" className="nav-link fw-bold text-uppercase"><motion.span  initial={{color : "black"}}whileHover={{color : "green"}}>Rewards</motion.span></NavLink></motion.li>
                                <motion.li className="nav-item" whileHover={{y : "-2px"}}><NavLink to="/GiftCard" className="nav-link fw-bold text-uppercase"><motion.span initial={{color : "black"}} whileHover={{color : "green"}}>Gift Cards</motion.span></NavLink></motion.li>
                            </ul>
                            <div className="d-flex justify-content-evenly flex-column gap-4 gap-lg-0 gap-xl-0 gap-md-0 flex-lg-row flex-xl-row flex-md-row align-items-center mt-4 mt-lg-0">
                                <motion.button className="btn d-inline-flex justify-content-center align-items-center border-0 fw-bold mx-2" whileHover={{color : "green", y : "-2px"}} whileTap={{y : "0px"}}>
                                    <span><ImLocation2 className="me-1 fs-4"/></span>
                                    Find A Store
                                </motion.button>
                                <motion.a href="" className="btn fw-bold border border-2 border-black rounded-5 mx-2" whileHover={{backgroundColor : "#B8FFB8", y : "-2px"}} transition={{duration : 0.1}} whileTap={{backgroundColor : "white", y : "0px"}}>Sign In</motion.a>
                                <motion.a href="SignUp" className="btn fw-bold border border-2 border-black rounded-5 mx-2 text-white"initial={{backgroundColor : "black"}} whileHover={{opacity : 0.8, y : "-2px"}} transition={{duration : 0.1}} whileTap={{y : "0px"}}>Join Now</motion.a>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
            <Outlet/>
            <hr  className="border-2 opacity-25 mt-5"/>
            <motion.section initial={{y : "200px"}} whileInView={{y : "0px"}} transition={{type : "spring", duration : 1}}>
                <footer className="site-footer container">
                    <div className="row bg-white justify-content-center gap-5">
                        <div className="col-lg-2 col-md-4">
                            <ul className="list-group">
                                <p className="list-group-item border-0 fs-4 fw-semibold text-black text-break">About Us</p>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>Our Company</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>Our Coffee</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>About StarBucks</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>StarBucks Archive</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>Invester Relations</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>Costumer Service</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>Contact Us</motion.a>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <ul className="list-group">
                                <p className="list-group-item border-0 fs-4 fw-semibold text-black text-break">Careers</p>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>Culture & Values</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>Belonging At StarBucks</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>College Achievement Plan</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>Alumni Community</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>U.S Careers</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>International Careers</motion.a>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <ul className="list-group">
                                <p className="list-group-item border-0 fs-4 fw-semibold text-black text-break">Social Impacts</p>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>Communities</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>StarBucks Foundation</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>Sustainability</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>Environmental & Social Impact Reporting</motion.a>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <ul className="list-group">
                                <p className="list-group-item border-0 fs-4 fw-semibold text-black text-break text-wrap text-lg-nowrap text-md-nowrap">For Business Partners</p>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>LandLord Support Center</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>Suppliers</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>Corporate Gift Card Sale</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>Office & Food Service Coffee</motion.a>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <ul className="list-group">
                                <p className="list-group-item border-0 fs-4 fw-semibold text-black text-break text-wrap text-lg-nowrap text-md-nowrap">Order & Pick Ups</p>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>Order On The App</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>Order On The Web</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>Delivery</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>Order & Pick Up Options</motion.a>
                                <motion.a href="/" className="list-group-item border-0" initial={{color : "#000000ad"}} whileHover={{color : "#000000"}}>Explore & Find Coffee For Home</motion.a>
                            </ul>
                        </div>
                    </div>
                    <hr  className="border-2 opacity-25 mt-4 w-100"/>
                    <div className="row d-flex justify-content-center mt-4">
                        <div className=" col-12 d-flex flex-wrap justify-content-center gap-4">
                            <motion.a whileHover={{y : "-8px"}} transition={{type : "tween", duration : "0.5"}} href="" className="border-0"><FaSpotify  className="text-black fs-1"/></motion.a>
                            <motion.a whileHover={{y : "-8px"}} transition={{type : "tween", duration : "0.5"}} href="" className="border-0"><FaFacebook className="text-black fs-1"/></motion.a>
                            <motion.a whileHover={{y : "-8px"}} transition={{type : "tween", duration : "0.5"}} href="" className="border-0"><FaPinterest className="text-black fs-1"/></motion.a>
                            <motion.a whileHover={{y : "-8px"}} transition={{type : "tween", duration : "0.5"}} href="" className="border-0"><BiLogoInstagramAlt className="text-black fs-1"/></motion.a>
                            <motion.a whileHover={{y : "-8px"}} transition={{type : "tween", duration : "0.5"}} href="" className="border-0"><TbBrandYoutubeFilled  className="text-black fs-1"/></motion.a>
                            <motion.a whileHover={{y : "-8px"}} transition={{type : "tween", duration : "0.5"}} href="" className="border-0"><FaSquareXTwitter  className="text-black fs-1"/></motion.a>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 text-center">
                            <ul className="list-unstyled d-flex flex-column align-items-center">
                                <li className="mb-2">
                                <motion.a initial={{textDecoration : "none"}} whileHover={{textDecoration : "underline"}} href="#" className="text-dark fw-bold">Privacy Notice</motion.a>
                                </li>
                                <li className="mb-2">
                                <motion.a initial={{textDecoration : "none"}} whileHover={{textDecoration : "underline"}} href="#" className="text-dark fw-bold">Terms of Use</motion.a>
                                </li>
                                <li className="mb-2">
                                <motion.a initial={{textDecoration : "none"}} whileHover={{textDecoration : "underline"}} href="#" className="text-dark fw-bold">Cookie Preferences</motion.a>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                © 2026 Starbucks Coffee Company. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </motion.section>
        </>
    )
}