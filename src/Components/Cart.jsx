import { Link, useNavigate } from "react-router-dom"
import { UseCart } from "../Data/CartReducer"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";
import { useAuth } from "../AuthContext";

export const Cart = () => {

    const {user} = useAuth();

    const [showModal, setShowModal] = useState(false)

    const {cart, dispatch} = UseCart()

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
    };

    const clearCart = () => {
        setShowModal(false)
        dispatch({
            type : 'CLEAR_CART'
        })
    }

    const subtotal = cart.reduce((acc, item) => acc + (item.price || 0), 0);
    const tax = subtotal * 0.09;
    const total = subtotal + tax;

    const handleCheckOut = () => {
        setShowModal(true)
    }

    const handleCloseBtn = () => {
        if (user) {
            setShowModal(false)
            dispatch({
                type : 'CLEAR_CART'
            })
        } else {
            setShowModal(false)
        }
    }

    return (
        <>
            <div className="container-fluid min-vh-100 p-0 d-flex flex-column flex-md-row">
                <div className="col-md-4 text-white p-5" style={{ backgroundColor: '#1e3932' }}>
                    <div className="d-flex align-items-center mb-5 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left me-2" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                    <Link to="/Menu" className="fw-bold text-white text-decoration-none">Back to menu</Link>
                    </div>
                    
                    <h2 className="fw-bold mb-4">Review order ({cart.length})</h2>
                    
                    <div className="border border-secondary rounded p-3 mb-4 d-flex justify-content-between align-items-center">
                    <div>
                        <small className="text-secondary d-block">Store</small>
                        <strong>Oasis Travel Center</strong>
                    </div>
                    <i className="bi bi-chevron-right"></i>
                    </div>

                    {/* Pickup Info Boxes */}
                    <div className="row g-2">
                    <div className="col-6">
                        <div className="border border-secondary rounded p-3 text-center">
                        <small className="text-secondary d-block">Pickup method</small>
                        <strong>In store</strong>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="border border-secondary rounded p-3 text-center">
                        <small className="text-secondary d-block">Pickup time</small>
                        <strong>4–7 mins</strong>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-md-8 d-flex flex-column-reverse flex-lg-column flex-xl-column bg-white p-5 text-center">
                    <AnimatePresence>
                        {cart && cart.length === 0 ? (
                            <div className="mt-5 pt-5">
                            <p className="text-muted fs-5">As you add menu items, they'll appear here. You'll have a chance to review before placing your order.</p>
                            <Link to="/Menu" className="btn btn-outline-success rounded-pill px-4 fw-bold">Add items</Link>
                        </div>
                        ) : (
                            cart.map((item, index) => (
                                <motion.div layout initial={{opacity : 0, x : -20}} animate={{opacity : 1, x : 0}} exit={{opacity : 0, x : 50}} transition={{duration : 0.3}} className="col-md-8 mx-auto mt-4" key={`${item.id} - ${index}`}>
                                    <div className="card rounded-4 shadow-lg">
                                        <div className="d-flex flex-column  flex-lg-row text-break">
                                            <div className="col-md-4">
                                                <img src={item.image} className="w-100 rounded-pill img-fluid me-3" />
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
                                </motion.div>
                            ))
                        )}
                    </AnimatePresence>
                    {cart.length > 0 && (
                        <div className="col-md-8 mx-auto">
                            <div className="card rounded-4 shadow-lg p-4 mt-4">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span className="text-muted fs-5">Subtotal</span>
                                    <span className="fw-bold fs-5">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="text-muted fs-5">Tax</span>
                                    <span className="fw-bold fs-5">${tax.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center border-top pt-3">
                                    <h2 className="fw-bolder mb-0">Total</h2>
                                    <h2 className="fw-bolder mb-0">${total.toFixed(2)}</h2>
                                </div>
                                <p className="text-muted mt-4 small">
                                    You authorize this payment to be sent to Wwwwinc, Inc.
                                </p>
                                <button onClick={handleCheckOut} className="btn btn-dark w-100 rounded-pill py-3 mt-2 fw-bold">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                {showModal && (
                    <motion.div animate={{y : [-300, 0]}} className="modal fade mt-0 show d-block" tabIndex='-1' aria-hidden='true' style={{backdropFilter : 'blur(8px)'}}>
                         <div class="modal-dialog modal-dialog-centered">
                             <div class="modal-content" style={{backgroundColor : '#1e3932'}}>
                            <div class="modal-header border-0 d-flex justify-content-between">
                                 <h1 class="modal-title fs-2 fw-semibold text-white">Starbucks</h1>
                                 <button type="button" class="btn-white btn bg-transparent d-inline-flex" onClick={handleCloseBtn}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg></button>
                            </div>
                            {user ? (
                                <div class="modal-body text-white fs-5">
                                    Thank you for ordering
                                </div>
                            ) : (
                                <div class="modal-body text-white fs-5">
                                    Please login or sign up to continue
                                </div>
                            )}
                            {user ? (
                                <div class="modal-footer border-0">
                                    <motion.button className="btn fw-bold border border-2 border-black rounded-5 mx-2" whileHover={{backgroundColor : "#B8FFB8", y : "-2px"}} transition={{duration : 0.1}} whileTap={{backgroundColor : "white", y : "0px"}} style={{backgroundColor : 'white'}} onClick={clearCart}>Close</motion.button>
                                </div>
                            ) : (
                                <div class="modal-footer border-0">
                                    <motion.a href="Login" className="btn fw-bold border border-2 border-black rounded-5 mx-2" whileHover={{backgroundColor : "#B8FFB8", y : "-2px"}} transition={{duration : 0.1}} whileTap={{backgroundColor : "white", y : "0px"}} style={{backgroundColor : 'white'}}>Sign In</motion.a>
                                    <motion.a href="SignUp" className="btn fw-bold border border-2 border-black rounded-5 mx-2 text-white"initial={{backgroundColor : "black"}} whileHover={{opacity : 0.8, y : "-2px"}} transition={{duration : 0.1}} whileTap={{y : "0px"}}>Join Now</motion.a>
                                </div>
                            )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </>
    )
}