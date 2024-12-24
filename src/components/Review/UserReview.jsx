import ReviewCart from "./ReviewCart";


const UserReview = () => {
    return (
        <div>
             <h2 className='my-12 text-5xl font-bold text-center'>Product Review</h2>
          <div className="justify-around lg:flex">
         
            <ReviewCart/>
            <ReviewCart/>
            <ReviewCart/>
          </div>
        </div>
    );
};

export default UserReview;