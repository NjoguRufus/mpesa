import React, { useState } from 'react';

const Dashboard = () => {
    const [showSendRequestModal, setShowSendRequestModal] = useState(false);

    const toggleSendRequestModal = () => {
        setShowSendRequestModal(!showSendRequestModal);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/5 bg-gray-50 p-5">
                {/* Profile Section */}
                <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                        <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                            <span className="text-gray-500 font-semibold">p</span>
                        </div>
                        <div>
                            <h4 className="text-gray-800 font-semibold">Bobbie Thiel III</h4>
                            <p className="text-gray-500 text-sm">435-419-7820</p>
                        </div>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="space-y-4">
                    <a href="#" className="flex items-center space-x-3 text-green-600 font-semibold">
                        <i className="fas fa-home"></i>
                        <span>Home</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-green-600">
                        <i className="fas fa-exchange-alt"></i>
                        <span>Transact</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-green-600">
                        <i className="fas fa-cogs"></i>
                        <span>Services</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-green-600">
                        <i className="fas fa-chart-line"></i>
                        <span>Grow</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-green-600">
                        <i className="fas fa-cog"></i>
                        <span>Settings</span>
                    </a>
                </nav>

                {/* Footer */}
                <div className="mt-auto">
                    <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between">
                        <img src="path/to/logo.png" alt="Logo" className="h-8" />
                        <div className="text-gray-500 text-sm">
                            <p>The future of money</p>
                            <p>v1.0.3</p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4 text-gray-400">
                        <a href="#" className="hover:text-green-600"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-green-600"><i className="fas fa-globe"></i></a>
                        <a href="#" className="hover:text-green-600"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-4/5 bg-white p-8 relative">
                {/* Money Section */}
                <div className="flex space-x-6 mb-8">
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-1/4">
                        <h4 className="text-gray-600">Current Balance</h4>
                        <h1 className="text-3xl font-bold text-gray-800">0.00 /=</h1>
                        <p className="text-gray-500 mt-2">Available Fuliza balance</p>
                        <p className="text-gray-500">Ksh: 0.00</p>
                    </div>
                    <div className="flex space-x-6 w-3/4">
                        <QuickAction label="SEND & REQUEST" color="bg-green-100" iconColor="text-green-600" onClick={toggleSendRequestModal} />
                        <QuickAction label="PAY" color="bg-blue-100" iconColor="text-blue-600" />
                        <QuickAction label="WITHDRAW" color="bg-red-100" iconColor="text-red-600" />
                        <QuickAction label="AIRTIME" color="bg-teal-100" iconColor="text-teal-600" />
                    </div>
                </div>

                {/* Mpesa Statement Section */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h4 className="text-gray-600 font-semibold mb-4">Mpesa statement</h4>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-500">
                                <th><input type="checkbox" /></th>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Albert Simonis</td>
                                <td>622.00</td>
                                <td><span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">Sent</span></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Amelia Torphy</td>
                                <td>961.00</td>
                                <td><span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">Sent</span></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Ana Conn</td>
                                <td>700.00</td>
                                <td><span className="bg-red-100 text-red-600 px-2 py-1 rounded-full">Failed</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Total Spent Section */}
                <div className="mt-8">
                    <h4 className="text-gray-600 font-semibold mb-4">Total spent in August</h4>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <img src="path/to/chart.png" alt="Chart" />
                    </div>
                </div>

                {/* Send & Request Modal */}
                {showSendRequestModal && (
                    <SendRequestModal onClose={toggleSendRequestModal} />
                )}
            </div>
        </div>
    );
};

const QuickAction = ({ label, color, iconColor, onClick }) => (
    <button onClick={onClick} className={`flex flex-col items-center justify-center ${color} p-4 rounded-lg shadow-sm hover:shadow-md w-full`}>
        <div className={`rounded-full ${iconColor} h-10 w-10 flex items-center justify-center mb-2`}>
            <i className={`fas fa-arrow-right`}></i>
        </div>
        <span className="text-gray-600 font-semibold">{label}</span>
    </button>
);

const SendRequestModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-3/5 p-6 relative">
                <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
                    &times;
                </button>
                <h2 className="text-lg font-semibold text-green-600 mb-4">SEND & REQUEST</h2>
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                            1
                        </div>
                        <p className="ml-3 text-gray-600">Select Mode</p>
                    </div>
                    <div className="flex space-x-6">
                        <p className="text-gray-400">Phone Number</p>
                        <p className="text-gray-400">Amount</p>
                        <p className="text-gray-400">Confirm</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center cursor-pointer hover:bg-green-100">
                        <i className="fas fa-exchange-alt text-green-600 text-2xl"></i>
                        <span className="ml-3 text-gray-600 font-semibold">Send</span>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center cursor-pointer hover:bg-green-100">
                        <i className="fas fa-arrow-down text-green-600 text-2xl"></i>
                        <span className="ml-3 text-gray-600 font-semibold">Request</span>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center cursor-pointer hover:bg-green-100">
                        <i className="fas fa-globe text-green-600 text-2xl"></i>
                        <span className="ml-3 text-gray-600 font-semibold">Global</span>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center cursor-pointer hover:bg-green-100">
                        <i className="fas fa-network-wired text-green-600 text-2xl"></i>
                        <span className="ml-3 text-gray-600 font-semibold">Another network</span>
                    </div>
                </div>
                <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg w-full hover:bg-green-600">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
