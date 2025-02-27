import { useState } from "react";
import { Home, ShoppingCart, CreditCard, User, BarChart2, Menu } from "lucide-react";

const Sidebar = ({ toggleSidebar, isOpen }) => {
  return (
    <div className={`h-screen bg-green-900 text-white w-64 p-4 fixed transition-transform ${isOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}>
      <h2 className="text-xl font-bold mb-6">SmartMavuno</h2>
      <nav>
        <ul>
          <li className="mb-4 flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <Home /> Dashboard
          </li>
          <li className="mb-4 flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <ShoppingCart /> Orders
          </li>
          <li className="mb-4 flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <CreditCard /> Payments
          </li>
          <li className="mb-4 flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <User /> Profile
          </li>
          <li className="mb-4 flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <BarChart2 /> Analytics
          </li>
        </ul>
      </nav>
    </div>
  );
};

const UserDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    orders: 5,
    balance: "$100.00",
    analytics: "No Data Yet"
  });

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isOpen} />
      <div className="flex-1 md:ml-64 p-6">
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </button>
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome, {userData.name}</p>
        <p className="text-gray-600 mt-2">Orders: {userData.orders}</p>
        <p className="text-gray-600 mt-2">Balance: {userData.balance}</p>
        <p className="text-gray-600 mt-2">Analytics: {userData.analytics}</p>
      </div>
    </div>
  );
};

export default UserDashboard;