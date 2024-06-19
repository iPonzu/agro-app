import React from 'react'
import AppNavigation from './src/navigation/AppNavigation'
// import AuthNavigation from './src/navigation/AuthNavigation'

// export default function App(){
//   const [isAuthenticated, setIsAuthenticated] = useState(false)

//   return isAuthenticated ? <AppNavigation /> : <AuthNavigation />
// }

export default function App(){
  return (
    <AppNavigation />
  )
}