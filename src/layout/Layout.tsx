import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
    activePage: string;
    onPageChange: (page: string) => void;
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ activePage, onPageChange, children }) => {
    return (
        <div className="min-h-screen bg-dark-blue">
            <div className="flex">
                <Sidebar activePage={activePage} onPageChange={onPageChange} />
                <main className="flex-1 lg:ml-0 min-h-screen">
                    <div className="p-6 lg:p-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;