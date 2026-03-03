import { motion } from "framer-motion"

export const MenuCard = ({item}) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-4" style={{opacity : item.available ? 0.6 : 1}}>
            <motion.img 
                src={item.image} 
                alt={item.name} 
                className="img-fluid rounded-circle" 
                initial={{scale : 1}}
                whileHover={{scale : 1.05}}
                transition={{type : "spring", duration : 0.6}}
            />
            </div>
            <div className="col-md-8" style={{opacity : item.available ? 0.6 : 1}}>
                <h4 className={`fw-bold mb-0 ${item.available === 'Not Available' ? 'text-muted' : ''}`}>
                    {item.name}
                </h4>

                {item.available === 'Not Available' ? (
                    <span className="text-danger fw-bold d-block mt-1">Not Available</span>
                ) : (
                    <>
                   {item.calories && (
                        <p className="text-muted small mb-0">{item.calories} calories</p>
                    )}

                    {item.price >= 0 && (
                        <p className="fw-bold mb-0">${item.price}</p>
                    )}
                    </>
                )}
            </div>
        </>
    )
}