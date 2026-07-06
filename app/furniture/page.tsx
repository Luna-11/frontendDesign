"use client";

import Image from "next/image";
import { useState } from "react";

// Furniture Categories
const categories = ["All", "Chairs", "Tables", "New Arrivals", "Best Sellers"];

// Chair Products - Only 5 items total
const chairProducts = [
    {
        id: 1,
        name: "Windsor Dining Chair",
        category: "Chairs",
        price: "$899",
        image: "/image/fun3.jpg",
        isNew: true,
        isBestSeller: true,
        isOnSale: false,
        material: "Oak Wood"
    },
    {
        id: 2,
        name: "Cabriole Leg Armchair",
        category: "Chairs",
        price: "$1,299",
        image: "/image/fun3.jpg",
        isNew: false,
        isBestSeller: true,
        isOnSale: false,
        material: "Walnut"
    },
    {
        id: 3,
        name: "Ladder Back Side Chair",
        category: "Chairs",
        price: "$649",
        image: "/image/fun3.jpg",
        isNew: true,
        isBestSeller: false,
        isOnSale: false,
        material: "Cherry Wood"
    },
    {
        id: 4,
        name: "Club Accent Chair",
        category: "Chairs",
        price: "$1,899",
        image: "/image/fun3.jpg",
        isNew: false,
        isBestSeller: false,
        isOnSale: true,
        material: "Leather & Mahogany"
    },
    {
        id: 5,
        name: "Queen Anne Side Chair",
        category: "Chairs",
        price: "$749",
        image: "/image/fun3.jpg",
        isNew: false,
        isBestSeller: true,
        isOnSale: false,
        material: "Mahogany"
    }
];

// Table Products - Only 5 items total
const tableProducts = [
    {
        id: 6,
        name: "Pembroke Drop-Leaf Table",
        category: "Tables",
        price: "$1,499",
        image: "/image/fun2.jpg",
        isNew: true,
        isBestSeller: true,
        isOnSale: false,
        material: "Oak"
    },
    {
        id: 7,
        name: "Duncan Phyfe Dining Table",
        category: "Tables",
        price: "$2,899",
        image: "/image/fun2.jpg",
        isNew: false,
        isBestSeller: true,
        isOnSale: false,
        material: "Mahogany"
    },
    {
        id: 8,
        name: "Gateleg Extension Table",
        category: "Tables",
        price: "$1,999",
        image: "/image/funV1.jpg",
        isNew: false,
        isBestSeller: false,
        isOnSale: false,
        material: "Walnut"
    },
    {
        id: 9,
        name: "Pedestal Round Table",
        category: "Tables",
        price: "$1,299",
        image: "/image/fun2.jpg",
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        material: "Cherry"
    },
    {
        id: 10,
        name: "Butler's Tray Table",
        category: "Tables",
        price: "$899",
        image: "/image/fun2.jpg",
        isNew: false,
        isBestSeller: false,
        isOnSale: false,
        material: "Teak"
    }
];

// Combined product list - Limited to 5 items total
const allProducts = [...chairProducts, ...tableProducts];

export default function FurnitureStore() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Filter products by category - Limit to 5 items
    const getFilteredProducts = () => {
        let products = [];

        if (activeCategory === "All") {
            products = allProducts.slice(0, 5); // Only show first 5 items
        } else if (activeCategory === "Chairs") {
            products = chairProducts.slice(0, 5);
        } else if (activeCategory === "Tables") {
            products = tableProducts.slice(0, 5);
        } else {
            products = allProducts
                .filter(p => {
                    if (activeCategory === "New Arrivals") return p.isNew;
                    if (activeCategory === "Best Sellers") return p.isBestSeller;
                    return p.category === activeCategory;
                })
                .slice(0, 5); // Limit to 5 items
        }

        return products;
    };

    const filteredProducts = getFilteredProducts();

    return (
        <main className="bg-[#0a0a0a] min-h-screen font-serif antialiased">
            {/* Header */}
            <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-[#2a2420]">
                <div className="text-3xl font-light tracking-widest text-[#d4c5b2]">DEMORIA</div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider text-[#8b7a6a]">
                    <a href="#" className="hover:text-[#d4c5b2] transition">New Arrivals</a>
                    <a href="#" className="hover:text-[#d4c5b2] transition">Best Sellers</a>
                    <a href="#" className="hover:text-[#d4c5b2] transition">Chairs</a>
                    <a href="#" className="hover:text-[#d4c5b2] transition">Tables</a>
                    <a href="#" className="hover:text-[#d4c5b2] transition">Living</a>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="text-sm uppercase tracking-wider text-[#8b7a6a] hover:text-[#d4c5b2] transition">
                        Shop Now
                    </button>
                    <button className="text-sm uppercase tracking-wider text-[#8b7a6a] hover:text-[#d4c5b2] transition">
                        <span className="hidden md:inline">Cart (0)</span>
                        <span className="md:hidden">🛒</span>
                    </button>
                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-[#d4c5b2]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#0a0a0a] border-b border-[#2a2420] py-4 px-6">
                    <div className="flex flex-col gap-3 text-sm uppercase tracking-wider text-[#8b7a6a]">
                        <a href="#" className="hover:text-[#d4c5b2] transition">New Arrivals</a>
                        <a href="#" className="hover:text-[#d4c5b2] transition">Best Sellers</a>
                        <a href="#" className="hover:text-[#d4c5b2] transition">Chairs</a>
                        <a href="#" className="hover:text-[#d4c5b2] transition">Tables</a>
                        <a href="#" className="hover:text-[#d4c5b2] transition">Living</a>
                    </div>
                </div>
            )}

            {/* Hero Section with Tagline */}
            <section className="relative max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-8">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#8b7a6a]">
                        Curated Design · Timeless Living
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#d4c5b2] leading-tight tracking-tight">
                            Classic Chairs
                            <br />
                            <span className="text-[#8b7a6a]">& Tables</span>
                        </h1>
                        <p className="mt-4 text-[#8b7a6a] text-sm max-w-md leading-relaxed">
                            Discover our curated collection of timeless seating and dining pieces, crafted for enduring elegance and comfort.
                        </p>
                        <button className="mt-6 px-8 py-3 bg-[#d4c5b2] text-[#0a0a0a] text-sm uppercase tracking-wider hover:bg-[#c4b5a2] transition">
                            Explore Collection
                        </button>
                    </div>
                    <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-[#1a1410]">
                        <Image
                            src="/image/fun2.jpg"
                            alt="Classic Chair and Table Showcase"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Category Filters */}
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-wrap gap-4 border-b border-[#2a2420] pb-6">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 text-sm uppercase tracking-wider transition ${activeCategory === category
                                    ? "text-[#d4c5b2] border-b-2 border-[#d4c5b2]"
                                    : "text-[#6b5c4e] hover:text-[#d4c5b2]"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Product Grid - Maximum 5 items */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredProducts.slice(0, 5).map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative aspect-[4/5] bg-[#1a1410] rounded-lg overflow-hidden mb-4 border border-[#2a2420]">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                                {product.isNew && (
                                    <span className="absolute top-4 left-4 bg-[#d4c5b2] px-3 py-1 text-[10px] uppercase tracking-wider text-[#0a0a0a] shadow-sm">
                                        New
                                    </span>
                                )}
                                {product.isOnSale && (
                                    <span className="absolute top-4 left-4 bg-[#c0392b] px-3 py-1 text-[10px] uppercase tracking-wider text-[#f5f0eb] shadow-sm">
                                        Sale
                                    </span>
                                )}
                                {product.isBestSeller && !product.isNew && !product.isOnSale && (
                                    <span className="absolute top-4 left-4 bg-[#d4c5b2] px-3 py-1 text-[10px] uppercase tracking-wider text-[#0a0a0a] shadow-sm">
                                        Best Seller
                                    </span>
                                )}
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-sm uppercase tracking-wide text-[#d4c5b2] group-hover:text-[#c4b5a2] transition">
                                        {product.name}
                                    </h3>
                                    <p className="text-xs text-[#6b5c4e] mt-1">{product.material}</p>
                                </div>
                                <span className="text-sm font-light text-[#d4c5b2]">{product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show message if less than 5 items */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-[#6b5c4e] text-sm">No products found in this category.</p>
                    </div>
                )}
            </section>

            {/* Featured Collection Section */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex justify-between items-end border-b border-[#2a2420] pb-6 mb-8">
                    <div>
                        <h2 className="text-2xl font-light text-[#d4c5b2] tracking-tight">Living Collection</h2>
                        <p className="text-xs text-[#6b5c4e] mt-1">Essential pieces for refined interiors</p>
                    </div>
                    <button className="text-xs uppercase tracking-wider text-[#6b5c4e] hover:text-[#d4c5b2] transition">
                        View all →
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Featured Items - Max 5 featured items */}
                    <div className="group cursor-pointer">
                        <div className="relative aspect-[4/3] bg-[#1a1410] rounded-lg overflow-hidden mb-4 border border-[#2a2420]">
                            <Image
                                src="/image/fun2.jpg"
                                alt="Classic Dining Chair"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-500"
                            />
                        </div>
                        <h3 className="text-sm uppercase tracking-wide text-[#d4c5b2] group-hover:text-[#c4b5a2] transition">
                            Dining Chair
                        </h3>
                        <p className="text-xs text-[#6b5c4e]">Oak Finish</p>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="relative aspect-[4/3] bg-[#1a1410] rounded-lg overflow-hidden mb-4 border border-[#2a2420]">
                            <Image
                                src="/image/fun2.jpg"
                                alt="Armchair"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-500"
                            />
                        </div>
                        <h3 className="text-sm uppercase tracking-wide text-[#d4c5b2] group-hover:text-[#c4b5a2] transition">
                            Accent Armchair
                        </h3>
                        <p className="text-xs text-[#6b5c4e]">Mahogany Frame</p>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="relative aspect-[4/3] bg-[#1a1410] rounded-lg overflow-hidden mb-4 border border-[#2a2420]">
                            <Image
                                src="/image/fun2.jpg"
                                alt="Dining Table"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-500"
                            />
                        </div>
                        <h3 className="text-sm uppercase tracking-wide text-[#d4c5b2] group-hover:text-[#c4b5a2] transition">
                            Dining Table
                        </h3>
                        <p className="text-xs text-[#6b5c4e]">Walnut Veneer</p>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="relative aspect-[4/3] bg-[#1a1410] rounded-lg overflow-hidden mb-4 border border-[#2a2420]">
                            <Image
                                src="/image/fun2.jpg"
                                alt="Console Table"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-500"
                            />
                        </div>
                        <h3 className="text-sm uppercase tracking-wide text-[#d4c5b2] group-hover:text-[#c4b5a2] transition">
                            Console Table
                        </h3>
                        <p className="text-xs text-[#6b5c4e]">Rosewood</p>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-[#1a1410] py-16 mt-8 border-t border-[#2a2420]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-light text-[#d4c5b2] tracking-tight">
                        Join Our Newsletter
                    </h2>
                    <p className="text-sm text-[#6b5c4e] mt-2 max-w-md mx-auto">
                        Subscribe for exclusive access to new arrivals and design inspiration.
                    </p>
                    <div className="mt-6 max-w-md mx-auto flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 bg-[#0a0a0a] border border-[#2a2420] focus:outline-none focus:border-[#6b5c4e] text-sm text-[#d4c5b2] placeholder-[#6b5c4e]"
                        />
                        <button className="px-6 py-2 bg-[#d4c5b2] text-[#0a0a0a] text-sm uppercase tracking-wider hover:bg-[#c4b5a2] transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-[#2a2420]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-xs uppercase tracking-wider text-[#d4c5b2] font-light mb-4">DEMORIA</h4>
                        <p className="text-xs text-[#6b5c4e] leading-relaxed">
                            Curated Design · Timeless Living
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-wider text-[#d4c5b2] font-light mb-4">Shop</h4>
                        <ul className="space-y-2 text-xs text-[#6b5c4e]">
                            <li><a href="#" className="hover:text-[#d4c5b2] transition">Chairs</a></li>
                            <li><a href="#" className="hover:text-[#d4c5b2] transition">Tables</a></li>
                            <li><a href="#" className="hover:text-[#d4c5b2] transition">New Arrivals</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-wider text-[#d4c5b2] font-light mb-4">About</h4>
                        <ul className="space-y-2 text-xs text-[#6b5c4e]">
                            <li><a href="#" className="hover:text-[#d4c5b2] transition">Our Story</a></li>
                            <li><a href="#" className="hover:text-[#d4c5b2] transition">Contact</a></li>
                            <li><a href="#" className="hover:text-[#d4c5b2] transition">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-wider text-[#d4c5b2] font-light mb-4">Connect</h4>
                        <ul className="space-y-2 text-xs text-[#6b5c4e]">
                            <li><a href="#" className="hover:text-[#d4c5b2] transition">Instagram</a></li>
                            <li><a href="#" className="hover:text-[#d4c5b2] transition">Pinterest</a></li>
                            <li><a href="#" className="hover:text-[#d4c5b2] transition">Facebook</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-[#2a2420] text-center text-[10px] text-[#6b5c4e] tracking-wider">
                    © 2026 DEMORIA. All rights reserved.
                </div>
            </footer>
        </main>
    );
}