"use client";

import Image from "next/image";
import { useState } from "react";

// Furniture Categories
const categories = ["New designs", "Best sellers", "Sale"];

// Furniture Products
const furnitureProducts = [
    {
        id: 1,
        name: "Table Lamp",
        category: "Lighting",
        price: "$299",
        image: "/furniture/table-lamp.jpg",
        isNew: true,
        isBestSeller: false,
        isOnSale: false
    },
    {
        id: 2,
        name: "Ceramic Vase",
        category: "Decor",
        price: "$199",
        image: "/furniture/ceramic-vase.jpg",
        isNew: false,
        isBestSeller: true,
        isOnSale: false
    },
    {
        id: 3,
        name: "Chair with Footstand",
        category: "Seating",
        price: "$899",
        image: "/furniture/chair-footstand.jpg",
        isNew: true,
        isBestSeller: false,
        isOnSale: false
    },
    {
        id: 4,
        name: "Armchair",
        category: "Seating",
        price: "$1,299",
        image: "/furniture/armchair.jpg",
        isNew: false,
        isBestSeller: true,
        isOnSale: false
    },
    {
        id: 5,
        name: "Table Lamp",
        category: "Lighting",
        price: "$349",
        image: "/furniture/table-lamp-2.jpg",
        isNew: false,
        isBestSeller: false,
        isOnSale: true
    },
    {
        id: 6,
        name: "Black Armchair",
        category: "Seating",
        price: "$1,499",
        image: "/furniture/black-armchair.jpg",
        isNew: false,
        isBestSeller: false,
        isOnSale: false
    }
];

// Living Room Collection
const livingCollection = [
    {
        id: 7,
        name: "Table Lamp",
        category: "Lighting",
        price: "$299",
        image: "/furniture/table-lamp-3.jpg"
    },
    {
        id: 8,
        name: "Black Armchair",
        category: "Seating",
        price: "$1,499",
        image: "/furniture/black-armchair-2.jpg"
    }
];

export default function FurnitureStore() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Filter products by category
    const filteredProducts = activeCategory === "All"
        ? furnitureProducts
        : furnitureProducts.filter(p => {
            if (activeCategory === "New designs") return p.isNew;
            if (activeCategory === "Best sellers") return p.isBestSeller;
            if (activeCategory === "Sale") return p.isOnSale;
            return p.category === activeCategory;
        });

    return (
        <main className="bg-white min-h-screen font-serif antialiased">
            {/* Header */}
            <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-gray-100">
                <div className="text-3xl font-light tracking-widest text-gray-800">MUNO</div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider text-gray-600">
                    <a href="#" className="hover:text-black transition">New designs</a>
                    <a href="#" className="hover:text-black transition">Best sellers</a>
                    <a href="#" className="hover:text-black transition">Sale</a>
                    <a href="#" className="hover:text-black transition">Shop all</a>
                    <a href="#" className="hover:text-black transition">Living</a>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="text-sm uppercase tracking-wider text-gray-700 hover:text-black transition">
                        Shop Now
                    </button>
                    <button className="text-sm uppercase tracking-wider text-gray-700 hover:text-black transition">
                        <span className="hidden md:inline">Cart (0)</span>
                        <span className="md:hidden">🛒</span>
                    </button>
                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden"
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
                <div className="md:hidden bg-white border-b border-gray-100 py-4 px-6">
                    <div className="flex flex-col gap-3 text-sm uppercase tracking-wider text-gray-600">
                        <a href="#" className="hover:text-black transition">New designs</a>
                        <a href="#" className="hover:text-black transition">Best sellers</a>
                        <a href="#" className="hover:text-black transition">Sale</a>
                        <a href="#" className="hover:text-black transition">Shop all</a>
                        <a href="#" className="hover:text-black transition">Living</a>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 leading-tight tracking-tight">
                            Classic Furniture
                            <br />
                            <span className="text-gray-500">Timeless Design</span>
                        </h1>
                        <p className="mt-4 text-gray-500 text-sm max-w-md leading-relaxed">
                            Discover our curated collection of classic furniture pieces that blend tradition with modern sophistication.
                        </p>
                        <button className="mt-6 px-8 py-3 bg-gray-900 text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition">
                            Shop Now
                        </button>
                    </div>
                    <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-gray-100">
                        <Image
                            src="/furniture/hero-furniture.jpg"
                            alt="Classic Furniture Showcase"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Category Filters */}
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-wrap gap-4 border-b border-gray-100 pb-6">
                    <button
                        onClick={() => setActiveCategory("All")}
                        className={`px-4 py-2 text-sm uppercase tracking-wider transition ${activeCategory === "All"
                                ? "text-black border-b-2 border-gray-900"
                                : "text-gray-400 hover:text-gray-600"
                            }`}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 text-sm uppercase tracking-wider transition ${activeCategory === category
                                    ? "text-black border-b-2 border-gray-900"
                                    : "text-gray-400 hover:text-gray-600"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Product Grid */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative aspect-[4/5] bg-gray-50 rounded-lg overflow-hidden mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                                {product.isNew && (
                                    <span className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] uppercase tracking-wider text-gray-900 shadow-sm">
                                        New
                                    </span>
                                )}
                                {product.isOnSale && (
                                    <span className="absolute top-4 left-4 bg-red-500 px-3 py-1 text-[10px] uppercase tracking-wider text-white shadow-sm">
                                        Sale
                                    </span>
                                )}
                                {product.isBestSeller && !product.isNew && !product.isOnSale && (
                                    <span className="absolute top-4 left-4 bg-gray-900 px-3 py-1 text-[10px] uppercase tracking-wider text-white shadow-sm">
                                        Best Seller
                                    </span>
                                )}
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-sm uppercase tracking-wide text-gray-700 group-hover:text-gray-900 transition">
                                        {product.name}
                                    </h3>
                                    <p className="text-xs text-gray-400 mt-1">{product.category}</p>
                                </div>
                                <span className="text-sm font-light text-gray-800">{product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Living Collection Section */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex justify-between items-end border-b border-gray-100 pb-6 mb-8">
                    <div>
                        <h2 className="text-2xl font-light text-gray-800 tracking-tight">Living</h2>
                        <p className="text-xs text-gray-400 mt-1">Curated pieces for your living space</p>
                    </div>
                    <button className="text-xs uppercase tracking-wider text-gray-400 hover:text-gray-600 transition">
                        Shop all →
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {livingCollection.map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                            <div className="relative aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden mb-4">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-sm uppercase tracking-wide text-gray-700 group-hover:text-gray-900 transition">
                                        {item.name}
                                    </h3>
                                    <p className="text-xs text-gray-400 mt-1">{item.category}</p>
                                </div>
                                <span className="text-sm font-light text-gray-800">{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-gray-50 py-16 mt-8">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-light text-gray-800 tracking-tight">
                        Join Our Newsletter
                    </h2>
                    <p className="text-sm text-gray-400 mt-2 max-w-md mx-auto">
                        Subscribe to receive updates on new arrivals and exclusive offers.
                    </p>
                    <div className="mt-6 max-w-md mx-auto flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 border border-gray-200 focus:outline-none focus:border-gray-400 text-sm"
                        />
                        <button className="px-6 py-2 bg-gray-900 text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-xs uppercase tracking-wider text-gray-800 font-light mb-4">MUNO</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            Classic furniture for timeless interiors.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-wider text-gray-800 font-light mb-4">Shop</h4>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li><a href="#" className="hover:text-gray-600 transition">New arrivals</a></li>
                            <li><a href="#" className="hover:text-gray-600 transition">Best sellers</a></li>
                            <li><a href="#" className="hover:text-gray-600 transition">Sale</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-wider text-gray-800 font-light mb-4">About</h4>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li><a href="#" className="hover:text-gray-600 transition">Our story</a></li>
                            <li><a href="#" className="hover:text-gray-600 transition">Contact</a></li>
                            <li><a href="#" className="hover:text-gray-600 transition">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-wider text-gray-800 font-light mb-4">Follow</h4>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li><a href="#" className="hover:text-gray-600 transition">Instagram</a></li>
                            <li><a href="#" className="hover:text-gray-600 transition">Pinterest</a></li>
                            <li><a href="#" className="hover:text-gray-600 transition">Facebook</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-100 text-center text-[10px] text-gray-400 tracking-wider">
                    © 2026 MUNO. All rights reserved.
                </div>
            </footer>
        </main>
    );
}