export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const navbarHeight = 64; // Height of the fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

export const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const id = href.slice(1);
    smoothScrollTo(id);
  }
};
