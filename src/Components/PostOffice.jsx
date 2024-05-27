import React, { useState, useEffect, useRef } from 'react';
import './Search.css';

export default function PostOffice({ pincode, show}) {
    const [originalData, setOriginalData] = useState(show); 
    const [filteredData, setFilteredData] = useState(show); 

   
 
    function handleFilter(char) {
        if (!char) {
            setFilteredData(originalData); 
            return;
        }
        let filteredData = originalData.PostOffice.filter((post) =>
            post.Name.toLowerCase().includes(char.toLowerCase())
        );
        setFilteredData({ ...originalData, PostOffice: filteredData });
    }

    return (
        <>
            <div className="container">
                <h1>Pincode: {pincode}</h1>
                <p><strong>Message:</strong> Number of pincode(s) found: {filteredData.PostOffice.length}</p>
                <input type="text" onChange={(e) => handleFilter(e.target.value)} placeholder="Search by name" />
                <div className="go">
                    {filteredData.PostOffice && filteredData.PostOffice.map((office, index) => (
                        <div key={index} className="post-office">
                            <p><strong>Name: </strong>{office.Name}</p>
                            <p><strong>Branch Type: </strong>{office.BranchType}</p>
                            <p><strong>Delivery Status: </strong>{office.DeliveryStatus}</p>
                            <p><strong>District: </strong>{office.District}</p>
                            <p><strong>Division: </strong>{office.Division}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
