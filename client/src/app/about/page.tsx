// "use client";

// import React, { useEffect } from 'react';
import axios from 'axios';
import { headers } from 'next/headers';

export const About = async() => {
    // useEffect(() => {
        // const details = await axios.get('http://127.0.0.1:1338/api/countries');console.log(details)
        // const data = details.data.data;
    // })
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
<h3 className='flex items-center justify-center h-screen text-3xl '>WebSite Under Develpoment 
  {/* {data.length} */}
{/* <div className="space-y-4"> 
        {data.map(({ id, documentId, country, createdAt }: any) => (
          <div key={id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-blue-700">{country}</h2>
            <p className="text-gray-600">Document ID: <span className="font-mono">{documentId}</span></p>
            <p className="text-gray-500 text-sm">Created At: {new Date(createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div> */}

            </h3>
            <p>
                {/* {details.data[0]}  */}
                Here it is
            </p>
        </div>
    );
};

export default About;