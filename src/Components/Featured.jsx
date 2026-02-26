import { FeaturedCard } from "./FeaturedCard"
import { featuredMenuData } from "../Data/Data"

export const Featured = () => {
    const Items = featuredMenuData
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        {Items.map((item) => (
                            <div className="col-md-6 p-4" key={item.id}>
                                <FeaturedCard  item={item}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}