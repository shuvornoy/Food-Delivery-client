import React from 'react';
import quote from '../../../assets/icons/quote.png';
import people1 from '../../../assets/images/avatar.png';
import people2 from '../../../assets/images/avatar.png';
import people3 from '../../../assets/images/avatar.png';
import Review from './Review';


const Testimonial = () => {

    const reviews = [
        {
            _id: 1, 
            name: 'Winson Herry',
            img: people1,
            review: 'Having good restaurant reviews is crucial these days. It is not just making our decision to pick one easier, it is also helping the restaurant be more successful.',
            location: 'California'
        },
        {
            _id: 2, 
            name: 'Winson Herry',
            img: people2,
            review: 'Having good restaurant reviews is crucial these days. It is not just making our decision to pick one easier, it is also helping the restaurant be more successful.',
            location: 'California'
        },
        {
            _id: 3, 
            name: 'Winson Herry',
            img: people3,
            review: 'Having good restaurant reviews is crucial these days. It is not just making our decision to pick one easier, it is also helping the restaurant be more successful.',
            location: 'California'
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-error font-bold " >CLIENT</h4>
                    <h2 className="text-4xl">Our Happy SELLERS</h2>
                </div>
                <figure>
                    <img className=' lg:w-48' src={quote} alt="logo" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;