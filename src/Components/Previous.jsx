import { UseCart } from "../Data/CartReducer";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { MenuFooter } from "./MenuFooter";

export const Previous = () => {
    const userExist = JSON.parse(localStorage.getItem('CurrentUser'));
    const navigate = useNavigate();

    const user = userExist ? JSON.parse : ""

    const {cart, dispatch} = UseCart();

    const addToCart = (item) => {
        dispatch({
            type : 'ADD_TO_CART',
            payload : item
        })
    }

    const removeFromCart = (item) => {
        dispatch({
            type : 'REMOVE_FROM_CART',
            payload : item.id
        })
    }

    const onCartClick = () => {
        navigate('/Cart')
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="d-flex justify-content-center">
                        {cart && cart.length === 0 && user && (
                                <div className="mt-5 pt-5">
                                    <p className="text-muted fs-5">You haven't placed any order yet.</p>
                                    <Link to="/Menu" className="btn btn-outline-success rounded-pill px-4 fw-bold">Add items</Link>
                                </div>
                        )}
                    </div>
                    {user ? (
                        <div className="col-md-8">
                            {cart.map((item, index) => (
                                <motion.div layout initial={{opacity : 0, x : -20}} animate={{opacity : 1, x : 0}} exit={{opacity : 0, x : 50}} transition={{duration : 0.3}} className="col-md-8 mx-auto mt-4" key={`${item.id} - ${index}`}>
                                    <div className="card rounded-4 shadow-lg">
                                        <div className="d-flex flex-column flex-lg-row text-break">
                                            <div className="col-md-4">
                                                <img src={item.image} className="w-100 h-100 rounded-pill img-fluid me-3" />
                                            </div>
                                            <div className="col-md-6 mx-auto">
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
                                            <div className="card-footer border-0 gap-3">
                                            <button className="btn rounded-pill text-success" onClick={() => removeFromCart(item)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                                </svg>
                                            </button>
                                            <button className="btn rounded-pill text-success" onClick={() => addToCart(item)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-patch-plus" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5"/>
                                                    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
                                                </svg>
                                            </button>
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
            <div className="container-fluid d-flex justify-content-center fixed-bottom py-2 py-lg-3" style={{backgroundColor : "#1E3932"}}>
                <div className="row d-inline-flex ">
                    <MenuFooter cart={cart} onCartClick={onCartClick}/>
                </div>
            </div>
        </>
    )
}