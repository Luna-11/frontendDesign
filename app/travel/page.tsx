"use client";

import Image from "next/image";
import { useState } from "react";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header / Navigation */}
      <header className="relative z-20 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 border-b border-gray-100">
        <div className="text-2xl font-bold tracking-tight text-black">VIPP</div>
        <nav className="hidden space-x-8 text-sm font-medium uppercase tracking-wider md:flex">
          <a href="#" className="hover:text-gray-500">Home</a>
          <a href="#" className="hover:text-gray-500">About</a>
          <a href="#" className="hover:text-gray-500">Projects</a>
          <a href="#" className="hover:text-gray-500">Contact</a>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-16 z-30 w-full bg-white px-6 py-4 shadow-md md:hidden">
          <nav className="flex flex-col space-y-3 text-sm font-medium uppercase tracking-wider">
            <a href="#" className="hover:text-gray-500">Home</a>
            <a href="#" className="hover:text-gray-500">About</a>
            <a href="#" className="hover:text-gray-500">Projects</a>
            <a href="#" className="hover:text-gray-500">Contact</a>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-black md:text-5xl lg:text-6xl">
              ИННОВАЦИИ В КАЖДОМ ПРОЕКТЕ
            </h1>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              Созданы проекты, которые действительно сочетают в себе функциональность и оригинальность текстов.
            </p>
            <button className="mt-4 rounded-full bg-black px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-gray-800">
              ЗАКАЗАТЬ ПРОЕКТ
            </button>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gray-100 shadow-lg md:h-80 lg:h-96">
            <Image
              src="/pic1.jpg"
              alt="Innovation project"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl">
            ПРИНЦИПЫ, НА КОТОРЫХ СТРОИТСЯ НАША РАБОТА
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-3 text-xl font-bold text-black">
                ИННОВАЦИОННЫЕ МАТЕРИАЛЫ И ТЕХНИЧЕСКИЕ РЕШЕНИЯ
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Благодаря инновационным материалам и технологиям решения, наши проекты отличаются не только оригинальностью, но и высокой функциональностью. Мы предлагаем вам уникальные решения, которые помогут вам сделать современный и эффективный дизайн.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-3 text-xl font-bold text-black">
                УНИКАЛЬНЫЙ ДИЗАЙН И ФУНКЦИОНАЛЬНОСТЬ
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Наши архитектурные бюро специализируются на создании уникальных и функциональных материалов и технологий в наших проектах. Мы постоянно ищем новые материалы и технологии, которые позволят нам создать современный и эффективный дизайн.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-3 text-xl font-bold text-black">
                И ЭТО МОДЕЛИРОВАНИЕ
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Интеграция BIM и 3D визуализации в модуле Architecture best обеспечивает создание функциональных моделей, которые дают клиентам и оптимизируют процессы принятия решений на все этапы разработки.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-black">АРХИТЕКТУРНЫЕ УСЛУГИ</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Мы предлагаем вам широкий спектр услуг, включая разработку проектной документации, проектирование, строительство, монтаж и модернизацию.
              </p>
            </div>

            {/* Service 2 */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-black">УКРАЙНСКИЕ ИНТЕРЬЕРЫ</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Украинские инновационные проекты обогащаются современным оборудованием, включая BIM и 3D визуализации.
              </p>
            </div>

            {/* Service 3 */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-black">ВЕК МОДЕЛИРОВАНИЕ И 3D ВИТАЛИЗАЦИИ</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Проектная документация BIM включает в себя введение модели BIM, которая позволяет нам создавать уникальные решения, которые помогут вам сделать современный и эффективный дизайн.
              </p>
            </div>

            {/* Service 4 */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-black">АНАЛИЗАТЕЛЬНЫЙ ДИЗАЙН</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Проектная документация BIM включает в себя анализ и анализ данных, включая геометрические модели, геодезические модели и анализ данных, которые помогут нам создать уникальные решения, которые помогут вам сделать современный и эффективный дизайн.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
                О НАС
              </h2>
              <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                УЗНАЙТЕ БОЛЬШЕ О НАШЕЙ КОМПАНИИ
              </p>
              <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                Добро пожаловать в мир творчества и инноваций вместе с нашей командой — ARCHITECTOR TECH!
              </p>
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gray-200 shadow-lg md:h-80 lg:h-96">
              <Image
                src="/pic2.jpg"
                alt="About company"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-500">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <p>&copy; {new Date().getFullYear()} VIPP. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}