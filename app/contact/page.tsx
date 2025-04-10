"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    // Create form data to submit (form-urlencoded format for Google Apps Script)
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    
    // Google Apps Script URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbwgrvldekGeTp_hDMpM8s2Lnj2WnT8DkYS3oLvW6p3PJmoi_4JjIUpp-KNTDn352KRm/exec";
    
    try {
      // Use a no-CORS approach for Google Scripts (they don't support CORS properly)
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // Using no-cors mode to bypass CORS issues
        body: formDataToSend,
      });
      
      // With no-cors mode, we can't check status, so we assume success if no error
      setSubmitStatus({
        success: true,
        message: "Thank you for your message. We'll get back to you soon!"
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        message: "Network error. Please check your connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* Page Title */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Let's Connect</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions or ready to start your project? Get in touch with us today.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-subtle">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
              {submitStatus && (
                <div className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry"
                    rows={5}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent text-primary hover:bg-accent/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-gray-600">353/K, Kunnel Complex, Mullankunnu, Kuttiyadi Kozhikode 673513</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-gray-600">+91 9567 560 6156</p>
                      <p className="text-gray-600">+91 9072 120 224</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-600">info@cocoflo.in</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold">Business Hours</h3>
                      <p className="text-gray-600">Monday – Saturday: 9AM – 6PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-subtle">
                <h3 className="text-xl font-bold mb-4">Map Location</h3>
                <div className="rounded-lg overflow-hidden h-[300px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3907.7853606286308!2d75.80278617594267!3d11.63863888856745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDM4JzE5LjEiTiA3NcKwNDgnMTkuMyJF!5e0!3m2!1sen!2sin!4v1744158200245!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Schedule a Free Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Want to discuss your project in detail? Schedule a free consultation with our experts.
                </p>
                <Button asChild className="bg-accent text-primary hover:bg-accent/90 w-full">
                  <a href="tel:+9195675606156">Call Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-subtle">
              <h3 className="text-xl font-bold mb-3">How long does waterproofing last?</h3>
              <p className="text-gray-600">
                Our waterproofing solutions typically last 5-10 years depending on the area and exposure to elements. We
                provide a 5-year warranty on all our waterproofing work.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-subtle">
              <h3 className="text-xl font-bold mb-3">Is coconut plank durable?</h3>
              <p className="text-gray-600">
                Yes, coconut plank is highly durable and naturally resistant to termites. With proper care, it can last
                for decades, making it an excellent sustainable alternative to traditional hardwoods.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-subtle">
              <h3 className="text-xl font-bold mb-3">Do you offer free site visits?</h3>
              <p className="text-gray-600">
                Yes, we offer free site visits and consultations to assess your needs and provide accurate quotes for
                our services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-subtle">
              <h3 className="text-xl font-bold mb-3">What areas do you serve?</h3>
              <p className="text-gray-600">
                We primarily serve Kozhikode and surrounding areas in Kerala. For larger projects, we can accommodate
                locations throughout South India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
