import { UseCart } from "../Data/CartReducer"

export const FeaturedCard = ({item}) => {
    const {dispatch} = UseCart();

    const addToCart = (item) => {
        dispatch({
            type : 'ADD_TO_CART',
            payload : item
        })
    };
    return (
            <div className="card border-0">
                <div className="card-img">
                    <img src={item.image} alt={item.title} className="card-img-top" />
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
                        <button className="btn btn-success">Order Now</button>
                    </div>
                </div>
            </div>
    )
} 