import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ShowCard from './ShowCard';

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='vh-100'>
            <Header />
            <div className='w-100 container row mx-auto my-4'>
                {data.map((show) => (
                    <div className='col-lg-3 col-md-4 col-sm-6 my-3 d-flex'>
                        <div className="flex-grow-1">
                            <ShowCard showDetail={show} />
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}
