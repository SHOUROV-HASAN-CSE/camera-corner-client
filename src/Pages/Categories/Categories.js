import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import CategoriesCard from './CategoriesCard';
import CategoriesModal from './CategoriesModal';

const Categories = () => {

  const [booking, SetBooking] = useState(null);

  const {data:categories=[]} = useQuery({
      queryKey: ['categories'],
      queryFn: () => fetch('http://localhost:5000/categories')
      .then(res =>res.json())
  });



  return (
    <div className='my-16'>
    <div className='text-center mb-12'>
        <p className="text-6xl font-semibold text-[#003144]">Used Camera Category</p>
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