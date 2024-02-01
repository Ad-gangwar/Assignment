import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import starIcon from './images/Star.png';

export default function ShowDetails() {
  const { showId } = useParams();
  const [show, setShow] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [showId]);

  return (
    <div>
      <Header />
      <section className='my-4 container'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-3 col-md-3'>
              <figure className='d-flex align-items-center h-100 w-100 mx-auto' style={{ maxWidth: "300px" }}>
                {show.image ? (
                  <img src={show.image.medium} className="w-100 rounded-top" alt={show.name} style={{ maxHeight: "340px" }} />
                ) : (
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg" className="w-100 rounded-top" alt={show.name} />
                )}
              </figure>
            </div>

            <div className='col-lg-9 col-md-9 d-flex-inline justify-content-center flex-column'>
              <div className='d-flex gap-4'>
                <h1 className='fw-bold text-danger'>
                  {show.name}
                </h1>
                <div className='d-flex'>
                  {show.rating && show.rating.average && (
                    <span className='d-flex align-items-center gap-1 my-bold'>
                      <img src={starIcon} alt='' />
                      {show.rating.average}
                    </span>
                  )}
                </div>
              </div>
              <div className='d-flex my-3'>
                {show.genres &&
                  show.genres.map((genre, index) => (
                    <div
                      key={index}
                      style={{ color: "#00a8c6", backgroundColor: "#CCF0F3" }}
                      className='p-1 px-2 me-3 rounded'
                    >
                      {genre}
                    </div>
                  ))}
              </div>
              <p>Runtime: <span className='my-bold'>{show.runtime || 'N/A'}+ hours</span></p>
              <div className='d-flex gap-5'>
                <p>Language: <span className='my-bold'>{show.language || 'N/A'}</span></p>
                <p>Type: <span className='my-bold'>{show.type || 'N/A'}</span></p>
              </div>
              <div className='d-flex gap-5'>
                <p>Premiered: <span className='my-bold'>{show.premiered || 'N/A'}</span></p>
                <p>Ended: <span className='my-bold'>{show.ended || 'N/A'}</span></p>
              </div>
              <p>
                Official Site:{" "}
                <span className='my-bold text-primary'>
                  {show.officialSite ? (
                    <a href={show.officialSite} target="_blank" rel="noopener noreferrer">
                      {show.officialSite}
                    </a>
                  ) : (
                    "N/A"
                  )}
                </span>
              </p>
              {show.schedule && (
                <div style={{ color: "#00a8c6", backgroundColor: "#CCF0F3" }} className='p-2'>
                  <p className='m-0'>
                    New Episode drops on every{" "}
                    <span className='my-bold'>{show.schedule.days && show.schedule.days[0]}</span> at{" "}
                    <span className='my-bold'>{show.schedule.time || 'N/A'}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className='mt-3 border-bottom border-1 border-danger'></div>
          <section>
            <h5 className='my-3'>
              About
              <span className='fs-4 mx-2 text-danger iconText'>
                {show.name}
              </span>
            </h5>
            <p className='my-3'>
              <div dangerouslySetInnerHTML={{ __html: show.summary || 'N/A' }} />
            </p>
          </section>
          <section>
            <h5 className='my-3'>
              Network Details
            </h5>
            <div className='d-flex gap-5'>
              <p>Network: <span className='my-bold'>{show.network && show.network.name}</span></p>
              <p>Country: <span className='my-bold'>{show.network && show.network.country.name}</span></p>
            </div>
            <p>IMDb: <a href={`https://www.imdb.com/title/${show.externals && show.externals.imdb}`} target="_blank" rel="noopener noreferrer" className='my-bold text-primary'>{show.externals && show.externals.imdb}</a></p>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
}
