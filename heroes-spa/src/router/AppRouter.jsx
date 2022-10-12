import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/index';
import { HeroesRoutes } from '../heroes/index';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  return (
    <>
        
        <Routes>
            {/**
             * DOS FORMAS DE HACER RUTAS PRIVADAS Y RUTAS PUBLICAS
             */}
             
            <Route path='login/*' element={
              <PublicRoute>
                <Routes>
                  <Route path='/*' element={<LoginPage />}/>
                </Routes>               
              </PublicRoute>
              }
            />

            <Route path='/*' element={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            }/>
            
        </Routes>
    </>
  )
}
