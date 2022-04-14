// import { createContext, useReducer } from 'react'
// import authReducer from './AuthReducer'
// import {
//   getAuth,
//   createtUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
// } from 'firebase/auth'
// import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
// import { auth, db } from '../../firebase.config'

// const AuthContext = createContext()

// export const AuthProvider = ({ children }) => {
//   const initialState = {
//     user: {},
//     isAuthenticated: false,
//     isLoading: false,
//   }

//   const [state, dispatch] = useReducer(authReducer, initialState)

//   const createUser = async (userData) => {
//     const userCredential = await createtUserWithEmailAndPassword(
//       auth,
//       userData.email,
//       userData.password
//     )

//     const userCopy = userCredential.user
//     const userDataCopy = { ...userData }
//     delete userDataCopy.password
//     userDataCopy.timestamp = serverTimestamp()

//     updateProfile(auth.currentUser, {
//       displayName: userData.name,
//     })

//     await setDoc(doc(db, 'users', userCopy.uid), userDataCopy)

//     dispatch({
//       type: 'CREATE_USER',
//       payload: userCopy,
//     })
//   }

//   return <AuthContext.Provider value={{ ...state }}>{children}</AuthContext.Provider>
// }

// export default AuthContext
