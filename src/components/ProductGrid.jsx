import React from 'react'
import { ProductCard } from './ProductCard'
export function ProductGrid({ items }) { return <div className="product-grid">{items.map((product) => <ProductCard key={product.id} product={product} />)}</div> }
