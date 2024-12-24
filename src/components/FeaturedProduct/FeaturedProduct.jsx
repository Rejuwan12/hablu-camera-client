
import ProductCard from './ProductCard';

const FeaturedProduct = () => {
    return (
        <div>
            <h2 className='my-12 text-5xl font-bold text-center'>Featured Product</h2>
            <div className='justify-around gap-2 mb-12 lg:flex'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                
                
            </div>
        </div>
    );
};

export default FeaturedProduct;