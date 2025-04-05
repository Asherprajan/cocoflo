import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/cta-section"
import { Shield, Leaf, Users, Settings, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Protect Your Space. Build Sustainably.
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Your trusted partner in waterproofing and eco-friendly wood products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-accent text-primary hover:bg-accent/90 rounded-full px-6">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-6">
                <Link href="/services">Explore Our Products</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
              alt="Waterproofing in progress"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid lg:grid-cols-1 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-subtle flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="mb-6 h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Waterproofing Services</h3>
                <p className="text-gray-600 mb-6">
                  Professional waterproofing solutions to protect your property from moisture damage.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-accent" />
                    <span>Terraces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-accent" />
                    <span>Bathrooms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-accent" />
                    <span>Kitchens</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-accent" />
                    <span>Roofs</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/water_proofing.jpg"
                  alt="Waterproofing services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-subtle flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="mb-6 h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Coconut Wooden Planks</h3>
                <p className="text-gray-600 mb-6">
                  Sustainable and beautiful coconut wood products for your interior design needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-accent" />
                    <span>Flooring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-accent" />
                    <span>Wall Paneling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-accent" />
                    <span>Ceilings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-accent" />
                    <span>Custom Furniture</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 relative h-[300px] rounded-xl overflow-hidden order-2 md:order-1">
                <Image
                  src="/wooden_plank.jpeg"
                  alt="Coconut wooden planks"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Cocoflo */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Cocoflo</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-subtle text-center">
              <div className="mx-auto mb-4 h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Long-lasting protection</h3>
              <p className="text-gray-600">
                Our waterproofing solutions are designed to provide years of reliable protection.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-subtle text-center">
              <div className="mx-auto mb-4 h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center">
                <Leaf className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable materials</h3>
              <p className="text-gray-600">We use eco-friendly materials that reduce environmental impact.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-subtle text-center">
              <div className="mx-auto mb-4 h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Skilled technicians</h3>
              <p className="text-gray-600">Our team consists of experienced professionals with specialized training.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-subtle text-center">
              <div className="mx-auto mb-4 h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center">
                <Settings className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Custom solutions</h3>
              <p className="text-gray-600">We tailor our services to meet your specific needs and requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Project 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Project 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Project 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Project 4"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section className="py-16 md:py-24 bg-light-gray text-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Did You Know?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">70%</h3>
              <p className="text-lg">
                of concrete structures face moisture issues within 5 years without proper waterproofing.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Eco-Friendly</h3>
              <p className="text-lg">
                Coconut wood is renewable, termite-resistant, and eco-friendly, making it a sustainable choice for
                construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-subtle">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Client" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">John D.</h4>
                  <p className="text-gray-600">Kozhikode</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "No more water leaks after heavy rains. The Cocoflo team did an excellent job waterproofing my terrace.
                Highly recommended!"
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-subtle">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Client" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Neha S.</h4>
                  <p className="text-gray-600">Kozhikode</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The coconut wood flooring transformed my space completely. It's beautiful, durable, and I love that
                it's eco-friendly!"
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="/testimonials">View All Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CTASection
        title="Ready to protect or transform your space?"
        buttonText="Book a Free Consultation"
        buttonLink="/contact"
        bgColor="accent"
      />
    </>
  )
}

