/* eslint-disable react/prop-types */
const ProductCard = ({product}) => {
  return (
    <div>
        
      <div className="shadow-xl card card-compact bg-base-100 ">
        <figure>
          <img
          className="object-cover p-4 h-60"
            src={product?.imageURL}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold">{product?.title}</h2>
          <div className="flex">
          <p>Price: ${product?.price}</p>
          <p>Brand: {product?.brand || product?.category}</p>
          <p>Category: {product?.category}</p>
          <p></p>
          </div>
          <p>Stock: {product?.stock} </p>
          <p>{product?.description.length < 50 ? `${product?.description}` : `${product?.description.slice(0,40)}...`}</p>
          <div className=" card-actions">
            <button className="w-full btn btn-primary btn-outline">Add Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
