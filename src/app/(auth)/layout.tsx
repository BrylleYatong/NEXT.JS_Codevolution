"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles.css';

const navLinks = [
    { name: 'Register', href: '/register' },
    { name: 'Login', href: '/login' },
    { name: 'Forgot Password', href: '/forgot-password' },
]

function AuthLayout( props: { children:React.ReactNode } ) {
    const {children} = props ?? {}
    const pathname = usePathname();
    const [input, setInput] = useState('');

  return (
    <div>
        {/* <h2>Inner Layout</h2>
        {children} */}
        <div>
            <input 
                type="text" 
                value={input}
                className='border-2 border-gray-400 rounded-lg p-2' 
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
        {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
                <Link 
                    href={link.href} 
                    key={link.name}
                    className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
                >
                    {link.name}
                </Link>
            )
        })}
        {children}
    </div>
  )
}

export default AuthLayout