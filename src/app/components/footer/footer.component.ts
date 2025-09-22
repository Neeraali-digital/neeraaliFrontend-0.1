import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-gray-900 text-white">
      <!-- Main Footer -->
      <div class="section-padding">
        <div class="container-custom">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Company Info -->
            <div class="lg:col-span-2">
              <h3 class="text-3xl font-bold mb-4">Neeraali</h3>
              <p class="text-gray-300 mb-6 leading-relaxed max-w-md">
                We specialize in crafting digital experiences that elevate your brand's presence across multiple platforms. 
                Transform your business with our comprehensive digital solutions.
              </p>
              
              <!-- Social Links -->
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-300">
                  <span class="material-icons text-sm">facebook</span>
                </a>
                <a href="#" class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-300">
                  <span class="material-icons text-sm">alternate_email</span>
                </a>
                <a href="#" class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-300">
                  <span class="material-icons text-sm">camera_alt</span>
                </a>
                <a href="#" class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-300">
                  <span class="material-icons text-sm">business</span>
                </a>
              </div>
            </div>

            <!-- Services -->
            <div>
              <h4 class="text-xl font-semibold mb-6">Services</h4>
              <ul class="space-y-3">
                <li><a href="#services" class="text-gray-300 hover:text-white transition-colors duration-300">Brand Identity</a></li>
                <li><a href="#services" class="text-gray-300 hover:text-white transition-colors duration-300">Digital Marketing</a></li>
                <li><a href="#services" class="text-gray-300 hover:text-white transition-colors duration-300">Web Solutions</a></li>
                <li><a href="#services" class="text-gray-300 hover:text-white transition-colors duration-300">Social Media</a></li>
                <li><a href="#services" class="text-gray-300 hover:text-white transition-colors duration-300">Creative Design</a></li>
                <li><a href="#services" class="text-gray-300 hover:text-white transition-colors duration-300">Performance Marketing</a></li>
              </ul>
            </div>

            <!-- Quick Links -->
            <div>
              <h4 class="text-xl font-semibold mb-6">Quick Links</h4>
              <ul class="space-y-3">
                <li><a href="#home" class="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="#about" class="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#portfolio" class="text-gray-300 hover:text-white transition-colors duration-300">Portfolio</a></li>
                <li><a href="#contact" class="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
                <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Blog</a></li>
                <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Careers</a></li>
              </ul>
            </div>
          </div>

          <!-- Newsletter Signup -->
          <div class="mt-12 pt-8 border-t border-gray-800">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 class="text-2xl font-semibold mb-2">Stay Updated</h4>
                <p class="text-gray-300">Get the latest insights on digital marketing and design trends.</p>
              </div>
              <div class="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  class="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                >
                <button class="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="mt-12 pt-8 border-t border-gray-800">
            <div class="grid md:grid-cols-3 gap-8">
              <div class="flex items-center">
                <span class="material-icons text-primary-500 mr-3">email</span>
                <div>
                  <div class="font-semibold">Email</div>
                  <div class="text-gray-300">helloneeraali.com</div>
                </div>
              </div>
              <div class="flex items-center">
                <span class="material-icons text-primary-500 mr-3">phone</span>
                <div>
                  <div class="font-semibold">Phone</div>
                  <div class="text-gray-300">+1 (555) 123-4567</div>
                </div>
              </div>
              <div class="flex items-center">
                <span class="material-icons text-primary-500 mr-3">location_on</span>
                <div>
                  <div class="font-semibold">Address</div>
                  <div class="text-gray-300">123 Digital Avenue, NY 10001</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="bg-gray-950 py-6">
        <div class="container-custom">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-gray-400 text-sm mb-4 md:mb-0">
              © {{ currentYear }} Neeraali. All rights reserved.
            </div>
            <div class="flex space-x-6 text-sm">
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Back to Top Button -->
      <button 
        (click)="scrollToTop()"
        class="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        title="Back to top"
      >
        <span class="material-icons">keyboard_arrow_up</span>
      </button>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}