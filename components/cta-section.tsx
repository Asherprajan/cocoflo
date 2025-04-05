import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title: string
  buttonText: string
  buttonLink: string
  bgColor?: "accent" | "primary" | "white"
}

export default function CTASection({ title, buttonText, buttonLink, bgColor = "accent" }: CTASectionProps) {
  const bgClasses = {
    accent: "bg-accent text-primary",
    primary: "bg-primary text-white",
    white: "bg-white text-primary",
  }

  const buttonVariant = bgColor === "primary" ? "outline" : "default"
  const buttonClass = bgColor === "primary" ? "border-white text-white hover:bg-white hover:text-primary" : ""

  return (
    <section className={`py-16 ${bgClasses[bgColor]}`}>
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-3xl mx-auto">{title}</h2>
        <Button asChild variant={buttonVariant as any} size="lg" className={`rounded-full px-8 ${buttonClass}`}>
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  )
}

