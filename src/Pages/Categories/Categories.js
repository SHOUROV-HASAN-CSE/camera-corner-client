import React, { useEffect, useState } from 'react';
import CategoriesCard from './CategoriesCard';
import CategoriesModal from './CategoriesModal';
import { useSearchParams  } from 'react-router-dom'

const Categories = () => {

  let [searchParams, setSearchParams] = useSearchParams();
  const [booking, SetBooking] = useState(null);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
      fetch(`https://camera-corner-server.vercel.app/categories?name=${searchParams.get('name')}`)
          .then(res => res.json())
          .then(data => setCategories(data))
  },[searchParams]);


  return (
    <div className='my-16 md:mx-20'>       
    <div className='text-center mb-12'>
        <p className="text-6xl font-semibold text-[#003144] font-[Barlow]">Used Camera Category</p>
    </div>
    <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            categories.map(category => <CategoriesCard
                key={category._id}
                category={category}
                SetBooking={SetBooking}
            ></CategoriesCard>)
        }
    </div>
    {
     booking &&   
    <CategoriesModal
    booking={booking}
    SetBooking={SetBooking}
    ></CategoriesModal>
    }
</div>
  );
};

export default Categories;