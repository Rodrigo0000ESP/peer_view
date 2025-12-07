"use client"

import type React from "react"
import Image from "next/image"
import { BookOpen, MessageSquare, Zap, Users, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    field: "",
    level: "Master",
    uploadPapers: "yes",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Waitlist signup:", formData)
    // Reset form
    setFormData({ name: "", email: "", organization: "", field: "", level: "Master", uploadPapers: "yes" })
  }

  return (
    <div className="bg-white text-gray-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-center gap-2">
          <img src="/ArsPaper.svg" alt="ArsPaper Logo" className="w-14 h-14 text-gray-900" />
          <span className="text-xl font-bold text-gray-900 leading-none">ArsPaper</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/library.jpg"
            alt="Library background"
            fill
            className="object-cover blur-sm"
            quality={80}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="z-10 max-w-3xl mx-auto text-center space-y-8 bg-white p-10 rounded-4xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 text-balance leading-tight">
            The Platform Where Research <span className="text-blue-600">Becomes Accessible</span>
          </h1>
          <p className="text-lg text-gray-600 text-balance max-w-2xl mx-auto leading-relaxed">
            Research shouldn't be hidden. Join the waitlist for ArsPaper—where researchers discover, discuss,
            and improve the science that matters.
          </p>
          <Button 
            size="lg" 
            className="bg-gray-900 text-white hover:bg-gray-800 transition-all duration-[3000ms]"
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join the Waitlist
          </Button>
        </div>
      </section>

      {/* Platform Explanation */}
      <section className="px-4 py-20 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-balance">Why ArsPaper?</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Research shouldn't be locked behind paywalls or hidden from the world. ArsPaper creates a
              vibrant community where researchers, academics, and curious minds connect, discuss, and collectively
              improve our understanding of the world.
            </p>
            <ul className="space-y-4">
              {[
                "Discover breakthrough research in your field",
                "Engage with verified researchers worldwide",
                "Get AI-powered summaries of complex papers",
                "Build your academic profile and reputation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-96 rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-blue-50 to-gray-50">
            <Image
              src="/research-papers-feed-interface.jpg"
              alt="ArsPaper Research Feed"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who is ArsPaper For */}
      <section className="px-4 py-20 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-balance">Who is ArsPaper For?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Students & Researchers",
              description:
                "Stay updated with the latest research in your field and engage with the global academic community.",
            },
            {
              title: "Academics & Professors",
              description: "Share your work, get feedback, and collaborate with peers around the world.",
            },
            {
              title: "Industry Professionals",
              description: "Discover cutting-edge research to inform your work and stay ahead of innovation.",
            },
            {
              title: "Science Enthusiasts",
              description: "Explore groundbreaking discoveries and understand the science shaping our world.",
            },
          ].map((audience, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{audience.title}</h3>
              <p className="text-gray-600 leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-balance">Why Choose ArsPaper?</h2>
          <div className="space-y-6">
            {[
              {
                title: "Verified Community",
                description:
                  "All researchers are verified academics. No spam, no trolls—just genuine scientific discourse.",
              },
              {
                title: "AI-Powered Insights",
                description:
                  "Understand complex papers instantly with AI-generated summaries covering methodology, findings, and implications.",
              },
              {
                title: "Smart Discovery",
                description:
                  "Browse research and content that matches your interests in an intuitive interface. Save and organize your favorites.",
              },
              {
                title: "Collaborative Discussion",
                description:
                  "Comment, debate, and improve papers together. Peer feedback helps strengthen the entire scientific ecosystem.",
              },
            ].map((feature, i) => (
              <div key={i} className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center text-balance">
            Powerful Features for Modern Research
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Everything you need to engage with scientific research on a whole new level
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: "Verified KYC Commenters",
                description:
                  "Know who you're discussing with. All commenters are verified researchers and academics, ensuring quality and credibility.",
              },
              {
                icon: Zap,
                title: "AI-Powered Summaries",
                description:
                  "Get instant summaries of complex papers. Understand key findings, methodology, and implications at a glance.",
              },
              {
                icon: Users,
                title: "Intuitive Discovery",
                description:
                  "Discover content tailored to your interests. Explore, save, and engage with research in a familiar interface.",
              },
              {
                icon: MessageSquare,
                title: "Collaborative Discussion",
                description:
                  "Comment, discuss, and debate with fellow researchers. Improve papers through constructive peer feedback and insights.",
              },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-200 p-8 hover:border-gray-300 transition-colors"
                >
                  <Icon className="w-8 h-8 text-blue-600 mb-4 flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section className="px-4 py-20 bg-gray-900 text-white" id="waitlist">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-balance">Be First to Access ArsPaper</h2>
          <p className="text-gray-300 text-center mb-12">
            Join our waitlist to get early access and help shape the future of scientific research discovery.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
              required
            />
            <input
              type="text"
              placeholder="University / Organization"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
            />
            <input
              type="text"
              placeholder="Field of Study"
              value={formData.field}
              onChange={(e) => setFormData({ ...formData, field: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
            />

            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Academic Level</label>
                <select
                  value={formData.level}
                  onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option>Bachelor</option>
                  <option>Master</option>
                  <option>PhD</option>
                  <option>Postdoc</option>
                  <option>Industry</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Upload Your Papers?</label>
                <select
                  value={formData.uploadPapers}
                  onChange={(e) => setFormData({ ...formData, uploadPapers: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="maybe">Maybe Later</option>
                </select>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3 text-lg font-semibold mt-6"
            >
              Join the Waitlist
            </Button>

            <p className="text-center text-gray-400 text-sm pt-4">We respect your privacy. Unsubscribe at any time.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-gray-50 border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-sm">&copy; 2025 ArsPaper. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
