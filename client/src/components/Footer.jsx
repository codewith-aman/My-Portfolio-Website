import { ChevronUp, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-2 mb-4 px-4 bg-card relative border-t border-border mt-12 pt-6 flex items-center">
      <a target="_blank" href="https://www.linkedin.com/in/aman-balhara-604356267/" 
      className="mx-4 p-4 rounded-full bg-primary/10 hover:bg-primary/30 text-primary transition-colors">
        <Linkedin size={30}/>
      </a>
      <div className="flex-1 flex justify-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Aman Singh. All rights reserved.
        </p>
      </div>
      <a
        href="#hero"
        className="p-3 rounded-full bg-primary/10 hover:bg-primary/30 text-primary transition-colors"
      >
        <ChevronUp size={40} />
      </a>
    </footer>
  );
};
