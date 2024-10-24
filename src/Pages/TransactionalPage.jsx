import React from 'react';
import AccountInfo from "../components/AccountInfo";
import MenuOptions from "../components/MenuOptions";
import BottomNavBar from "../components/BottomNavBar";

function TransactionalPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <AccountInfo />
      <MenuOptions />
      <BottomNavBar />
    </div>
  )
}

export default TransactionalPage