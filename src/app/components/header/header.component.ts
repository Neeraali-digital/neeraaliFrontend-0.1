import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  href: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled = false;
  mobileMenuOpen = false;

  navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' }
  ];

  get headerClass() {
    return this.isScrolled 
      ? 'header-blur shadow-2xl' 
      : 'bg-transparent';
  }

  get mobileMenuClass() {
    return this.mobileMenuOpen 
      ? 'max-h-96 opacity-100 mobile-menu' 
      : 'max-h-0 opacity-0';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}