import { CupSoda, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);   // for Send Message submit Button
  const { toast } = useToast();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    const res = await fetch("http://localhost:5000/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast({
        title: "Message Sent!",
        description: "Thanks! I'll reach out soon.",
      });
      form.reset();
    } else {
      toast({ title: "Failed!", description: "Something went wrong." });
    }
  } catch (err) {
    toast({ title: "Error", description: err.message });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In<span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Open to collaborations and new projects <br /> — feel free to reach
          out to discuss opportunities. I'm always interested in <br />{" "}
          discussing innovative project ideas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:iamansingh989@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    iamansingh989@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+91-7836872954"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91-7836872954
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a
                    href="https://maps.app.goo.gl/4voPikgRR2QoPdBM9"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Gurugram, (HR) - India
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-2 flex flex-col items-center text-center">
              <h4 className="font-medium mb-2 text-lg">
                <span className="inline-flex items-center gap-1">
                  Good vibes only <CupSoda size={30} />
                </span>
                <br />
                —relax & enjoy your visit!
              </h4>
              <div className="mt-2 w-40 h-40 overflow-hidden rounded-full shadow-lg transform rotate-[10deg]">
                <img
                  className="w-full h-full object-cover"
                  src="/projects/photomania.jpg"
                  alt="Profile"
                />
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-xs" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form action="space-y-6">
              <div>
                <label htmlFor="name" className="mb-3 mt-6 block font-medium text-sm">{" "}Your Name</label>
                <input type="text" id="name" name="name" required 
                className="px-4 py-3 w-full rounded-md bg-background border border-input focus:outline-hidden focus:ring-2 focus:ring-primary" 
                placeholder="James..."/>
              </div>

              <div>
                <label htmlFor="name" className="mb-3 mt-6 block font-medium text-sm">{" "}Your Email</label>
                <input type="email" id="email" name="email" required 
                className="px-4 py-3 w-full rounded-md bg-background border border-input focus:outline-hidden focus:ring-2 focus:ring-primary" 
                placeholder="james123@gmail.com"/>
              </div>

              <div>
                <label htmlFor="name" className="mb-3 mt-6 block font-medium text-sm">{" "}Your Message</label>
                <textarea id="message" name="message" required 
                className="px-4 py-3 w-full rounded-md bg-background border border-input focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" 
                placeholder="Say something nice..."/>
              </div>

              <button type="submit" disabled={isSubmitting} className={cn(
                "cosmic-button mt-6 w-full flex items-center justify-center gap-2"
              )}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
