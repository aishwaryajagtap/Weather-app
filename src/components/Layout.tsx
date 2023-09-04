import React from 'react';
import { Outlet } from 'react-router-dom';


type ILayout = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const Layout:React.FC<ILayout> = ({}) => {
  return (
    <>
  
      <Outlet />
    </>
  );
};

export {Layout};