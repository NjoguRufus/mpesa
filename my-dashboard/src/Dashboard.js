import React from 'react';

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/5 bg-gray-50 p-5">
                <div className="flex items-center mb-8">
                    <div className="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center text-gray-500 text-xl">
                        P
                    </div>
                    <div className="ml-4">
                        <p className="font-semibold">Bobbie Thiel III</p>
                        <p className="text-sm text-gray-500">435-419-7820</p>
                    </div>
                </div>
                <nav className="space-y-4">
                    <NavItem label="Home" />
                    <NavItem label="Transact" />
                    <NavItem label="Services" />
                    <NavItem label="Grow" />
                    <NavItem label="Settings" />
                </nav>
                <div className="mt-10">
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <img src="https://via.placeholder.com/50" alt="M-Pesa logo" className="mx-auto mb-4" />
                        <p className="text-sm text-gray-500">The future of money</p>
                        <p className="text-xs text-gray-400">v1.0.3</p>
                    </div>
                    <div className="flex justify-between mt-4 text-gray-400 text-sm">
                        <a href="#">Twitter</a>
                        <a href="#">Web</a>
                        <a href="#">YouTube</a>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-4/5 bg-white p-8">
                {/* Money Section */}
                <div className="flex space-x-6 mb-8">
                    {/* Current Balance */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-1/4">
                        <h2 className="text-gray-600 font-semibold">Current Balance</h2>
                        <p className="text-3xl font-bold mt-4">0.00 /=</p>
                        <p className="text-gray-400 mt-2">Available Fuliza balance</p>
                        <p className="text-gray-600 font-medium">Ksh: 0.00</p>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex space-x-6 w-3/4">
                        <QuickAction label="SEND & REQUEST" color="bg-green-100" iconColor="text-green-600" />
                        <QuickAction label="PAY" color="bg-blue-100" iconColor="text-blue-600" />
                        <QuickAction label="WITHDRAW" color="bg-red-100" iconColor="text-red-600" />
                        <QuickAction label="AIRTIME" color="bg-teal-100" iconColor="text-teal-600" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    {/* Mpesa Statement */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Mpesa statement</h3>
                        <StatementItem name="Albert Simonis" phone="534-374-2329" amount="622.00" />
                        <StatementItem name="Amelia Torphy" phone="202-768-5963" amount="961.00" />
                        <StatementItem name="Ana Conn" phone="302-934-1145" amount="364.00" />
                    </div>

                    {/* Pie Chart */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Total spent in August</h3>
                        <img src="https://via.placeholder.com/300" alt="Pie chart" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ label }) => (
    <div className="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
        <span className="ml-4 text-gray-700 font-medium">{label}</span>
    </div>
);

const QuickAction = ({ label, color, iconColor }) => (
    <button className={`flex flex-col items-center justify-center ${color} p-4 rounded-lg shadow-sm hover:shadow-md w-full`}>
        <div className={`rounded-full ${iconColor} h-10 w-10 flex items-center justify-center mb-2`}>
            <i className={`fas fa-arrow-right`}></i>
        </div>
        <span className="text-gray-600 font-semibold">{label}</span>
    </button>
);

const StatementItem = ({ name, phone, amount }) => (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm mb-4">
        <div className="flex items-center">
            <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center text-gray-500">
                <span>{name.charAt(0)}</span>
            </div>
            <div className="ml-4">
                <p className="font-medium text-gray-700">{name}</p>
                <p className="text-sm text-gray-500">{phone}</p>
            </div>
        </div>
        <div className="text-gray-600">
            <p className="font-medium">{amount}</p>
            <p className="text-sm text-green-500">Sent</p>
        </div>
    </div>
);

export default Dashboard;
