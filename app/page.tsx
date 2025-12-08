"use client"

import type React from "react"
import Image from "next/image"
import { BookOpen, MessageSquare, Zap, Users, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { sendWaitlistEmail } from "@/services/emailService"
import { useToast } from "@/hooks/use-toast"

export default function Home() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    field: "",
    level: "Master",
    uploadPapers: "yes",
    expectations: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendWaitlistEmail(formData)

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        })
        setFormData({
          name: "",
          email: "",
          organization: "",
          field: "",
          level: "Master",
          uploadPapers: "yes",
          expectations: "",
        })
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
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
            className="object-cover"
            quality={80}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="z-10 max-w-3xl mx-auto text-center space-y-8 bg-white/90 backdrop-blur-md p-6 md:p-10 rounded-3xl md:rounded-4xl shadow-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-balance leading-tight">
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
      <section className="px-4 py-10 max-w-4xl mx-auto md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-balance">What is ArsPaper?</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              ArsPaper creates a vibrant community where researchers, academics, and curious minds connect, discuss, and collectively
              improve our understanding of the world.
            </p>
            <ul className="space-y-4">
              {[
                "Discover breakthrough research in your field",
                "Engage with verified researchers worldwide",
                "Build your academic profile and reputation",
                "Follow up on research you're interested in"
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
              src="/book.jpg"
              alt="ArsPaper Research Feed"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who is ArsPaper For */}
      <section className="px-4 py-10 md:py-20 max-w-4xl mx-auto mb-10 md:mb-20">
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
              title: "Knowledge Enthusiasts",
              description: "Explore groundbreaking discoveries and understand the what is shaping our world.",
            },
          ].map((audience, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{audience.title}</h3>
              <p className="text-gray-600 leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose ArsPaper? */}
      <section className="px-4 py-10 bg-gray-50 pb-20 md:pb-40 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center text-balance">
            Why Choose ArsPaper?
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            The art of paper for everyone
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: "Verified Community",
                description:
                  "All researchers are verified academics. No spam, no trolls—just genuine discourse and meaningful connections.",
              },
              {
                icon: Zap,
                title: "AI-Powered Insights",
                description:
                  "Understand complex papers instantly with AI-generated summaries covering methodology, findings, and implications.",
              },
              {
                icon: Users,
                title: "Smart Discovery",
                description:
                  "Browse research and content that matches your interests in an intuitive interface. Save and organize your favorites.",
              },
              {
                icon: MessageSquare,
                title: "Collaborative Discussion",
                description:
                  "Comment, debate, and improve papers together. Peer feedback helps strengthen the entire ecosystem.",
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
              placeholder="Full Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
              required
            />
            <input
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
              required
            />
            <input
              type="text"
              placeholder="University / Organization (Optional)"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
            />
            <input
              type="text"
              placeholder="Field of Study / Interest *"
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
                  <option>High School</option>
                  <option>Bachelor's Degree</option>
                  <option>Master's Degree</option>
                  <option>PhD</option>
                  <option>Postdoc</option>
                  <option>Industry</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Would you like to upload your papers?</label>
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
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  What do you expect from ArsPaper? (Optional)
                </label>
                <textarea
                  placeholder="Tell us what features or content you're looking for..."
                  value={formData.expectations}
                  onChange={(e) => setFormData({ ...formData, expectations: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors h-32 resize-none"
                />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3 text-lg font-semibold mt-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Joining..." : "Join the Waitlist"}
            </Button>

            <p className="text-center text-gray-400 text-sm pt-4">We respect your privacy. We will not share your information with third parties or sell your data.</p>
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
