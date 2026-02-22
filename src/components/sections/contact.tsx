"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Clock } from "lucide-react"
import { useToasts } from "@/components/ui/toast"

export default function ContactSection() {
    const toasts = useToasts()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const name = formData.name.trim()
        const email = formData.email.trim()
        const subject = formData.subject.trim()
        const message = formData.message.trim()

        if (!name || !email || !message) {
            toasts.warning("Please fill in all required fields to proceed.")
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            toasts.warning("Please provide a valid email address.")
            return
        }

        if (message.length < 20) {
            toasts.warning("Your message must be at least 20 characters long.")
            return
        }

        setIsSubmitting(true)

        try {
            const formDataJSON = {
                access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string,
                name: name,
                email: email,
                subject: subject || "General Inquiry",
                message: message,
            }

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formDataJSON),
            })

            const result = await response.json()
            if (result.success) {
                setFormData({ name: "", email: "", subject: "", message: "" }) // Reset form
                toasts.success("Thank you. Your message has been securely sent. We will reply shortly.")
            } else {
                console.error("Web3Forms error:", result)
                toasts.error("We encountered an error sending your message. Please try again or email us directly.")
            }
        } catch (error) {
            console.error("Form submission failed:", error)
            toasts.error("Form submission failed due to a network error. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-24 bg-card">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Inquiry Form */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">
                                Inquiries & Contact
                            </h2>
                            <div className="w-16 h-[2px] bg-accent mb-6" />
                            <p className="text-foreground/80 font-sans">
                                For affiliation, visiting brethren, or general inquiries, please send a message to the Lodge Secretary.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} noValidate className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold uppercase tracking-wider text-primary">Full Name *</label>
                                    <Input id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="rounded-none border-border focus-visible:ring-accent" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold uppercase tracking-wider text-primary">Email Address *</label>
                                    <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="rounded-none border-border focus-visible:ring-accent" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-semibold uppercase tracking-wider text-primary">Subject (e.g., Visiting Brother)</label>
                                <Input id="subject" value={formData.subject} onChange={handleChange} placeholder="Visiting Brother" className="rounded-none border-border focus-visible:ring-accent" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold uppercase tracking-wider text-primary">Message *</label>
                                <Textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Please detail your inquiry here..."
                                    className="rounded-none border-border focus-visible:ring-accent min-h-[150px]"
                                />
                            </div>

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full md:w-auto px-12 py-6 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest font-semibold disabled:opacity-50 transition-opacity"
                                >
                                    {isSubmitting ? "Sending..." : "Submit Message"}
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="bg-background border border-border p-8 md:p-12 h-full flex flex-col justify-center space-y-8">
                        <h3 className="font-serif text-2xl font-bold text-primary border-b border-border pb-4">
                            Lodge Information
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-primary uppercase tracking-widest text-sm mb-1">Stated Meeting Location</h4>
                                    <p className="text-muted-foreground font-sans">
                                        Datu Lapu-Lapu Temple<br />
                                        Babag II Rd, Cordova<br />
                                        Cebu, 6017
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-primary uppercase tracking-widest text-sm mb-1">Stated Meetings</h4>
                                    <p className="text-muted-foreground font-sans">Meets every last Friday of the Month</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-primary uppercase tracking-widest text-sm mb-1">Secretary Email</h4>
                                    <p className="text-muted-foreground font-sans">secretary@crescent419.org</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-accent shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-primary uppercase tracking-widest text-sm mb-1">Contact Number</h4>
                                    <p className="text-muted-foreground font-sans">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
