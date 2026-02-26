import { easeInOut, motion, spring } from "framer-motion"

export const MenuFooter = ({cart, onCartClick}) => {
    return (
      <motion.div key={cart.length} animate={ {scale : [1.3, 0.9, 1]}} whileHover={{opacity : 0.5}} transition={{type : spring, duration : 1.2, times : [0.5, 1, 1.2], ease : easeInOut}} style={{display : "flex", justifyContent : "center", alignItems : "center",  position : "relative", width : "clamp(50px, 10vw, 60px)", height : "clamp(50px, 10vw, 60px)", borderRadius : "12px", cursor : "pointer"}} className="text-white" onClick={onCartClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
        </svg>
        {cart.length > 0 && (
            <motion.span animate={{opacity : [0.5, 1]}} className="position-absolute bottom-50 start-100 top-0 left-0 d-flex translate-middle align-items-center badge rounded-pill" style={{backgroundColor : "#00754A", fontSize : "clamp(0.6rem, 2vw, 0.8rem)", padding : "0.3em 0.6em"}}>
                    {cart.length}
            </motion.span>
        )}
     </motion.div>      
    )
}