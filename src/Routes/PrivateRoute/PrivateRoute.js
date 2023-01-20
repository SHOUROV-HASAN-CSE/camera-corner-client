import React, { useContext } from 'react';
import { Dna } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
      return (
          <div className='flex justify-center items-center'>
             <Dna
                visible={true}
                height="200"
                width=""
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
          </div>
          )
  }

    if (user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};


export default PrivateRoute;