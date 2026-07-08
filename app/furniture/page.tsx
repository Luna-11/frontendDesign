"use client";

import Image from "next/image";
import { useState } from "react";

// Furniture Categories
const categories = ["All", "Chairs", "Tables", "New Arrivals", "Best Sellers"];

const chairProducts = [
    {
        id: 1,
        name: "Windsor Dining Chair",
        category: "Chairs",
        price: "$899",
        image: "/image/funV1.jpg",
        isNew: true,
        isBestSeller: true,
        material: "Oak Wood"
    },
    {
        id: 2,
        name: "Cabriole Leg Armchair",
        category: "Chairs",
        price: "$1,299",
        image: "/image/funV1.jpg",
        isNew: false,
        isBestSeller: true,
        material: "Walnut"
    },
    {
        id: 3,
        name: "Ladder Back Side Chair",
        category: "Chairs",
        price: "$649",
        image: "/image/funV2.jpg",
        isNew: true,
        isBestSeller: false,
        material: "Cherry Wood"
    }
];

// Table Products - Only 3 items total
const tableProducts = [
    {
        id: 6,
        name: "Pembroke Drop-Leaf Table",
        category: "Tables",
        price: "$1,499",
        image: "/image/fun3.jpg",
        isNew: true,
        isBestSeller: true,
        material: "Oak"
    },
    {
        id: 7,
        name: "Duncan Phyfe Dining Table",
        category: "Tables",
        price: "$2,899",
        image: "/image/fun4.jpg",
        isNew: false,
        isBestSeller: true,
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
        material: "Walnut"
    }
];

// Combined product list - Limited to 3 items total
const allProducts = [...chairProducts, ...tableProducts];

// Visionary Section Data
const visionaryFeatures = [
    {
        id: 1,
        title: "ELEVATING COMFORT WITH EVERY CURVE",
        description: "Every piece in our collection is meticulously crafted to provide unparalleled comfort while maintaining aesthetic excellence.",
        image: "/image/fun1.jpg",
        link: "/approach"
    },
    {
        id: 2,
        title: "OUR APPROACH",
        description: "We combine traditional craftsmanship with modern innovation to create furniture that stands the test of time.",
        image: "/image/fun2.jpg",
        link: "/approach"
    },
    {
        id: 3,
        title: "OUR TECHNOLOGY",
        description: "Advanced manufacturing techniques ensure precision and durability in every piece we create.",
        image: "/image/fun3.jpg",
        link: "/technology"
    },
    {
        id: 4,
        title: "OUR STORY",
        description: "Founded on a passion for design excellence, we've been creating timeless pieces for generations.",
        image: "/image/fun4.jpg",
        link: "/story"
    },
    {
        id: 5,
        title: "OUR DESIGN TEAM",
        description: "Meet the creative minds behind our collections—artisans dedicated to perfecting form and function.",
        image: "/image/funV1.jpg",
        link: "/team"
    }
];

export default function FurnitureStore() {
    const [activeCategory, setActiveCategory] = useState("All");

    // Filter products by category - Limit to 3 items
    const getFilteredProducts = () => {
        let products = [];

        if (activeCategory === "All") {
            products = allProducts.slice(0, 3);
        } else if (activeCategory === "Chairs") {
            products = chairProducts.slice(0, 3);
        } else if (activeCategory === "Tables") {
            products = tableProducts.slice(0, 3);
        } else {
            products = allProducts
                .filter(p => {
                    if (activeCategory === "New Arrivals") return p.isNew;
                    if (activeCategory === "Best Sellers") return p.isBestSeller;
                    return p.category === activeCategory;
                })
                .slice(0, 3);
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
                <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider text-[#d4c5b2]">
                    <a href="#" className="hover:text-[#c4b5a2] transition">New Arrivals</a>
                    <a href="#" className="hover:text-[#c4b5a2] transition">Best Sellers</a>
                    <a href="#" className="hover:text-[#c4b5a2] transition">Chairs</a>
                    <a href="#" className="hover:text-[#c4b5a2] transition">Tables</a>
                    <a href="#" className="hover:text-[#c4b5a2] transition">Living</a>
                </nav>
            </header>

            {/* Hero Section with Tagline */}
            <section className="relative max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-8">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#d4c5b2]">
                        Curated Design · Timeless Living
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#d4c5b2] leading-tight tracking-tight">
                            Classic Chairs
                            <br />
                            <span className="text-[#a8947e]">& Tables</span>
                        </h1>
                        <p className="mt-4 text-[#d4c5b2] text-sm max-w-md leading-relaxed">
                            Discover our curated collection of timeless seating and dining pieces, crafted for enduring elegance and comfort.
                        </p>
                        <button className="mt-6 px-8 py-3 bg-[#d4c5b2] text-[#0a0a0a] text-sm uppercase tracking-wider hover:bg-[#c4b5a2] transition">
                            Explore Collection
                        </button>
                    </div>
                    <div className="relative h-100 md:h-125 rounded-lg overflow-hidden bg-[#1a1410]">
                        <Image
                            src="/image/fun2.jpg"
                            alt="Classic Chair and Table Showcase"
                            fill
                            className="object-cover"
                            priority
                            loading="eager"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </section>

            {/* NEW: Visionary Section */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
                <div className="text-center mb-12">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#a8947e] font-light">Visionary</span>
                    <h2 className="text-3xl md:text-4xl font-light text-[#d4c5b2] mt-3 tracking-tight">
                        Where Form <span className="text-[#a8947e]">and Function</span> Unite
                    </h2>
                    <p className="text-sm text-[#d4c5b2] mt-3 max-w-2xl mx-auto leading-relaxed">
                        Discover the perfect harmony of aesthetic beauty and practical design in every piece we create.
                    </p>
                </div>

                {/* Visionary Grid - 5 items with images and labels */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* First item takes 2 columns on md+ screens */}
                    <div className="md:col-span-2 relative group cursor-pointer">
                        <div className="relative aspect-4/3 md:aspect-2/1 rounded-lg overflow-hidden border border-[#2a2420] bg-[#1a1410]">
                            <Image
                                src="/image/fun1.jpg"
                                alt="ELEVATING COMFORT WITH EVERY CURVE"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-700"
                                sizes="(max-width: 768px) 100vw, 66vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />

                            {/* Overlay Text */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4c5b2]/70">Feature</span>
                                <h3 className="text-xl md:text-2xl font-light text-[#d4c5b2] mt-1">
                                    ELEVATING COMFORT<br />WITH EVERY CURVE
                                </h3>
                                <button className="mt-3 text-xs text-[#d4c5b2] hover:text-[#c4b5a2] transition">
                                    EXPLORE →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Second item */}
                    <div className="relative group cursor-pointer">
                        <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-[#2a2420] bg-[#1a1410]">
                            <Image
                                src="/image/fun2.jpg"
                                alt="OUR APPROACH"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-700"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />

                            {/* Overlay Text */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4c5b2]/70">Learn More</span>
                                <h3 className="text-lg font-light text-[#d4c5b2] mt-1">
                                    OUR APPROACH
                                </h3>
                                <button className="mt-2 text-xs text-[#d4c5b2] hover:text-[#c4b5a2] transition">
                                    EXPLORE →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Third item */}
                    <div className="relative group cursor-pointer">
                        <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-[#2a2420] bg-[#1a1410]">
                            <Image
                                src="/image/fun3.jpg"
                                alt="OUR TECHNOLOGY"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-700"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />

                            {/* Overlay Text */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4c5b2]/70">Innovation</span>
                                <h3 className="text-lg font-light text-[#d4c5b2] mt-1">
                                    OUR TECHNOLOGY
                                </h3>
                                <button className="mt-2 text-xs text-[#d4c5b2] hover:text-[#c4b5a2] transition">
                                    EXPLORE →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Fourth item */}
                    <div className="relative group cursor-pointer">
                        <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-[#2a2420] bg-[#1a1410]">
                            <Image
                                src="/image/fun4.jpg"
                                alt="OUR STORY"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-700"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />

                            {/* Overlay Text */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4c5b2]/70">Heritage</span>
                                <h3 className="text-lg font-light text-[#d4c5b2] mt-1">
                                    OUR STORY
                                </h3>
                                <button className="mt-2 text-xs text-[#d4c5b2] hover:text-[#c4b5a2] transition">
                                    EXPLORE →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Fifth item */}
                    <div className="relative group cursor-pointer">
                        <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-[#2a2420] bg-[#1a1410]">
                            <Image
                                src="/image/funV1.jpg"
                                alt="OUR DESIGN TEAM"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-700"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />

                            {/* Overlay Text */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4c5b2]/70">Team</span>
                                <h3 className="text-lg font-light text-[#d4c5b2] mt-1">
                                    OUR DESIGN TEAM
                                </h3>
                                <button className="mt-2 text-xs text-[#d4c5b2] hover:text-[#c4b5a2] transition">
                                    EXPLORE →
                                </button>
                            </div>
                        </div>
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
                                : "text-[#a8947e] hover:text-[#d4c5b2]"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Product Grid - Maximum 3 items */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredProducts.slice(0, 3).map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative aspect-4/5 bg-[#1a1410] rounded-lg overflow-hidden mb-4 border border-[#2a2420]">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                {product.isNew && (
                                    <span className="absolute top-4 left-4 bg-[#d4c5b2] px-3 py-1 text-[10px] uppercase tracking-wider text-[#0a0a0a] shadow-sm">
                                        New
                                    </span>
                                )}
                                {product.isBestSeller && !product.isNew && (
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
                                    <p className="text-xs text-[#a8947e] mt-1">{product.material}</p>
                                </div>
                                <span className="text-sm font-light text-[#d4c5b2]">{product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show message if less than 3 items */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-[#d4c5b2] text-sm">No products found in this category.</p>
                    </div>
                )}
            </section>

            {/* Featured Collection Section */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex justify-between items-end border-b border-[#2a2420] pb-6 mb-8">
                    <div>
                        <h2 className="text-2xl font-light text-[#d4c5b2] tracking-tight">Living Collection</h2>
                        <p className="text-xs text-[#a8947e] mt-1">Essential pieces for refined interiors</p>
                    </div>
                    <button className="text-xs uppercase tracking-wider text-[#d4c5b2] hover:text-[#c4b5a2] transition">
                        View all →
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Featured Items */}
                    <div className="group cursor-pointer">
                        <div className="relative aspect-4/3 bg-[#1a1410] rounded-lg overflow-hidden mb-4 border border-[#2a2420]">
                            <Image
                                src="/image/fun1.jpg"
                                alt="Classic Dining Chair"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-500"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                        </div>
                        <h3 className="text-sm uppercase tracking-wide text-[#d4c5b2] group-hover:text-[#c4b5a2] transition">
                            Dining Chair
                        </h3>
                        <p className="text-xs text-[#a8947e]">Oak Finish</p>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="relative aspect-4/3 bg-[#1a1410] rounded-lg overflow-hidden mb-4 border border-[#2a2420]">
                            <Image
                                src="/image/fun2.jpg"
                                alt="Armchair"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-500"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                        </div>
                        <h3 className="text-sm uppercase tracking-wide text-[#d4c5b2] group-hover:text-[#c4b5a2] transition">
                            Accent Armchair
                        </h3>
                        <p className="text-xs text-[#a8947e]">Mahogany Frame</p>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="relative aspect-4/3 bg-[#1a1410] rounded-lg overflow-hidden mb-4 border border-[#2a2420]">
                            <Image
                                src="/image/fun3.jpg"
                                alt="Dining Table"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-500"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                        </div>
                        <h3 className="text-sm uppercase tracking-wide text-[#d4c5b2] group-hover:text-[#c4b5a2] transition">
                            Dining Table
                        </h3>
                        <p className="text-xs text-[#a8947e]">Walnut Veneer</p>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="relative aspect-4/3 bg-[#1a1410] rounded-lg overflow-hidden mb-4 border border-[#2a2420]">
                            <Image
                                src="/image/fun4.jpg"
                                alt="Console Table"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-500"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                        </div>
                        <h3 className="text-sm uppercase tracking-wide text-[#d4c5b2] group-hover:text-[#c4b5a2] transition">
                            Console Table
                        </h3>
                        <p className="text-xs text-[#a8947e]">Rosewood</p>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-[#1a1410] py-16 mt-8 border-t border-[#2a2420]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-light text-[#d4c5b2] tracking-tight">
                        Join Our Newsletter
                    </h2>
                    <p className="text-sm text-[#d4c5b2] mt-2 max-w-md mx-auto">
                        Subscribe for exclusive access to new arrivals and design inspiration.
                    </p>
                    <div className="mt-6 max-w-md mx-auto flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 bg-[#0a0a0a] border border-[#2a2420] focus:outline-none focus:border-[#d4c5b2] text-sm text-[#d4c5b2] placeholder-[#a8947e]"
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
                        <p className="text-xs text-[#d4c5b2] leading-relaxed">
                            Curated Design · Timeless Living
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-wider text-[#d4c5b2] font-light mb-4">Shop</h4>
                        <ul className="space-y-2 text-xs text-[#d4c5b2]">
                            <li><a href="#" className="hover:text-[#c4b5a2] transition">Chairs</a></li>
                            <li><a href="#" className="hover:text-[#c4b5a2] transition">Tables</a></li>
                            <li><a href="#" className="hover:text-[#c4b5a2] transition">New Arrivals</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-wider text-[#d4c5b2] font-light mb-4">About</h4>
                        <ul className="space-y-2 text-xs text-[#d4c5b2]">
                            <li><a href="#" className="hover:text-[#c4b5a2] transition">Our Story</a></li>
                            <li><a href="#" className="hover:text-[#c4b5a2] transition">Contact</a></li>
                            <li><a href="#" className="hover:text-[#c4b5a2] transition">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-wider text-[#d4c5b2] font-light mb-4">Connect</h4>
                        <ul className="space-y-2 text-xs text-[#d4c5b2]">
                            <li><a href="#" className="hover:text-[#c4b5a2] transition">Instagram</a></li>
                            <li><a href="#" className="hover:text-[#c4b5a2] transition">Pinterest</a></li>
                            <li><a href="#" className="hover:text-[#c4b5a2] transition">Facebook</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-[#2a2420] text-center text-[10px] text-[#d4c5b2] tracking-wider">
                    © 2026 DEMORIA. All rights reserved.
                </div>
            </footer>
        </main>
    );
}