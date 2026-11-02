
import React from "react";
import { Link } from "react-router-dom";
import {ArrowRight, Truck,
  ShieldCheck,
  Headphones,
  Zap,
  Laptop,
  Smartphone,
  Watch,
  Camera
} from "lucide-react";

const HomePage = () => {

  return (
    <div className="bg-gray-50">
      <section className="bg-slate-950 text-white px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap size={16} />
              NEXT GENERATION TECHNOLOGY
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Upgrade Your Life With
              <span className="text-yellow-400"> Smart Electronics.</span>
            </h1>
            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              Discover the latest gadgets, premium electronics
              and smart devices designed to make your life
              easier, smarter and better.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-yellow-400 text-black px-7 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
              >
                Shop Now
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 border border-gray-500 px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
              >
                Explore Products
              </Link>
            </div>
            <div className="flex gap-8 mt-12">
              <div>
                <h2 className="text-2xl font-bold text-yellow-400">
                  500+
                </h2>
                <p className="text-gray-400 text-sm">
                  Products
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-yellow-400">
                  10K+
                </h2>
                <p className="text-gray-400 text-sm">
                  Happy Customers
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-yellow-400">
                  24/7
                </h2>
                <p className="text-gray-400 text-sm">
                  Support
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400/10 blur-3xl rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900"
              alt="Latest Electronics"
              className="relative w-full h-[350px] md:h-[470px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-5 left-5 bg-white text-slate-950 p-4 rounded-xl shadow-lg">
              <p className="text-sm text-gray-500">
                Discover Technology
              </p>
              <h3 className="font-bold text-lg">
                Explore What's New!
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center mb-12">
          <p className="text-yellow-500 font-bold tracking-widest text-sm">
            OUR CATEGORIES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mt-3">
            Explore Popular Categories
          </h2>
          <p className="text-gray-500 mt-3">
            Find the perfect technology for your everyday needs.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto bg-slate-950 rounded-2xl px-8 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-yellow-400 font-semibold">
              TECHNOLOGY IS WAITING FOR YOU
            </p>
            <h2 className="text-3xl md:text-4xl text-white font-bold mt-3">
              Find Your Perfect Gadget Today!
            </h2>
            <p className="text-gray-400 mt-3">
              Explore our collection and upgrade your lifestyle.
            </p>
          </div>
          <Link
            to="/shop"
            className="shrink-0 bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-yellow-300 transition"
          >
            Start Shopping
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
