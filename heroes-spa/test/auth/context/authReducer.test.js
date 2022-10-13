import { authReducer } from "../../../src/auth"
import { types } from "../../../src/auth/types/types";
/**
 * TAREA
 * 
 * # Prueba en authReducer
 *  -debe de retornar el estado por defecto
 *  -debe de (login) llamar el login autenticar y establecer el user
 *  -debe de (logout) borrar el name del usuario y logged en false 
 *
 */
describe('Pruebas en authReducer', () => {

    
    test('debe de retornar el estado por defecto', () => { 
        
        const state = authReducer('Oscar',{});
        expect(state).toBe('Oscar');
     });

    test('debe de (login) llamar el login autenticar y establecer el user', () => { 

        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: 'Oscar Navarro'
            }
        };

        const newUser = authReducer({}, action);
        
        expect(newUser.logged).toBe(true);
     });

    test('debe de (logout) borrar el name del usuario y logged en false ', () => { 

        const action = {
            type: types.logout,
            
        };
        const userOut = authReducer({}, action);
        expect(userOut.logged).toBe(false);
     });

})