import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe('Pruebas en el <PrivateRoute/>', () => { 
    
    test('Debe de mostrar el children si está autenticado ', () => { 
        
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user:{
                id:'ABC',
                name:'Oscar Alejandro'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue}>

                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta privada')).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalled();
    });
});