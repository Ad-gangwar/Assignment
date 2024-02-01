import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-opacity-10 shadow-lg mt-5">
            <p className="col-md-4 mb-0 text-body-secondary">© 2023 Company, Inc</p>

            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><Link href="#" className="nav-link px-2 text-body-secondary">Home</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link px-2 text-body-secondary">Features</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link px-2 text-body-secondary">Pricing</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link px-2 text-body-secondary">FAQs</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link px-2 text-body-secondary">About</Link></li>
            </ul>
        </footer>
    )
}
