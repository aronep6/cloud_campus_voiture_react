import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const Nav = () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/day', label: 'Day' },
    { to: '/counter', label: 'Counter' },
  ];

  return <nav className="flex justify-center">
    {
      links.map(link => (
        <a key={link.to} href={link.to} className="mx-2 font-bold">{link.label}</a>
      ))
    }
  </nav>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>
)
