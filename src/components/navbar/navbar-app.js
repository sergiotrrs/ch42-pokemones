const pages = [
  {
    name: "Home",
    url: "/index.html",
    active: false,
  },
  {
    name: "Products",
    url: "/src/pages/products/products.html",
    active: false,
  },
  {
    name: "About Us",
    url: "/src/pages/about-us/about-us.html",
    active: false,
  },
  {
    name: "Contact",
    url: "/src/pages/contact/contact.html",
    active: false,
  },
  {
    name: "Admin",
    url: "/src/pages/admin/admin.html",
    active: false,
  },
];

const navbarApp = () => {
  // Filtro para seleccionar la página visitada
  return `
      <nav>
        <ul>
          <li> <a href="/index.html"> Home </a></li>
          <li> <a href="/src/pages/products/products.html"> Products </a></li>
          <li> <a href="/src/pages/about-us/about-us.html"> About Us </a></li>
          <li> <a href="/src/pages/contact/contact.html"> Contact  </a></li>
        </ul>
      </nav>
`;
};

export { navbarApp };
