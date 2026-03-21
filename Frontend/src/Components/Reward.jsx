import { AnimatePresence, motion } from "framer-motion"
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom"
import { favoritesFree } from "../Data/Data"
import { useState } from "react"

export function Reward() {
    const [filter, setFilter] = useState(25)

    const favorites = favoritesFree
    const currentFavorites = favorites.filter(item => item.price === Number(filter))

    const favoritesBtn = [
        {
            text : 25,
            star : '★'
        },
        {
            text : 100,
            star : '★'
        },
        {
            text : 200,
            star : '★'
        },
        {
            text : 300,
            star : '★'
        },
        {
            text : 400,
            star : '★'
        }
    ]

    const setNavigate = useNavigate()
    const navigate = () => {
        setNavigate('/')
    }

    const [isloaded, setIsLoaded] = useState(false)
    return (
        <>
            <section>
                <div className="sticky-top">
                    <div className="container-fluid d-flex justify-content-center mx-auto py-2" style={{backgroundColor : "#1E3932"}}>
                        <p className="text-white fw-bolder fs-4 text-center m-0">Starbucks® Rewards</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row mx-auto justify-content-center">
                        <motion.div whileInView={{opacity : [0, 1]}} transition={{duration : 0.8}} className="col-md-6 p-5 text-break d-flex flex-column gap-4">
                            <p className="display-5 fw-bold" style={{color : "#32462F"}}>It’s a great day for free coffee</p>
                            <p className="fs-5 fw-semibold" style={{color : "#32462F"}}>Sign up and start enjoying the perks of Starbucks® Rewards</p>
                            <div className="col-md-4">
                                <motion.button className="btn rounded-pill fw-bold text-white" initial={{backgroundColor : "#00754A"}} whileHover={{backgroundColor : "#036640", y : "-4px"}} transition={{type : "spring", duration : 0.5}} onClick={navigate}>Join Now</motion.button>
                            </div>
                        </motion.div>
                        <motion.div whileInView={{opacity : [0, 1]}} transition={{duration : 0.8}} className="col-md-6 p-4 d-flex align-items-center">
                            <img src="/assets\rewards-hero.png" alt="" className="img img-fluid"/>
                        </motion.div>
                        <motion.div whileInView={{opacity : [0, 1]}} transition={{duration : 0.8}} className="col-md-8 d-flex justify-content-center py-5">
                            <div className="card border-0">
                                <div className="card-body border-0">
                                    <div className="card-title justify-content-center d-flex flex-column">
                                        <h1 className="text-black text-center fs-2 pb-2">Getting started is easy</h1>
                                        <span className="text-center fw-semibold">Earn Stars and get rewarded in a few easy steps.</span>
                                    </div>
                                    <div className="d-flex flex-column flex-lg-row flex-xl-row justify-content-center align-items-start gap-5 pt-5">
                                        <div className="col-lg-7 col-md-12">
                                            <div className="card border-0 d-flex flex-row flex-lg-column flex-xl-column align-items-center justify-content-center text-break">
                                                <div className="card-img col-md-2 d-flex mx-auto align-self-start mt-4" style={{width : 48, height : 48}}>
                                                        <img src="/rewards assets\getting-started-1.jpg" alt="image" className="img-fluid"/>
                                                </div>
                                                <div className="card-body border-0 w-100 mt-3 text-break">
                                                    <h4 className="card-title text-start text-lg-center text-xl-center pb-3 w-100">Create An Account</h4>
                                                    <p className="text-start text-lg-center text-xl-center fw-semibold w-100">To get started, <Link to='/' style={{color : '#006241'}}>Join Now</Link>. You can also Join in the app to get access to the full range of Starbucks® Rewards benefits.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-12">
                                            <div className="card border-0 d-flex flex-row flex-lg-column flex-xl-column align-items-center justify-content-center text-break">
                                                <div className="card-img col-md-2 d-flex mx-auto align-self-start mt-4" style={{width : 48, height : 48}}>
                                                        <img src="/rewards assets\getting-started-2.jpg" alt="image" className="img-fluid"/>
                                                </div>
                                                <div className="card-body border-0 w-100 mt-3 text-break">
                                                    <h4 className="card-title text-start text-lg-center text-xl-center pb-3 w-100">Order and pay how you’d like</h4>
                                                    <p className="text-start text-lg-center text-xl-center fw-semibold w-100">Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-12">
                                            <div className="card border-0 d-flex flex-row flex-lg-column flex-xl-column align-items-center justify-content-center text-break">
                                                <div className="card-img col-md-2 d-flex mx-auto align-self-start mt-4" style={{width : 48, height : 48}}>
                                                        <img src="/rewards assets\getting-started-3.jpg" alt="image" className="img-fluid"/>
                                                </div>
                                                <div className="card-body border-0 w-100 mt-3 text-break">
                                                    <h4 className="card-title text-start text-lg-center text-xl-center pb-3 w-100">Earn Stars, get Rewards</h4>
                                                    <p className="text-start text-lg-center text-xl-center fw-semibold w-100">As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
                                                </div>
                                            </div>
                                        </div>                               
                                    </div>
                                </div>
                            </div>
                        </motion.div> 
                        <motion.div whileInView={{opacity : [0, 1]}} transition={{duration : 0.8}} className="w-100 mx-auto py-5">
                            <div className="px-3 d-flex justify-content-center">
                                <h1 className="fs-2 text-black">Get your favorites for free</h1>
                            </div>
                            <div className="mt-5">
                                <div className="d-flex flex-column flex-lg-row flex-xl-row flex-md-row flex-sm-row justify-content-center align-items-center gap-4">
                                    {favoritesBtn.map((item, index) => {
                                        const isActive = filter === item.text;
                                        return (
                                            <motion.a initial='rest' whileHover='hover' whileTap='tap' animate={isActive ? 'hover' : 'rest'} className="btn border-0 d-inline-flex fs-3 position-relative fw-semibold" key={index}>
                                                <motion.span className="d-flex" variants={{rest : {color: 'black', x: 0}, hover: { color: 'black', x : 5 }, tap: { color : 'black', x : 5 }}} transition={{ duration: 0.2 }} onClick={() => setFilter(item.text)}>
                                                {item.text} <span className="text-warning fs-5 d-flex align-self-end mb-1">{item.star}</span>
                                                </motion.span>
                                                <motion.div variants={{hover : {width : '100%'}, tap : {width : '100%'}}} transition={{duration : 0.2, ease : 'easeInOut'}} style={{height : '4px', background : '#00754a', position : 'absolute', bottom : 0, left : 0}}/>
                                            </motion.a>
                                        )
                                    })}
                                </div>
                                <div className="row">
                                    <div style={{backgroundColor : '#d4e9e2', boxShadow : 'inset 0 7px 9px -7px #00000024', minHeight: "320px", position: "relative"}}>
                                        <AnimatePresence mode="wait">
                                            {currentFavorites.map((item) => (
                                                <motion.div initial={{opacity : 0}} animate={{ opacity: 1}} exit={{opacity : 0}} className="col-md-12 px-5 d-flex gap-4 flex-column flex-lg-row flex-xl-row align-items-center justify-content-center mx-auto py-5" key={item.price}>
                                                    <div className="col-md-4 d-flex align-items-center">
                                                        {!isloaded && (
                                                            <div className="placeholder-glow w-100 h-100 position-absolute top-0 start-0">
                                                            <div 
                                                                className="placeholder w-100 h-100 rounded-circle" 
                                                                style={{ backgroundColor: '#e9ecef', minHeight: '100px' }}
                                                            ></div>
                                                            </div>
                                                        )}
                                                        <img src={item.image} alt="image" className="img-fluid" onLoad={() => setIsLoaded(true)}/>
                                                    </div>
                                                    <div className="col-md-4 d-flex flex-column gap-2"> 
                                                        <h4 className="fw-bold">{item.title}</h4>
                                                        <p className="text-black">{item.text}</p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </AnimatePresence>
                                    </div>
                                </div>  
                            </div>
                        </motion.div>
                        <motion.div whileInView={{opacity : [0, 1]}} transition={{duration : 0.8}} className="col-md-8 d-flex justify-content-center py-5">
                            <div className="card border-0">
                                <div className="card-body border-0">
                                    <div className="card-title justify-content-center d-flex flex-column">
                                        <h1 className="text-black text-center fs-2 pb-2">Endless Extras</h1>
                                        <span className="text-center fw-semibold">Joining Starbucks® Rewards means unlocking access to benefits like quick and easy ordering, tasty Rewards and—yes, free coffee.</span>
                                    </div>
                                    <div className="d-flex flex-column flex-lg-row flex-xl-row justify-content-center align-items-start gap-5 pt-5">
                                        <div className="col-lg-7 col-md-12">
                                            <div className="card border-0 d-flex flex-row flex-lg-column flex-xl-column align-items-center justify-content-center text-break">
                                                <div className="card-img-top col-md-2 d-flex mx-auto align-self-start mt-4" style={{width : 112, height : 112}}>
                                                        <img src="/rewards assets\1-fun-freebies.jpg" alt="image" className="img-fluid"/>
                                                </div>
                                                <div className="card-body border-0 w-100 mt-3 text-break">
                                                    <h4 className="card-title text-start text-lg-center text-xl-center pb-3 w-100">Fun freebies</h4>
                                                    <p className="text-start text-lg-center text-xl-center fw-semibold w-100">Not only can you earn free food, drinks and more, look forward to a birthday treat on us.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-12">
                                            <div className="card border-0 d-flex flex-row flex-lg-column flex-xl-column align-items-center justify-content-center text-break">
                                                <div className="card-img-top col-md-2 d-flex mx-auto align-self-start mt-4" style={{width : 112, height : 112}}>
                                                        <img src="/rewards assets\2-order-and-pay-ahead.jpg" alt="image" className="img-fluid"/>
                                                </div>
                                                <div className="card-body border-0 w-100 mt-3 text-break">
                                                    <h4 className="card-title text-start text-lg-center text-xl-center pb-3 w-100">Order & pay ahead</h4>
                                                    <p className="text-start text-lg-center text-xl-center fw-semibold w-100">Master the art of ordering ahead with saved favorites and payment methods.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-12">
                                            <div className="card border-0 d-flex flex-row flex-lg-column flex-xl-column align-items-center justify-content-center text-break">
                                                <div className="card-img-top col-md-2 d-flex mx-auto align-self-start mt-4" style={{width : 112, height : 112}}>
                                                        <img src="/rewards assets\3-get-to-free-faster.jpg" alt="image" className="img-fluid"/>
                                                </div>
                                                <div className="card-body border-0 w-100 mt-3 text-break">
                                                    <h4 className="card-title text-start text-lg-center text-xl-center pb-3 w-100">Get to free faster</h4>
                                                    <p className="text-start text-lg-center text-xl-center fw-semibold w-100">Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
                                                </div>
                                            </div>
                                        </div>                               
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div whileInView={{opacity : [0, 1]}} transition={{duration : 0.8}} className="col-md-8 py-5">
                            <div className="card border-0">
                                <div className="card-body border-0">
                                    <div className="card-title justify-content-center d-flex flex-column">
                                        <h1 className="text-black text-center fs-2 pb-2">Cash or card, you earn Stars</h1>
                                        <span className="text-center fw-semibold">No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</span>
                                    </div>
                                    <div className="d-flex flex-column flex-lg-row flex-xl-row justify-content-center mt-5">
                                        <div className="col-md-4 d-flex flex-column">
                                            <h1 className="text-black mt-3 fw-semibold fs-4">1 <span className="fs-5">★</span> Star per dollar</h1>
                                            <span className="text-black fw-semibold">Pay as you go</span>
                                        </div>
                                        <div className="col-lg-7 col-md-12">
                                            <div className="card border-0">
                                                <div className="card-body border-0 d-flex gap-3">
                                                    <div className="col-md-2" style={{height : 168, width : 128}}>
                                                        <img src="/rewards assets\1st img.png" alt="image" className="img-fluid"/>
                                                    </div>
                                                    <div className="w-100">
                                                        <h4 className="w-100 card-title text-black fw-semibold fs-5 text-start">Scan and pay separately</h4>
                                                        <p className="w-100">Use cash or credit/debit card at the register.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-12">
                                            <div className="card border-0">
                                                <div className="card-body border-0 d-flex gap-3">
                                                    <div className="col-md-2" style={{height : 168, width : 128}}>
                                                        <img src="/rewards assets\2nd img.png" alt="image" className="img-fluid"/>
                                                    </div>
                                                    <div className="w-100">
                                                        <h4 className="w-100 card-title text-black fw-semibold fs-5 text-start">Save payment in the app</h4>
                                                        <p className="w-100">Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr  className="w-100 border-2" style={{color : 'black'}}/>
                                    <div className="d-flex flex-column flex-lg-row flex-xl-row justify-content-center mt-5">
                                        <div className="col-md-4 d-flex flex-column">
                                            <h1 className="text-black mt-3 fw-semibold fs-4">2 <span className="fs-5">★</span> Star per dollar</h1>
                                            <span className="text-black fw-semibold">Add funds in the app</span>
                                        </div>
                                        <div className="col-lg-7 col-md-12">
                                            <div className="card border-0">
                                                <div className="card-body border-0 d-flex gap-3">
                                                    <div className="col-md-2" style={{height : 168, width : 128}}>
                                                        <img src="/rewards assets\3rd img.png" alt="image" className="img-fluid"/>
                                                    </div>
                                                    <div className="w-100">
                                                        <h4 className="w-100 card-title text-black fw-semibold fs-5 text-start">Preload</h4>
                                                        <p className="w-100">To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-12">
                                            <div className="card border-0">
                                                <div className="card-body border-0 d-flex gap-3">
                                                    <div className="col-md-2" style={{height : 168, width : 128}}>
                                                        <img src="/rewards assets\4th img.png" alt="image" className="img-fluid"/>
                                                    </div>
                                                    <div className="w-100">
                                                        <h4 className="w-100 card-title text-black fw-semibold fs-5 text-start">Register your gift card</h4>
                                                        <p className="w-100">Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}