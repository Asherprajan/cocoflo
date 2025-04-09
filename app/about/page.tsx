import Image from "next/image"
import CTASection from "@/components/cta-section"
import { Shield, Lightbulb, Leaf } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Page Title */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Cocoflo</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Learn about our mission, values, and the team behind Cocoflo.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Built to Protect. Designed to Last.</h2>
              <p className="text-lg text-gray-600">
                Cocoflo is redefining construction with waterproofing expertise and eco-conscious innovation.
              </p>
              <p className="text-gray-600">
                Founded with a vision to provide high-quality waterproofing solutions while promoting sustainability,
                Cocoflo has grown to become a trusted name in the industry. Our dual focus on protection and
                eco-friendly materials sets us apart from conventional construction companies.
              </p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/logo.svg?height=500&width=500"
                alt="Cocoflo team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
            <div className="bg-white p-8 rounded-2xl shadow-subtle">
              <p className="text-lg text-gray-600">
                We are committed to delivering high-quality waterproofing services while promoting sustainability
                through our coconut plank products. Our goal is to create spaces that are not only protected from
                environmental elements but also contribute positively to the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-subtle text-center">
              <div className="mx-auto mb-6 h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We believe in honest communication, transparent pricing, and delivering on our promises. Our reputation
                is built on trust and reliability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-subtle text-center">
              <div className="mx-auto mb-6 h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously explore new techniques and materials to improve our services and products, staying ahead
                of industry standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-subtle text-center">
              <div className="mx-auto mb-6 h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center">
                <Leaf className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                Environmental responsibility is at the core of our business. We prioritize eco-friendly materials and
                sustainable practices in all our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-subtle">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Rahul Sharma</h3>
                <p className="text-gray-600 mb-4">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With over 15 years of experience in construction and sustainability.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-subtle">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Priya Nair</h3>
                <p className="text-gray-600 mb-4">Head of Operations</p>
                <p className="text-gray-600 text-sm">
                  Ensures smooth execution of all projects with precision and care.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-subtle">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Arun Kumar</h3>
                <p className="text-gray-600 mb-4">Technical Director</p>
                <p className="text-gray-600 text-sm">Expert in waterproofing technologies and sustainable materials.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <CTASection
        title="Get to Know Our Services"
        buttonText="Explore Services"
        buttonLink="/services"
        bgColor="accent"
      />
    </>
  )
}

