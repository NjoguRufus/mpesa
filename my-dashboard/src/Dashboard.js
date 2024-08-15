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
                <div className="text-gray-600">
                    <h2 className="text-lg font-semibold">Current Balance</h2>
                    <p className="text-2xl font-bold">0.00 /=</p>
                    <p className="text-sm text-gray-400">Available Fuliza balance: Ksh: 0.00</p>
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

export default Dashboard;
