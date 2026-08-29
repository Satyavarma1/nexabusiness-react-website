import React from 'react'
import { Heart, Plus, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import { toggleWishlist } from '../store/wishlistSlice'

export function ProductCard({ product }) {
  const dispatch = useDispatch()
  const wished = useSelector((state) => state.wishlist.items.some((item) => item.id === product.id))
  return <article className="product-card"><div className="product-image-wrap"><Link to={`/product/${product.id}`}><img src={product.image} alt={product.name} /></Link><span className="product-tag">{product.tag}</span><button className={wished ? 'wishlist-button wished' : 'wishlist-button'} onClick={() => dispatch(toggleWishlist(product))} aria-label={`${wished ? 'Remove' : 'Add'} ${product.name} ${wished ? 'from' : 'to'} wishlist`}><Heart size={18} fill={wished ? 'currentColor' : 'none'} /></button><button className="quick-add" onClick={() => dispatch(addToCart(product))} aria-label={`Add ${product.name} to cart`}><Plus size={18} /></button></div><div className="product-meta"><div><p className="product-brand">{product.brand}</p><Link to={`/product/${product.id}`} className="product-name">{product.name}</Link></div><p className="product-price">${product.price}</p></div><div className="product-rating"><Star size={13} fill="currentColor" /> {product.rating} <span>({product.reviews})</span></div></article>
}
