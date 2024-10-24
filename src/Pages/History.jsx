import React from 'react';
import BottomNavBar from '../components/BottomNavBar';

const History = () => {
  const transactions = [
    { date: '19 OCT 2024, SATURDAY', entries: [
        { type: 'Transfer', description: 'WALLET NUMBER 441044', amount: '$53,546.00', status: 'credit' },
      ]},
      { date: '9 OCT 2024, WEDNESDAY', entries: [
        { type: 'Transfer', description: 'WALLET NUMBER 441044', amount: '$50,600.00', status: 'credit' },
    ]},
    { date: '7 OCT 2024, MONDAY', entries: [
      { type: 'Transfer', description: 'WALLET NUMBER 441044', amount: '$20,600.00', status: 'credit' },
    ]}
   
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-lg mx-auto">
        <div className="text-center">
          <h2 className="text-xl font-bold">$124,746.65</h2>
          <p className="text-gray-500">PREMIER SAVINGS 1590944857</p>
          <p className="text-sm text-gray-500">Wallet Number: 678DD67</p>
          <p className="text-sm text-gray-500">Account Status: REGULAR</p>
        </div>

        {transactions.map((day, idx) => (
          <div key={idx} className="mt-4">
            <h3 className="text-gray-600 font-semibold">{day.date}</h3>
            <ul>
              {day.entries.map((entry, i) => (
                <li key={i} className={`flex justify-between py-2 border-b ${entry.status === 'debit' ? 'text-red-500' : 'text-green-500'}`}>
                  <div>
                    <p className="text-sm font-medium">{entry.description}</p>
                  </div>
                  <div>
                    <p className="text-sm">{entry.amount}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}

       <BottomNavBar/>
      </div>
    </div>
  );
};

export default History;
