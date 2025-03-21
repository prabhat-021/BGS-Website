import ContactForm from "@/components/contact/contact-form";
import ContactMap from "@/components/contact/contact-map";
import ContactInfo from "@/components/contact/contact-info";
import MainNav from "@/components/main-nav";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f8f8f8]">
      <MainNav />

      <div className="pt-24 pb-16 flex-grow">
        {/* Hero Section */}
        <div className="relative bg-black text-white py-20 mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black/80 z-0"></div>
          <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
                DO YOU HAVE A <span className="block md:inline">PROJECT?</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
                We'd love to hear from you. Get in touch with our team and let's create something amazing together.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Left Column - Contact Info & Map */}
            <div className="space-y-12">
              <ContactInfo />
              <ContactMap />
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
