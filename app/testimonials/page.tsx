import Image from "next/image"
import CTASection from "@/components/cta-section"
import { Quote, User } from "lucide-react"

export default function TestimonialsPage() {
  return (
    <>
      {/* Page Title */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">What Our Clients Say</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Read testimonials from our satisfied customers about their experience with Cocoflo.
          </p>
        </div>
      </section>

      {/* Hero Section - Quote Wall */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-subtle relative">
              <Quote className="absolute text-accent/20 h-16 w-16 -top-6 -left-6" />
              <div className="relative">
                <p className="text-xl text-gray-700 italic mb-6">
                  "No more water leaks after heavy rains. The Cocoflo team did an excellent job waterproofing my
                  terrace. Their attention to detail and professionalism was impressive."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <User className="h-10 w-10 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">John D.</h4>
                    <p className="text-gray-600">Kozhikode</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-subtle relative">
              <Quote className="absolute text-accent/20 h-16 w-16 -top-6 -left-6" />
              <div className="relative">
                <p className="text-xl text-gray-700 italic mb-6">
                  "The coconut plank flooring transformed my space completely. It's beautiful, durable, and I love that
                  it's eco-friendly! The team was professional and completed the work on schedule."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <User className="h-10 w-10 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Neha S.</h4>
                    <p className="text-gray-600">Kozhikode</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel or Stack of Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">More Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-subtle">
              <p className="text-gray-700 italic mb-6">
                "Cocoflo's waterproofing service saved my property from serious water damage. Their team was prompt,
                professional, and thorough. Highly recommended!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <User className="h-7 w-7 text-gray-500" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Rajesh K.</h4>
                  <p className="text-gray-600 text-xs">Kozhikode</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-subtle">
              <p className="text-gray-700 italic mb-6">
                "The coconut plank ceiling installation exceeded my expectations. The natural patterns and durability are
                impressive. Great service from start to finish."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <User className="h-7 w-7 text-gray-500" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Priya M.</h4>
                  <p className="text-gray-600 text-xs">Kozhikode</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-subtle">
              <p className="text-gray-700 italic mb-6">
                "I appreciate Cocoflo's commitment to sustainability. Their eco-friendly products don't compromise on
                quality or aesthetics. The wall paneling looks stunning!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <User className="h-7 w-7 text-gray-500" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Arun T.</h4>
                  <p className="text-gray-600 text-xs">Kozhikode</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-subtle">
              <p className="text-gray-700 italic mb-6">
                "After trying multiple solutions for my leaking bathroom, Cocoflo finally fixed the issue permanently.
                Their expertise and quality materials made all the difference."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <User className="h-7 w-7 text-gray-500" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Meera J.</h4>
                  <p className="text-gray-600 text-xs">Kozhikode</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-subtle">
              <p className="text-gray-700 italic mb-6">
                "The custom coconut plank furniture Cocoflo created for my office is both beautiful and functional. Their
                craftsmanship is exceptional, and I love supporting sustainable practices."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <User className="h-7 w-7 text-gray-500" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Vikram S.</h4>
                  <p className="text-gray-600 text-xs">Kozhikode</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-subtle">
              <p className="text-gray-700 italic mb-6">
                "Cocoflo's team was professional, punctual, and neat. They completed the waterproofing of my entire
                house within the promised timeframe and budget. Excellent service!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <User className="h-7 w-7 text-gray-500" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Lakshmi R.</h4>
                  <p className="text-gray-600 text-xs">Kozhikode</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Showcase Gallery */}
      {/* <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Before & After</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Before waterproofing"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-primary text-white px-4 py-2 rounded-tr-lg">Before</div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="After waterproofing"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-accent text-primary px-4 py-2 rounded-tr-lg">After</div>
              </div>
              <p className="text-center text-gray-600">Terrace Waterproofing Project</p>
            </div>
            <div className="space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Before coconut plank installation"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-primary text-white px-4 py-2 rounded-tr-lg">Before</div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="After coconut plank installation"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-accent text-primary px-4 py-2 rounded-tr-lg">After</div>
              </div>
              <p className="text-center text-gray-600">Coconut plank Flooring Installation</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <CTASection
        title="Ready to experience the Cocoflo difference?"
        buttonText="Contact Us for a Free Quote"
        buttonLink="/contact"
        bgColor="accent"
      />
    </>
  )
}
