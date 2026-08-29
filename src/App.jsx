import React from 'react'
import { useState } from 'react'
import { Heart, Menu, Search, ShoppingBag, UserRound, X } from 'lucide-react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { ProductDetails } from './pages/ProductDetails'
import { Cart } from './pages/Cart'
import { Wishlist } from './pages/Wishlist'
import { Auth } from './pages/Auth'
import { Checkout, OrderSuccess } from './pages/Checkout'
import { Orders, Profile } from './pages/Profile'

function Header() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const cartCount = useSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0))
  const wishlistCount = useSelector((state) => state.wishlist.items.length)
  const submitSearch = (event) => { event.preventDefault(); navigate(`/products?search=${encodeURIComponent(search)}`) }
  return <>
    <div className="announcement">Complimentary shipping on orders over $150 <span>New season, quietly arrived →</span></div>
    <header className="header">
      <button className="icon-button mobile-menu" aria-label="Open menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <Link to="/" className="logo">nexa<span>cart</span></Link>
      <nav className={open ? 'nav nav-open' : 'nav'}>
        <Link to="/products">Shop all</Link><Link to="/products?category=Home+objects">Home</Link><Link to="/products?category=Workspace">Workspace</Link><Link to="/products?category=Travel">Travel</Link>
      </nav>
      <form className="header-search" onSubmit={submitSearch}><Search size={17} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search the collection" aria-label="Search products" /></form>
      <div className="header-actions"><Link to="/wishlist" className="header-action"><Heart size={20} /><sup>{wishlistCount}</sup></Link><Link to="/cart" className="header-action"><ShoppingBag size={20} /><sup>{cartCount}</sup></Link><button className="icon-button account-button" aria-label="Account"><UserRound size={20} /></button></div>
    </header>
  </>
}

function NotFound() { return <main className="not-found"><p className="eyebrow">404 / lost in the catalogue</p><h1>That page has<br />gone elsewhere.</h1><Link className="button button-dark" to="/products">Return to shop</Link></main> }

export default function App() { return <><Header /><Routes><Route path="/" element={<Home />} /><Route path="/products" element={<Products />} /><Route path="/product/:id" element={<ProductDetails />} /><Route path="/cart" element={<Cart />} /><Route path="/wishlist" element={<Wishlist />} /><Route path="/login" element={<Auth />} /><Route path="/register" element={<Auth mode="register" />} /><Route path="/checkout" element={<Checkout />} /><Route path="/order-success" element={<OrderSuccess />} /><Route path="/profile" element={<Profile />} /><Route path="/orders" element={<Orders />} /><Route path="*" element={<NotFound />} /></Routes><footer className="footer"><div><Link to="/" className="logo logo-light">nexa<span>cart</span></Link><p>Objects with intent.<br />Made for the everyday.</p></div><div className="footer-links"><div><b>Explore</b><Link to="/products">Shop all</Link><Link to="/products">New arrivals</Link><Link to="/products">Best sellers</Link></div><div><b>Service</b><Link to="/login">Account</Link><Link to="/orders">Orders</Link><a href="mailto:hello@nexacart.test">Contact us</a></div></div><small>© 2026 NexaCart. A considered commerce concept.</small></footer></> }

