import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../src/styles.css';
import TransactionalPage from './Pages/TransactionalPage'
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Transfer from './Pages/Transactions';
import History from './Pages/History';
import ReadMore from './Pages/ReadMore';
import Withdrawal from './Pages/Withdrawal';
import WalletAddress from './Pages/WalletAddress';
import VerifyLogin from './Pages/VerifyLogin';
import AccountLocked from './Pages/AccountLocked';


function App() {
  

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verifylogin" element={<VerifyLogin />} />
        <Route path="/home" element={<TransactionalPage/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/transactions" element={<Transfer />} />
        <Route path="/history" element={<History />} />
        <Route path="/readmore" element={<ReadMore />} />
        <Route path="/withdrawal" element={<Withdrawal/>} />
        <Route path="/withdraw" element={<WalletAddress/>} />
        <Route path="/locked" element={<AccountLocked/>} />
      </Routes>
    </Router>
       
       
    </>
  )
}

export default App
