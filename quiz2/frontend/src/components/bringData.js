function Products(props){
    return(
        <div className="contact-card">
        <img src={props.ImgUrl} alt=""/>
        <h3>{props.src} </h3>
       <h3>{props.alt} </h3>
       <h5>{props.title} </h5>
     </div>
    )
}

export default Products;