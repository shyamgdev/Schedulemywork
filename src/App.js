// IMPORT FROM REACT
import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// IMPORT CSS
import './variables.css';
import './App.css';
// IMPORT SCROLLTOTOP
import ScrollToTop from './ScrollToTop';
// IMPORT COMPONENTS
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MyWork from './components/MyWork';
import TrashWork from './components/TrashWork';
import UpdateWork from './components/UpdateWork';
import { WorkContext } from './GlobalContext';

export default function App() {
  const workCx = useContext(WorkContext)
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route exact path="/" element={
          <>
            <Header/>
            <Sidebar/>
            <main>
              <MyWork/>
            </main>
            { workCx.updateWork !== false && 
            <UpdateWork/>}
          </>
        }>
        </Route>
        <Route exact path="/trash" element={
          <>
            <Header/>
            <Sidebar/>
            <main>
              <TrashWork/>
            </main>
          </>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
