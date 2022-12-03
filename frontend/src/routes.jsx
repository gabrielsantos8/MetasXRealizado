import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard';


const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path='/'
                    element={<Dashboard />}
                />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;