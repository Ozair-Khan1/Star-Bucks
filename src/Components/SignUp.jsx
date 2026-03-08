import { motion } from "framer-motion"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { account, ID } from "../appwrite";
import { useAuth } from "../AuthContext";

export const SignUp = () => {

    const [isSubmitting, setIsSubmiting] = useState(false)

    const {setUser} = useAuth()
    
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        passwordLength : '',
        termsCheck : ''
    });

    const [error, setError] = useState({
        firstName : false,
        lastName : false,
        email : false,
        password : false,
        termsCheck : false,
        passwordLength : false
    });

    const [exists, setExists] = useState(false)

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (name === 'email') {
            setExists(false)
        }

        if (name === 'password') {
            setError((prev) => ({
                ...prev,

                password: false,
                passwordLength: false
            }))
        } else if (error[name]) {
            setError((prev) => ({
                ...prev,

                [name]: false
            }))
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const newError = {
            firstName : formData.firstName.trim() === '',
            lastName : formData.lastName.trim() === '',
            email : !formData.email.includes("@") || formData.email.trim() === '',
            password : formData.password.trim() === '',
            termsCheck : !formData.termsCheck === true,
            passwordLength : formData.password.length > 0 && formData.password.length < 8
        };

        setError(newError)

        const hasError = Object.values(newError).includes(true)

        if (hasError) {
            setIsSubmiting(false)
            return
        }

        try {
            const fullName = `${formData.firstName} ${formData.lastName}`;

            await account.create(
                ID.unique(),
                formData.email,
                formData.password,
                fullName
            );

            setIsSubmiting(true)

            await account.createEmailPasswordSession(formData.email, formData.password);

            const loggedInUser = await account.get();
            setUser(loggedInUser)

            navigate('/Home')

        } catch (err) {
            if (err.code === 409) {
                setExists(true);
            } else if (err.code === 401) {
                navigate('/Home')
            } else if (err.code === 429) {
                alert('Something went wrong, Please try again')
            } else {
                console.log(err.message)
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
                        <div className="d-flex flex-column align-items-center justify-content-center mb-5">
                            <h2 className="text-black fw-bold mb-5">Create An Account</h2>
                            <span className="fs-5 d-none d-lg-block d-xl-block text-uppercase fw-bold" style={{color : '#00000094'}}>Starbucks® Rewards</span>
                            <span className="text-body-secondary text-center mt-2">Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and <motion.a whileHover={{textDecoration : 'none'}} href="Reward" className="text-body-secondary">more</motion.a>.</span>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card text-break">
                                <div className="card-body d-flex flex-column gap-5">
                                    <div className="col">
                                        <h4 className="text-black mb-4">Personal Information</h4>
                                        <div className="d-flex flex-column gap-4">
                                            <div className="form-floating">
                                                <input type="text" className={`form-control text-black fw-semibold fs-5 ${error.firstName ? 'is-invalid' : ''}`} name="firstName" value={formData.firstName} onChange={handleChange} id="firstName" placeholder="* First Name" autoComplete="true" style={{borderColor : 'black'}}/>
                                                <label htmlFor="firstName" style={{color : 'black'}}><span className="text-success fw-bolder">*</span> First Name</label>
                                                {error.firstName && (
                                                    <div className="text-danger fs-6 mt-1">
                                                    Please enter your first name.
                                                    </div>
                                                )}
                                            </div>
                                            <div className="form-floating">
                                                <input type="text" className={`form-control text-black fw-semibold ${error.lastName ? 'is-invalid' : ''}`} fs-5 name="lastName" onChange={handleChange} value={formData.lastName} id="lastName" placeholder="* Last Name" autoComplete="true" style={{borderColor : 'black'}}/>
                                                <label htmlFor="LastName" style={{color : 'black'}}><span className="text-success fw-bolder">*</span> Last Name</label>
                                                {error.lastName && (
                                                    <div className="text-danger fs-6 mt-1">
                                                    Please enter your last name.
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h4 className="text-black mb-4">Account Security</h4>
                                        <div className="d-flex flex-column gap-4">
                                            <div className="form-floating">
                                                <input type="email" className={`form-control text-black fw-semibold ${error.email ? 'is-invalid' : ''}`} fs-5 name="email" onChange={handleChange} value={formData.email} id="email" placeholder="* Email Address" autoComplete="true" style={{borderColor : 'black'}}/>
                                                <label htmlFor="email" style={{color : 'black'}}><span className="text-success fw-bolder">*</span> Email Address</label>
                                                {error.email && (
                                                    <div className="text-danger fs-6 mt-1">
                                                    Please enter your email.
                                                    </div>
                                                )}
                                                {exists && (
                                                    <div className="text-danger fs-6 mt-1">
                                                    This email already exists
                                                    </div>
                                                )}
                                            </div>
                                            <div className="form-floating">
                                                <input type="password" className={`form-control text-black fw-semibold ${error.password ? 'is-invalid' : ''} ${error.passwordLength ? 'is-invalid' : ''}`} fs-5 name="password" onChange={handleChange} value={formData.password} id="password" placeholder="* Password" autoComplete="true" style={{borderColor : 'black'}}/>
                                                <label htmlFor="password" style={{color : 'black'}}><span className="text-success fw-bolder">*</span> Password</label>
                                                {error.password && (
                                                    <div className="text-danger fs-6 mt-1">
                                                    Please Enter Your Password
                                                    </div>
                                                )}
                                                {error.passwordLength && (
                                                    <div className="text-danger fs-6 mt-1">
                                                    Password should be greater than 8 characters
                                                    </div>
                                                )}
                                                <p className="d-flex px-2 text-black py-2">Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h5 className="text-body-secondary text-uppercase mb-4">Collect More Stars & Earn Rewards</h5>
                                        <div className="d-flex flex-column gap-3">
                                            <p className="text-black fw-semibold">Email is a great way to know about offers and what’s new from Starbucks.</p>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input border-success fs-5" value="" id="emailCheck"/>
                                                <label htmlFor="emailCheck" className="fw-semibold" style={{cursor : 'pointer'}}>Yes, I’d like email from Starbucks</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h5 className="text-body-secondary text-uppercase mb-4">Terms of Use</h5>
                                        <div className="d-flex flex-column gap-3">
                                            <div className="form-check">
                                                <input type="checkbox" className={`form-check-input border-success fs-5 ${error.termsCheck ? 'is-invalid' : ''}`} name="termsCheck" checked={formData.termsCheck} onChange={handleChange} id="termsCheck"/>
                                                <label htmlFor="termsCheck" className={`fw-semibold ${error.termsCheck ? 'text-danger' : 'text-black'}`} style={{cursor : 'pointer'}}>I agree to the Starbucks® Rewards Terms and the Starbucks Card Termsand have read the Starbucks Privacy Statement.</label>
                                                {error.termsCheck && (
                                                    <div className="text-danger fs-6">
                                                    You must agree to the terms to continue.
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col justify-content-end d-flex">
                                        <motion.button whileHover={{backgroundColor : 'black'}} className="btn border-0 p-3 fw-bold text-white fs-5 rounded-pill" style={{backgroundColor : '#00754A'}} disabled={isSubmitting}>{isSubmitting ? 'Creating' : 'Create An Account'}</motion.button>
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