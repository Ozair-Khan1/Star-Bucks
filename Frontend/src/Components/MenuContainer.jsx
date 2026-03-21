function MenuContainer({title, item}) {
    return (
        <div key={item.id} className="col-md-6 mb-4 d-flex align-items-center gap-4">
            <p className="fs-4 fw-bolder text-black mt-4">{title}</p>
            <div className="col-md-4 col-4">
            <img 
                src={item.image} 
                alt={item.name} 
                className="img-fluid rounded-circle" 
            />
            </div>
            <div className="col-md-8">
            <a href="#" className="text-decoration-none text-black fs-5 fw-semibold">
                {item.name}
            </a>
            </div>
        </div>
    )
}

export default MenuContainer