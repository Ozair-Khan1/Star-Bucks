import { easeInOut, motion, spring } from "framer-motion"
import { useState } from "react";
import { allData } from "../Data/Data";
import { MenuCard } from "./MenuCards";
import { UseCart } from "../Data/CartReducer";
import { useNavigate } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { MenuFooter } from "./MenuFooter";

export function Menu() {
    const drinks = ['Protein Beverages', 'Hot Coffee', 'Cold Coffee', 'Matcha', 'Hot Tea', 'Cold Tea', 'Refreshers', 'Frappuccino® Blended Beverage', 'Hot Chocolate, Lemonade & More', 'Bottled Beverages']
    const foods = ['Breakfast', 'Bakery', 'Treats', 'Lunch', 'Lite Bites'];
    const coffee = ['Whole Bean', 'Starbucks VIA® Instant', 'Shopping Bag'];
    
    const [filter, setFilter] = useState('Menu');
    const [isBumping, setIsBumping] = useState(false);

    const items = allData
    const currentItem = items[filter]
    
    const {cart, dispatch} = UseCart();
    const navigate = useNavigate()

    const addToCart = (item) => {
        setIsBumping(true)

        setTimeout(() => {
            setIsBumping(false)
        }, 2500)

        dispatch({
            type : 'ADD_TO_CART',
            payload : item
        })
        console.log(cart)
    }

    const onCartClick = () => {
        navigate('/Cart')
    }

    const onFeaturedClick = () => {
        navigate('/Featured')
    }

    return (
        <>
            <section>
                <div className="bg-light border-bottom sticky-top">
                    <div className="container d-flex mx-auto justify-content-center py-2">
                        <ul className="nav nav-underline gap-5 flex-column flex-md-row flex-sm-row flex-lg-row">
                        <li className="nav-item"><motion.a className="nav-link" initial={{color : "black"}} whileHover={{color : "green"}} href="#" onClick={() => setFilter("Menu")} style={{cursor : "pointer"}}><span>Menu</span></motion.a></li>
                        <li className="nav-item"><motion.a className="nav-link" initial={{color : "black"}} whileHover={{color : "green"}} href="#" onClick={onFeaturedClick}>Featured</motion.a></li>
                        <li className="nav-item"><motion.a className="nav-link" initial={{color : "black"}} whileHover={{color : "green"}} href="#">Previous</motion.a></li>
                        <li className="nav-item"><motion.a className="nav-link" initial={{color : "black"}} whileHover={{color : "green"}} href="#">Favorites</motion.a></li>
                        </ul>
                    </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                            <ul>
                                <li className="mt-4 list-unstyled d-flex flex-column gap-2">
                                    <span className="fw-bold fs-5">Fan Favorites</span>
                                    <ul className="p-0">
                                        <motion.a className="text-decoration-none" initial={{color : "#000000a1"}} whileHover={{color : "black"}} style={{cursor : 'pointer'}} onClick={() => setFilter('Trending')}>Trending</motion.a>
                                    </ul>
                                </li>
                                <li className="mt-4 list-unstyled d-flex flex-column gap-2">
                                    <span className="fw-bold fs-5">Fan Favorites</span>
                                    <ul className="p-0 d-flex flex-column gap-3">
                                        {drinks.map((drink) => (
                                            <motion.a className="text-decoration-none" initial={{color : "#000000a1"}} whileHover={{color : "black"}} style={{cursor : 'pointer'}} onClick={() => setFilter(drink)} key={drink}>{drink}</motion.a>
                                        ))}
                                    </ul>
                                </li>
                                <li className="mt-4 list-unstyled d-flex flex-column gap-2">
                                    <span className="fw-bold fs-5">Food</span>
                                    <ul className="p-0 d-flex flex-column gap-3">
                                        {foods.map((food) => (
                                            <motion.a className="text-decoration-none" initial={{color : "#000000a1"}} whileHover={{color : "black"}} style={{cursor : 'pointer'}} onClick={() => setFilter(food)} key={food}>{food}</motion.a>
                                        ))}
                                    </ul>
                                </li>
                                <li className="mt-4 d-flex flex-column gap-2">
                                    <span className="fw-bold fs-5">At Home Coffee</span>
                                    <ul className="p-0 d-flex flex-column gap-3">
                                        {coffee.map((coffee) => (
                                            <motion.a className="text-decoration-none" initial={{color : "#000000a1"}} whileHover={{color : "black"}} style={{cursor : 'pointer'}} onClick={() => setFilter(coffee)} key={coffee}>{coffee}</motion.a>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                <p className="fs-4 fw-bolder text-black mt-4">{filter}</p>
                                {currentItem.map((item) => (
                                    <div key={item.id} className="col-md-6 mb-4 d-flex align-items-center gap-4" style={{cursor : 'pointer'}} onClick={() => filter === "Menu" ? setFilter(item.name) : addToCart(item)}>
                                    <MenuCard item={item}/>
                                    </div>
                                ))}
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid d-flex justify-content-center fixed-bottom py-2 py-lg-3" style={{backgroundColor : "#1E3932"}}>
                        <div className="row d-inline-flex ">
                            <MenuFooter cart={cart} onCartClick={onCartClick}/>
                        </div>
                    </div>
            </section>
        </>
    )
}