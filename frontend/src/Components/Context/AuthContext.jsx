import React, { createContext, useEffect, useReducer } from 'react'
import toast from 'react-hot-toast';
import { API } from '../Constant/Network';
import { Url } from '../Constant/Url'

export const AuthContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            return { ...state, user: null }
        default:
            return state;
    }
}


const ParentAuthContext = ({ children }) => {
    const initialState = { user: null }
    const [state, dispatch] = useReducer(reducer, initialState)

    function Login(data) {
        dispatch({ type: "LOGIN", payload: data })
    }

    function Logout() {
        localStorage.removeItem("my-token")
        dispatch({ type: "LOGOUT" })
        toast.success("Logout Successful")
    }

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("my-token"))

        const headers = { Authorization: 'Bearer ' + token }

        async function getCurrentUser() {
            try {
                const response = await API.get(Url.currentUser)
                if (response.data?.success) {
                    console.log(response.data?.user, "response.data.user")
                    Login(response?.data?.user)
                }
            } catch (error) {
                toast.error(error?.response?.data?.message)
                console.log("error :", error)
            }
        }

        if (token) {
            getCurrentUser();
        }
    }, [])

    return (
        <AuthContext.Provider value={{ state, Login, Logout }}>
            {children}
        </AuthContext.Provider >
    )
}

export default ParentAuthContext;
