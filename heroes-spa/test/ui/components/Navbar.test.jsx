import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui/components/Navbar";


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en el <Navbar/>', () => { 
    
    const contextValue = {
        logged: true,
        user:{
            id:'ABC',
            name:'Oscar Alejandro'
        },
        logout: jest.fn()
    };

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario', () => { 

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        )
        expect( screen.getByText('Oscar Alejandro')).toBeTruthy();
    });
                

    test('debe de llamar el logout y navigate cuando se hace click en el boton', () => { 
   
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );
        
        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});
    });
});