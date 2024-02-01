import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

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

//   console.log(data);

  return (
    <div className='vh-100 vw-100'>
      <Header />
      {/* <div>
        {data.map((show) => (
          <div key={show.id}>{show.name}</div>
        ))}
      </div> */}
      <Footer />
    </div>
  );
}
