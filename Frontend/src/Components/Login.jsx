import { Tooltip } from "bootstrap/dist/js/bootstrap.bundle.min"
import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import api from "../utils/api";

export const Login = () => {
    const detailsRef = useRef();
    const usernameRef = useRef();
    const navigate = useNavigate();
    const {setUser} = useAuth();
    const [isSubmiting, setIsSubmiting] = useState(false)

    useEffect(() => {
        const detailstooltip = new Tooltip(detailsRef.current, {
        boundary: document.body
        });

        return () => detailstooltip.dispose();
    }, []);

    useEffect(() => {
        const usernametooltip = new Tooltip(usernameRef.current, {
        boundary: document.body
        });

        return () => usernametooltip.dispose();
    }, []);

    const [loginData, setLoginData] = useState({
        identifier: '',
        password : '',
        rememberMe : false
    });

    const [error, setError] = useState({
        identifier: false,
        password : false
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setLoginData({...loginData, [name]: value})

        setError((prev) => ({
            ...prev,

            [name]: false
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmiting(true)

        if (!loginData.identifier.trim() || !loginData.password.trim()) {
            setIsSubmiting(false)
            setError({
            identifier: !loginData.identifier.trim(),
            password: !loginData.password.trim()
            });
            return;
        }

       try {
        const res = await api.post('/login', loginData)

        setUser(res)

        navigate('/Home')
       } catch (error) {
        if(error.status === 403) {
            setError({
                password: true
            })
        } else if (error.status === 404) {
            setError({
                identifier: true
            })
        }
       } finally {
        setIsSubmiting(false)
       }
    }

    const handleNav = () => {
         navigate('/Home')
    }

    return (
        <>
            <div className="container-fluid">
                <div className="col p-4 nav-img-border">
                        <img src="/assets\Logo2.svg" className="nav-img" alt="Star Bucks" onClick={handleNav} style={{cursor : 'pointer'}}/>
                    </div>
            </div>
            <div className="container">
                <div className="row justify-content-center py-5">
                    <div className="py-5" style={{width : '460px'}}>
                        <div className="d-flex justify-content-center mb-5">
                            <h2 className="text-black fw-bold">Sign in or create an account</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card text-break">
                                <div className="card-body d-flex flex-column gap-5">
                                    <div className="col">
                                        <div className="d-flex flex-column gap-4">
                                            <div className="form-floating">
                                                <input type="text" className={`form-control text-black fw-semibold fs-5 ${error.identifier ? 'is-invalid' : ''}`} onChange={handleChange} name="identifier" value={loginData.email} id="userName" placeholder="* Username or email address" style={{borderColor : 'black'}}/>
                                                <label htmlFor="userName" className="text-black"><span className="text-success fw-bolder">*</span> Username or email address</label>
                                                {error.identifier && (
                                                    <div className="text-danger fs-6 mt-1">
                                                        Invalid username or email.
                                                    </div>
                                                )}
                                            </div>
                                            <div className="form-floating">
                                                <input type="password" className={`form-control text-black fw-semibold fs-5 ${error.password ? 'is-invalid' : ''}`} onChange={handleChange} name="password" id="password" placeholder="* Password" style={{borderColor : 'black'}} autoComplete="off"/>
                                                <label htmlFor="password" className="text-black"><span className="text-success fw-bolder">*</span> Password</label>
                                                {error.password && (
                                                    <div className="text-danger fs-6 mt-1">
                                                        Invalid password.
                                                    </div>
                                                )}
                                            </div>
                                            <div className="d-flex flex-column gap-3">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input border-success fs-5" name="rememberMe" onChange={handleChange} checked={loginData.rememberMe} id="termsCheck"/>
                                                <label htmlFor="termsCheck" className="fw-semibold text-black"style={{cursor : 'pointer'}}>Keep me signed in. <motion.button whileHover={{borderBottom : '0px'}} whileTap={{borderBottom : '0px'}} transition={{duration : 0}} type="button" ref={detailsRef} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-custom-class="details-tooltip" data-bs-title="Checking this box will reduce the number of times you’re asked to sign in. To keep your account secure, use this option only on your personal devices." className="fw-bold fs-6 p-0" style={{color : '#00754A', border : '0px', borderBottom : '1.8px solid'}}>Details</motion.button></label>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="py-4 text-break col d-flex">
                                            <div className="d-flex flex-column">
                                                <motion.button whileHover={{borderBottom : '0px'}} whileTap={{borderBottom : '0px'}} transition={{duration : 0}} type="button" ref={usernameRef} data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="name-tooltip" data-bs-title="You can now use your email instead of a username." className="fw-bold p-0" style={{border : '0px', borderBottom : '1.8px solid', color : '#00754A'}}>Forgot your username?</motion.button>
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-end">
                                            <motion.button whileHover={{backgroundColor : 'black'}} className="btn border-0 p-3 fw-bold text-white fs-5 rounded-pill" style={{backgroundColor : '#00754A'}} disabled={isSubmiting}>{isSubmiting ? 'Signing in...' : 'Sign in'}</motion.button>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="col justify-content-center d-flex">
                                        <div className="d-flex flex-column justify-content-center gap-2">
                                            <h4 className="text-uppercase text-center fw-bold fs-5" style={{color : '#00754A'}}>Join Starbucks® Rewards</h4>
                                            <p className="text-center fw-semibold">As a member, start earning free food and drinks, unlock our best offers and celebrate your birthday with a treat from us. Best of all, it's free to join.</p>
                                            <motion.a href="SignUp" className="btn fw-bold border border-2 border-black rounded-5 mx-2" whileHover={{backgroundColor : "#B8FFB8", y : "-2px"}} transition={{duration : 0.1}} whileTap={{backgroundColor : "white", y : "0px"}}>Join Now</motion.a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}