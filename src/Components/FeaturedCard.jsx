import { Link } from "react-router-dom";

export const FeaturedCard = ({item}) => {
    return (
            <div className="card border-0">
                <div className="card-img">
                    <img src={item.image} alt={item.title} className="img-fluid" />
                </div>
                <div className="card-body p-4 text-center" style={{backgroundColor : `${item.bg}`}}>
                    <div className="card-title">
                        <p className="fs-3 fw-bold" style={{color : `${item.textColor}`}}>
                            {item.title}
                        </p>
                    </div>
                    <div className="card-text">
                        <p className="fs- fw-semibold" style={{color : `${item.textColor}`}}>
                            {item.text}
                        </p>
                    </div>
                    <div className="card-footer">
                        <Link to='/Menu' className="btn btn-success">Order Now</Link>
                    </div>
                </div>
            </div>
    )
} 