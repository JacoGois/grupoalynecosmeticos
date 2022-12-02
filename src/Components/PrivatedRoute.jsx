import React from 'react'
import { Navigate, Route as ReactRoute } from "react-router-dom";
import Loader from './Loader';

const PrivatedRoute = ({ privated = false , children }) => {
      
      const setKeyToLocalStorage = (users) => {
        window.localStorage.setItem(
            "user",
          JSON.stringify(Array.from(users.entries()))
        );
      };
    
      if (isAuthenticated ) {
        return children ;
      }
      if (!isAuthenticated) {
        return <Navigate to="/signin"  />
        }
    }


export default PrivatedRoute