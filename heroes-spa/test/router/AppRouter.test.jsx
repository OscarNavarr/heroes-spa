const { render, screen } = require("@testing-library/react")
const { MemoryRouter } = require("react-router-dom")
const { AuthContext } = require("../../src/auth/context/AuthContext")
const { AppRouter } = require("../../src/router/AppRouter")

describe('Pruebas en <AppRouter/>', () => { 
    
    test('debe de mostrar el login si no está autenticado', () => { 

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getAllByText('Login').length).toBe(2);
    });

    test('debe de mostrar el login si no está autenticado', () => { 
        const contextValue = {
            logged: true,
            user:{
                id:'ABC',
                name:'Oscar Alejandro'
            }
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );  
        expect(screen.getAllByText('Marvel').length).toBe(1);
    });
 })