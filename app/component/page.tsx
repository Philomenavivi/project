"use client"
import Link from "next/link";
import Image from "next/image";
import manimage from "../../public/image/man.png";
import {
  Globe, LayoutDashboard, LayoutDashboardIcon, Smartphone

}
  from "lucide-react";

const products = [
  {
    icon: "Globe",
    title: "Dashboard design",
    paragraph: "Professional dashboard design and development solutions tailored to your needs.",
    color: "bg-blue-700",
  },
  {
    icon:"LayoutDashboardIcon",
    title: "Website Design",
    paragraph: "Custom website design solutions focused on user experience and branding.",
    color: "bg-gray-700",
  },
  {
    icon:"smartphone",
    title: "Mobile app design",
    paragraph: "Responsive mobile app designs that engage users and improve conversions.",
    color: "bg-yellow-700",
  }

];

const navlinks = [
  { name: "About Me", href: "/" },
  { name: "Portfolio", href: "/" },
  { name: "Services", href: "/" },
  { name: "Pricing", href: "/" },
  { name: "Contact Me", href: "/" },
];

export default function Component() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-6 bg-gray-700 min-h-screen">


      <nav className="flex flex-col md:flex-row items-center justify-between bg-gray-400 px-6 py-4 rounded-lg">
        <h1 className="text-3xl font-bold text-black mb-4 md:mb-0">
          Melvatar
        </h1>

        <div className="flex flex-wrap items-center gap-6">
          {navlinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-black font-medium hover:text-blue-700 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>


        <button
          aria-label="Contact Jackson Alvart"
          className="mt-4 md:mt-0 bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors"
        >
          Contact
        </button>
      </nav>


      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-400 rounded-lg mt-8 p-8">
        <div>
          <h1 className="text-4xl font-bold text-black">
            Hi, I am Jackson Alvart
          </h1>

          <h2 className="text-2xl text-gray-800 mt-3">
            Expert Visual Designer
          </h2>

          <p className="mt-4 text-gray-900 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia accusantium ipsam aut temporibus cumque, labore
            est eaque doloremque laboriosam laborum sit, adipisci esse
            nam quae impedit rerum eum necessitatibus porro.
          </p>


          <div className="flex flex-wrap gap-4 mt-8">
            <button
              aria-label="Know more about my skills"
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
            >
              Know More
            </button>

            <button
              
              className="bg-white text-black px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              See My Projects
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src={manimage}
            alt="man.png"
            width={400}
            height={400}

          />
        </div>
      </section>


      <section className="mt-12">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          My Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item.title}
              className="bg-gray-400 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mt-4">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-700">
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
