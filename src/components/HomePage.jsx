import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, ShieldCheck, Headphones } from "lucide-react";

const HomePage = () => {

  return (
    <div>

      <section className="bg-slate-950 text-white min-h-[480px] flex items-center px-8 md:px-20">

        <div className="max-w-2xl">

          <p className="text-yellow-400 font-semibold mb-4">
            WELCOME TO ELECTROSTORE
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Upgrade Your Life With Latest Electronics
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            Discover the latest gadgets, smart devices and
            premium electronics at amazing prices.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-7 py-3 rounded-lg font-bold mt-8 hover:bg-yellow-300"
          >
            Shop Now <ArrowRight size={20} />
          </Link>

        </div>

      </section>

      <section className="grid md:grid-cols-3 gap-6 p-8 md:p-16">

        <div className="bg-white p-8 rounded-xl shadow text-center active:scale-90">
          <Truck size={35} className="mx-auto text-yellow-500" />
          <h2 className="font-bold mt-4">Free Delivery</h2>
          <p className="text-gray-500 mt-2">Fast and secure delivery.</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow text-center active:scale-90">
          <ShieldCheck size={35} className="mx-auto text-yellow-500" />
          <h2 className="font-bold mt-4">Secure Payment</h2>
          <p className="text-gray-500 mt-2">Safe shopping experience.</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow text-center active:scale-90">
          <Headphones size={35} className="mx-auto text-yellow-500" />
          <h2 className="font-bold mt-4">24/7 Support</h2>
          <p className="text-gray-500 mt-2">We are here to help.</p>
        </div>

      </section>

    </div>
  );
};

export default HomePage;