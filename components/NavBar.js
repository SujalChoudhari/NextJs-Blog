import React from 'react'
import Link from 'next/link'
const NavBar = () => {
    return (<>
        <style jsx>
            {`
        nav ul li {
            list-style: none;
            margin: 10px 30px;
            font-weight: bold;
            cursor: pointer;
        }
        
        
        nav ul {
            display: flex;
            /* justify-content: space-around; */
            justify-content: center;
        
        }
        `}
        </style>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    </>)
}

export default NavBar