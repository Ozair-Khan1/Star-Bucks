import { motion } from "framer-motion"

export const MenuCard = ({item}) => {
    return (
        <>
            <div className="col-md-4 col-4">
            <motion.img 
                src={item.image} 
                alt={item.name} 
                className="img-fluid rounded-circle" 
                initial={{scale : 1}}
                whileHover={{scale : 1.05}}
                transition={{type : "spring", duration : 0.6}}
            />
            </div>
            <div className="col-md-8">
                <a className="text-decoration-none text-black fs-5 fw-semibold">
                    {item.name}
                </a>
            </div>
        </>
    )
}