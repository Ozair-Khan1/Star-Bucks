import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

export const Previous = () => {
    
    const previousCartData = localStorage.getItem('Previous Cart');
    const previousCart = previousCartData ? JSON.parse(previousCartData) : null;    

    const {user} = useAuth();

    const clear = () => {
        localStorage.removeItem('Previous Cart');
        window.location.reload();
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="d-flex justify-content-center">
                        {(!previousCart || previousCart.length === 0) && user && (
                            <div className="mt-5 pt-5">
                                <p className="text-muted fs-5">You haven't placed any order yet.</p>
                                <Link to="/Menu" className="btn btn-outline-success rounded-pill px-4 fw-bold">Add items</Link>
                            </div>
                        )}
                    </div>
                    {user ? (
                        <div className="col-md-8">
                            {previousCart && previousCart.length > 0 && (
                                <motion.button whileHover={{y: -5}} className="btn btn-outline-danger rounded-4" onClick={clear}>Clear</motion.button>
                            )}
                            {previousCart && previousCart.map((item, index) => (
                                <motion.div layout initial={{opacity : 0, x : -20}} animate={{opacity : 1, x : 0}} exit={{opacity : 0, x : 50}} transition={{duration : 0.3}} className="cart-container mx-auto mt-4" key={`${item.id} - ${index}`}>
                                    <div className="card rounded-4 shadow-lg">
                                        <div className="cart-align gap-3 text-break">
                                            <div className="d-flex cart-img align-items-center mx-auto">
                                                <img src={item.image} className="rounded-pill img-fluid mx-0 mx-lg-3 mx-xl-3" />
                                            </div>
                                            <div className="mx-auto cart-body">
                                                <div className="card-body">
                                                    <div className="card-title border-0">
                                                        <p className="fw-bold fs-4 text-black">{item.name}</p>
                                                    </div>
                                                    <p className="card-text fw-semibold mt-4">
                                                        {item.calories} Calories
                                                    </p>
                                                    <p className="card-text fw-semibold mt-4">
                                                        Price : $ {item.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="justify-content-center d-flex" style={{width : '720px'}}>
                            <div className="d-flex flex-column mx-auto justify-content-center">
                                <h2 className="text-black fw-bold">Previous</h2>
                                <div className="mt-4">
                                    <img src="/assets\moon-phases.gif" alt="" className="img-fluid" style={{width : '225px', height : 'auto'}}/>
                                </div>
                                <div className="d-flex flex-column gap-2" style={{width : '280px'}}>
                                <h3>When history repeats itself</h3>
                                <p className="text-black fs-6">Previous orders will appear here to quickly order again.</p>
                                </div>
                                <div className="d-flex mt-2">
                                    <motion.a href="Login" className="btn fw-bold border border-2 border-black rounded-5 mx-2" whileHover={{backgroundColor : "#B8FFB8", y : "-2px"}} transition={{duration : 0.1}} whileTap={{backgroundColor : "white", y : "0px"}}>Sign In</motion.a>
                                    <motion.a href="SignUp" className="btn fw-bold border border-2 border-black rounded-5 mx-2 text-white"initial={{backgroundColor : "black"}} whileHover={{opacity : 0.8, y : "-2px"}} transition={{duration : 0.1}} whileTap={{y : "0px"}}>Join Now</motion.a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}