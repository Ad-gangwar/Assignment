import React, { useEffect, useState } from 'react';
import starIcon from './images/Star.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

export default function ShowCard({ showDetail }) {
    const { show } = showDetail;

    return (
        <div className='px-2'>
            <figure >
                {show.image ? <img src={show.image.medium} className="w-100 rounded-top img-fluid" alt={show.name} style={{ maxHeight: "340px" }} /> :
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg" className="w-100 rounded-top" alt={show.name} />}
            </figure>
            <div className='my-2 mt-3 iconText text-danger fs-4'>
                {show.name}
            </div>
            <div className='d-flex justify-content-between'>
                <span className='p-2 rounded-end' style={{ color: "#00a8c6", backgroundColor: "#CCF0F3" }}>
                    {show.genres.map((genre, index) => (
                        <span key={index}>{genre}, </span>
                    ))}
                </span>

                <div className='d-flex align-items-center gap-1'>
                    {show.rating.average && <span className='d-flex align-items-center gap-1'>
                        <img src={starIcon} alt='' />
                        {show.rating.average}
                    </span>}
                </div>
            </div>

            <div className='mt-3 d-flex justify-content-between align-items-center'>
                <div>
                    <h6 className=''>
                        {show.language}
                    </h6>
                    <p className=''>
                {show.type}
                    </p>
                </div>
                <Link to={`/showDetails`} className="btn btn-outline-danger rounded-circle h-100 d-flex align-items-center">
                    <BsArrowRight className='arrow mx-0' />
                </Link>
            </div>
        </div>
    );
}
