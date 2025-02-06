import Navbar from '@/components/Navbar';
import React from 'react';

const About: React.FC = () => {
    return (
        <>
        <Navbar/>
        <div className='' style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h3 className='flex items-center justify-center h-screen text-3xl'>WebSite Under Develpoment - Dashboard</h3>
        </div>
        </>
    );
};

export default About;