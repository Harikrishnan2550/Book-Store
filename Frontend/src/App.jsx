import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateBook from './Pages/CreateBook'
import ShowBook from './Pages/ShowBook'
import NewBook from './Pages/NewBook'
import Edit from './Pages/Edit'
import Delete from './Pages/Delete'


function App() {
  return (
    <div>

    <BrowserRouter>
    <Routes>
    <Route path='/' element={<CreateBook/>}></Route>
    <Route path='/book/details/:id' element={<ShowBook/>}></Route>
    <Route path='/book/create' element={<NewBook/>}></Route>
    <Route path='/book/edit/:id' element={<Edit/>}></Route>
    <Route path='/book/delete/:id' element={<Delete/>}></Route>
    </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App
