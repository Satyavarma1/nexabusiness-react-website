import React from 'react'
import { ArrowLeft, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ProductGrid } from '../components/ProductGrid'
export function Wishlist() { const items = useSelector((state) => state.wishlist.items); return <main className="listing-page wishlist-page"><div className="breadcrumbs"><Link to="/products"><ArrowLeft size={14} /> Continue shopping</Link></div><div className="listing-head"><div><p className="eyebrow">Saved for later</p><h1>Your wishlist.</h1><p className="listing-sub">{items.length} pieces you have your eye on.</p></div></div>{items.length ? <ProductGrid items={items} /> : <div className="empty-state"><div className="empty-icon"><Heart size={26} /></div><h2>Keep a little room for want.</h2><p>Tap the heart on anything you would like to remember.</p><Link className="button button-dark" to="/products">Browse the collection</Link></div>}</main> }
