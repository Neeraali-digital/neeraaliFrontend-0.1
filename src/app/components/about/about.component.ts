import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div class="animate-on-scroll">
            <h2 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span class="text-primary-600">Neeraali</span>
            </h2>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              At Neeraali, we believe in the power of digital transformation. Our mission is to help businesses 
              thrive in the digital landscape by creating compelling brand experiences that resonate with audiences 
              and drive meaningful results.
            </p>
            
            <!-- Stats -->
            <div class="grid grid-cols-2 gap-8 mb-8">
              <div class="text-center">
                <div class="text-4xl font-bold text-primary-600 mb-2">150+</div>
                <div class="text-gray-600">Projects Completed</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-primary-600 mb-2">98%</div>
                <div class="text-gray-600">Client Satisfaction</div>
              </div>
            </div>

            <!-- Values -->
            <div class="space-y-4">
              <div class="flex items-start">
                <span class="material-icons text-primary-600 mr-3 mt-1">lightbulb</span>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Innovation First</h4>
                  <p class="text-gray-600">We stay ahead of digital trends to deliver cutting-edge solutions.</p>
                </div>
              </div>
              <div class="flex items-start">
                <span class="material-icons text-primary-600 mr-3 mt-1">groups</span>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Client Partnership</h4>
                  <p class="text-gray-600">We work as strategic partners, not just service providers.</p>
                </div>
              </div>
              <div class="flex items-start">
                <span class="material-icons text-primary-600 mr-3 mt-1">trending_up</span>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Results Driven</h4>
                  <p class="text-gray-600">Every strategy is designed to deliver measurable business outcomes.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Visual -->
          <div class="animate-on-scroll" style="animation-delay: 0.3s;">
            <div class="relative">
              <!-- Main Visual -->
              <div class="bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 class="text-2xl font-bold mb-6">Why Choose Neeraali?</h3>
                
                <div class="space-y-6">
                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                      <span class="material-icons">verified</span>
                    </div>
                    <div>
                      <h4 class="font-semibold">Proven Expertise</h4>
                      <p class="text-sm text-primary-100">Years of experience across industries</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                      <span class="material-icons">speed</span>
                    </div>
                    <div>
                      <h4 class="font-semibold">Fast Delivery</h4>
                      <p class="text-sm text-primary-100">Efficient processes, timely results</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                      <span class="material-icons">support_agent</span>
                    </div>
                    <div>
                      <h4 class="font-semibold">24/7 Support</h4>
                      <p class="text-sm text-primary-100">Always here when you need us</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Floating Elements -->
              <div class="absolute -top-4 -right-4 w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center animate-float">
                <span class="material-icons text-white">rocket_launch</span>
              </div>
              <div class="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-300 rounded-full animate-float" style="animation-delay: 1s;"></div>
            </div>
          </div>
        </div>

        <!-- Team Section -->
        <div class="mt-20 animate-on-scroll">
          <h3 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Expert Team</h3>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-24 h-24 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="material-icons text-3xl text-white">person</span>
              </div>
              <h4 class="text-xl font-semibold text-gray-900 mb-2">Creative Directors</h4>
              <p class="text-gray-600">Visionary leaders who shape brand narratives</p>
            </div>
            <div class="text-center">
              <div class="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="material-icons text-3xl text-white">code</span>
              </div>
              <h4 class="text-xl font-semibold text-gray-900 mb-2">Tech Specialists</h4>
              <p class="text-gray-600">Expert developers and digital architects</p>
            </div>
            <div class="text-center">
              <div class="w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="material-icons text-3xl text-white">psychology</span>
              </div>
              <h4 class="text-xl font-semibold text-gray-900 mb-2">Strategy Experts</h4>
              <p class="text-gray-600">Data-driven strategists and analysts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}