const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-8 px-4">
      <div className="container-tight flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-bold text-foreground">
          GIRIDHARI<span className="text-primary">.</span>
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Giridhari Padhy. All rights reserved. Crafted with passion ❤️.
        </p>
      </div>
    </footer>
  )
};

export default Footer;
