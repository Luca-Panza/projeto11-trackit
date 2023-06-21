import { useState, useContext } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppProvider } from './context/AppContext';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import TodayPage from './pages/TodayPage/TodayPage.jsx';
import HabitsPage from './pages/HabitsPage/HabitsPage.jsx';
import HistoryPage from './pages/HistoryPage/HistoryPage.jsx';

export default function App() {

  return (
    <>
      <BrowserRouter>
      <AppProvider>
        <Routes>
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/' element={<LoginPage />} />
            <Route path='/today' element={<TodayPage />} />
            <Route path='/habits' element={<HabitsPage />} />
            <Route path='/history' element={<HistoryPage />} />
        </Routes>
      </AppProvider>
      </BrowserRouter>
    </>
  )
}

