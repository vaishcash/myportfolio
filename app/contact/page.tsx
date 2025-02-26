import ContactForm from "@/components/ContactForm";
import Globe from "@/components/Globe";
import Navbar from "@/components/Navbar";



export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a1f] via-[#1a0b2e] to-[#2d0a4d] text-white relative overflow-hidden py-32">
      {/* Stars background */}
      <div className="absolute inset-0 bg-[url('/stars.png')] opacity-50" />
      <Navbar />
      <div className="container mx-auto pl-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-2">Get in Touch</h1>
          <h2 className="text-2xl text-gray-300 mb-12">
            Let us create something amazing together
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <div >
              <ContactForm />
            </div>

            {/* Globe */}
            <div className="h-[600px] ">
              <Globe />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
