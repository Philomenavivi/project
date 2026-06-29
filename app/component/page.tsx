"use client";

import Link from "next/link";
import Image from "next/image";
import manimage from "../../public/image/man.png";
import { Globe, LayoutDashboard, Smartphone } from "lucide-react";

const products = [
  {
    icon: <Globe size={28} />,
    title: "Dashboard Design",
    paragraph:
      "Professional dashboard design and development solutions tailored to your needs.",
    color: "bg-blue-700",
  },
  {
    icon: <LayoutDashboard size={28} />,
    title: "Website Design",
    paragraph:
      "Custom website design solutions focused on user experience and branding.",
    color: "bg-gray-700",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile App Design",
    paragraph:
      "Responsive mobile app designs that engage users and improve conversions.",
    color: "bg-yellow-600",
  },
];

const navlinks = [
  { name: "About Me", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Services", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Contact Me", href: "#" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 px-6 py-6">
      <div className="mx-auto max-w-7xl">
      
        <nav className="flex flex-col items-center justify-between gap-4 rounded-xl bg-gray-800 px-6 py-4 md:flex-row">
          <h1 className="text-3xl font-bold text-white">Melvatar</h1>

          <div className="flex flex-wrap gap-6">
            {navlinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-white transition hover:text-blue-400"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Contact
          </button>
        </nav>

      
        <section className="mt-8 grid items-center gap-10 rounded-xl bg-gray-800 p-8 md:grid-cols-2">
          <div>
            <h1 className="text-5xl font-bold text-white">
              Hi, I am Jackson Alvart
            </h1>

            <h2 className="mt-3 text-2xl text-blue-400">
              Expert Visual Designer
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              I create beautiful websites, mobile applications, and dashboards
              that combine aesthetics with functionality. My goal is to deliver
              modern digital experiences that help businesses grow.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
                Know More
              </button>

              <button className="rounded-full border border-white px-6 py-3 text-white transition hover:bg-white hover:text-black">
                See My Projects
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src={manimage}
              alt="Jackson Alvart"
              width={420}
              height={420}
              className="rounded-xl"
              priority
            />
          </div>
        </section>

    
        <section className="mt-16">
          <h2 className="mb-10 text-center text-4xl font-bold text-white">
            My Services
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-gray-800 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${item.color} text-white`}
                >
                  {item.icon}
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {item.paragraph}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
