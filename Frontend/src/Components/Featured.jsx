import { FeaturedCard } from "./FeaturedCard"
import { featuredMenuData } from "../Data/Data"
import { motion } from "framer-motion"

export const Featured = () => {
    const Items = featuredMenuData
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        {Items.map((item) => (
                            <motion.div whileInView={{opacity : [0, 1]}} transition={{duration : 0.8}} className="col-md-6 p-4" key={item.id}>
                                <FeaturedCard  item={item}/>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}