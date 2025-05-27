"use client";

import { Navbar, NavBody, NavItems, MobileNav, NavbarLogo, NavbarButton, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function WeethubNavigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [{
    name: "Assessoria",
    link: "/assessoria"
  }, {
    name: "Loja Virtual",
    link: "/loja-virtual"
  }, {
    name: "Cases",
    link: "/cases"
  }, {
    name: "Sobre Nós",
    link: "/sobre-nos"
  }, {
    name: "Blog",
    link: "/blog"
  }];

  return <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          
          <NavbarButton variant="primary" href="/fale-conosco">
            Fale Conosco
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item, idx) => <a key={`mobile-link-${idx}`} href={item.link} onClick={() => setIsMobileMenuOpen(false)} className={`relative text-gray-700 hover:text-weethub-yellow transition-colors ${location.pathname === item.link ? 'text-weethub-yellow font-medium' : ''}`}>
              <span className="block">{item.name}</span>
            </a>)}
          <div className="flex w-full flex-col gap-4 mt-4">
            <NavbarButton href="/trabalhe-conosco" onClick={() => setIsMobileMenuOpen(false)} variant="secondary" className="w-full">
              Trabalhe Conosco
            </NavbarButton>
            <NavbarButton href="/fale-conosco" onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
              Fale Conosco
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>;
}
