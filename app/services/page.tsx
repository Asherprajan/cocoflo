import Image from "next/image"
import Link from "next/link"
import CTASection from "@/components/cta-section"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Reliable Services. Outstanding Results. From moisture protection to stylish interiors, we've got you
            covered.
          </p>
        </div>
      </section>

      {/* Waterproofing Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Waterproofing services"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Waterproofing Services</h2>
              <p className="text-lg text-gray-600">
                We provide comprehensive waterproofing solutions to protect your property from moisture damage, leaks,
                and water infiltration. Our expert team uses premium-grade materials and modern techniques to ensure
                long-lasting protection.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Open Terraces</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Bathrooms & Kitchens</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Roofs & Utility Areas</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Basements & Foundations</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                We use premium-grade materials and modern techniques for lasting results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coconut Wood Products */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold">Coconut Wood Products</h2>
              <p className="text-lg text-gray-600">
                Our eco-friendly coconut wood products offer a sustainable alternative to traditional timber. Naturally
                beautiful and durable, these products add a unique aesthetic to any space while contributing to
                environmental conservation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Flooring</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Wall Paneling</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Ceiling Boards</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Custom Furniture</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic">Durable, sustainable, and naturally beautiful.</p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Coconut wood products"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How We Work</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-subtle text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-primary h-8 w-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-4">Free Consultation</h3>
                <p className="text-gray-600">
                  We begin with a detailed discussion to understand your specific needs and requirements.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-subtle text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-primary h-8 w-8 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-4">Site Visit</h3>
                <p className="text-gray-600">
                  Our experts visit your property to assess the situation and develop a tailored solution.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-subtle text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-primary h-8 w-8 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-4">Execution</h3>
                <p className="text-gray-600">
                  Our skilled team implements the solution with precision, adhering to the highest standards.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-subtle text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-primary h-8 w-8 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-4">Maintenance Support</h3>
                <p className="text-gray-600">
                  We provide ongoing support and maintenance to ensure long-term satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Recent Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-subtle">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=300&width=400" alt="Project" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Terrace Waterproofing</h3>
                <p className="text-gray-600 mb-4">
                  Complete waterproofing solution for a 2000 sq ft residential terrace.
                </p>
                <Link href="#" className="text-accent font-medium flex items-center gap-2 hover:underline">
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-subtle">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=300&width=400" alt="Project" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Coconut Wood Flooring</h3>
                <p className="text-gray-600 mb-4">Eco-friendly flooring installation for a modern apartment.</p>
                <Link href="#" className="text-accent font-medium flex items-center gap-2 hover:underline">
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-subtle">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=300&width=400" alt="Project" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Wall Paneling</h3>
                <p className="text-gray-600 mb-4">Custom coconut wood wall paneling for a restaurant interior.</p>
                <Link href="#" className="text-accent font-medium flex items-center gap-2 hover:underline">
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to start your project?"
        buttonText="Book a Site Visit"
        buttonLink="/contact"
        bgColor="accent"
      />
    </>
  )
}

