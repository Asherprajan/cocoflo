import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Cocoflo</h3>
            <p className="text-secondary mb-4">Your trusted partner in waterproofing and eco-friendly coconut planks.</p>
            <div className="flex items-start space-x-2 text-secondary">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <span>353/K, Kunnel Complex, Mullankunnu Kuttiyadi Kozhikode 673513</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-secondary hover:text-accent transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-secondary hover:text-accent transition-colors">
                  Waterproofing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary hover:text-accent transition-colors">
                  Coconut plank Flooring
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary hover:text-accent transition-colors">
                  Wall Paneling
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary hover:text-accent transition-colors">
                  Ceiling Boards
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-secondary">
                <Phone size={16} />
                <div>
                  <span>+91 9567 560 6156</span><br />
                  <span>+91 9072 120 224</span>
                </div>
              </li>
              <li className="flex items-center space-x-2 text-secondary">
                <Mail size={16} />
                <span>info@cocoflo.in</span>
              </li>
              <li className="flex items-start space-x-2 text-secondary">
                <Clock size={16} className="mt-1 flex-shrink-0" />
                <span>Mon–Sat, 9AM–6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-secondary text-sm">
            &copy; {new Date().getFullYear()} Cocoflo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

