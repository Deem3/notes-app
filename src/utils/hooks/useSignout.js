import { useAuthContext } from "./useAuthContext"
import {useNotesContext} from '../hooks/useNotesContext'

export const useSignout = () => {
    const {dispatch} = useAuthContext()
    const {dispatch: notesDispatch} = useNotesContext()
    const signout = () =>{
        localStorage.removeItem('user')

        dispatch({type: 'SIGNOUT'})
        notesDispatch({type: 'SET_NOTES', payload: null})
    }

    return{signout}
}