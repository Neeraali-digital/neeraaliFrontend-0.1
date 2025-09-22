import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="section-padding bg-gray-50">
      <div class="container-custom">
        <!-- Section Header -->
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div class="animate-on-scroll">
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              
              <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      [(ngModel)]="formData.firstName"
                      name="firstName"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="John"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      [(ngModel)]="formData.lastName"
                      name="lastName"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Doe"
                    >
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    [(ngModel)]="formData.email"
                    name="email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  >
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    [(ngModel)]="formData.phone"
                    name="phone"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  >
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Service Interested In</label>
                  <select 
                    [(ngModel)]="formData.service"
                    name="service"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="brand-identity">Brand Identity</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="web-solutions">Web Solutions</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="creative-design">Creative Design</option>
                    <option value="performance-marketing">Performance Marketing</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Project Budget</label>
                  <select 
                    [(ngModel)]="formData.budget"
                    name="budget"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    [(ngModel)]="formData.message"
                    name="message"
                    required
                    rows="4"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project and goals..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  [disabled]="!contactForm.form.valid"
                  class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span class="flex items-center justify-center">
                    <span class="material-icons mr-2">send</span>
                    Send Message
                  </span>
                </button>
              </form>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="animate-on-scroll" style="animation-delay: 0.3s;">
            <div class="space-y-8">
              <!-- Contact Cards -->
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                    <span class="material-icons text-white">email</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Email Us</h4>
                    <p class="text-gray-600">helloneeraali.com</p>
                  </div>
                </div>
                <p class="text-sm text-gray-600">Get in touch via email for detailed discussions about your project.</p>
              </div>

              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <span class="material-icons text-white">phone</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Call Us</h4>
                    <p class="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <p class="text-sm text-gray-600">Speak directly with our team for immediate assistance and consultation.</p>
              </div>

              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <span class="material-icons text-white">location_on</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Visit Us</h4>
                    <p class="text-gray-600">123 Digital Avenue<br>Innovation District, NY 10001</p>
                  </div>
                </div>
                <p class="text-sm text-gray-600">Schedule a meeting at our office for in-person collaboration.</p>
              </div>

              <!-- Social Media -->
              <div class="bg-gradient-to-br from-primary-600 to-purple-600 rounded-2xl p-6 text-white">
                <h4 class="text-xl font-semibold mb-4">Follow Us</h4>
                <p class="mb-6 text-primary-100">Stay updated with our latest work and industry insights.</p>
                <div class="flex space-x-4">
                  <a href="#" class="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                    <span class="material-icons">facebook</span>
                  </a>
                  <a href="#" class="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                    <span class="material-icons">alternate_email</span>
                  </a>
                  <a href="#" class="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                    <span class="material-icons">camera_alt</span>
                  </a>
                  <a href="#" class="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                    <span class="material-icons">business</span>
                  </a>
                </div>
              </div>

              <!-- Response Time -->
              <div class="bg-accent-50 rounded-2xl p-6 border border-accent-200">
                <div class="flex items-center mb-3">
                  <span class="material-icons text-accent-600 mr-2">schedule</span>
                  <h4 class="font-semibold text-gray-900">Quick Response</h4>
                </div>
                <p class="text-gray-600">We typically respond to all inquiries within 24 hours during business days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  };

  onSubmit() {
    if (this.isFormValid()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', this.formData);
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      this.resetForm();
    }
  }

  private isFormValid(): boolean {
    return !!(this.formData.firstName && 
             this.formData.lastName && 
             this.formData.email && 
             this.formData.service && 
             this.formData.message);
  }

  private resetForm() {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      message: ''
    };
  }
}