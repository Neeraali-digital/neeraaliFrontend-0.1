import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="careers" class="bg-gray-900 text-white">
      <!-- Banner -->
      <div class="relative overflow-hidden">
        <img src="assets/careers-illustration.svg" alt="Careers banner" class="w-full h-64 md:h-72 object-cover opacity-90" onerror="this.style.display='none'">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center px-6">
            <h2 class="text-4xl md:text-5xl font-black mb-3">Careers</h2>
            <p class="text-gray-300 max-w-2xl mx-auto">Join our team of makers, learners, and doers. Build exceptional digital experiences with us.</p>
          </div>
        </div>
      </div>

      <div class="section-padding">
        <div class="container-custom">
          <!-- Why Join Us -->
          <div class="grid md:grid-cols-3 gap-6 mb-12">
            <div class="bg-gray-800/60 border border-white/10 rounded-2xl p-6">
              <h3 class="text-xl font-bold mb-2">Growth & Learning</h3>
              <p class="text-gray-300">Dedicated learning budgets, mentorship, and real-world projects that accelerate your growth.</p>
            </div>
            <div class="bg-gray-800/60 border border-white/10 rounded-2xl p-6">
              <h3 class="text-xl font-bold mb-2">Flexible Culture</h3>
              <p class="text-gray-300">A supportive, collaborative environment with flexibility and ownership.</p>
            </div>
            <div class="bg-gray-800/60 border border-white/10 rounded-2xl p-6">
              <h3 class="text-xl font-bold mb-2">Impactful Work</h3>
              <p class="text-gray-300">Ship work that matters to global brands and fast-growing startups.</p>
            </div>
          </div>

          <!-- Open Roles -->
          <h3 class="text-2xl font-bold mb-4">Open Roles</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Business Development Executive -->
            <div class="bg-gray-800/60 border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-brand-500/10 transition duration-300 animate-on-scroll">
              <h4 class="text-lg font-bold mb-1">Business Development Executive</h4>
              <p class="text-gray-300 text-sm">Drive growth through partnerships and client relationships.</p>
              <div class="flex items-center justify-between mt-4">
                <span class="text-xs text-brand-300 bg-brand-500/10 px-3 py-1 rounded-md">Full Time</span>
                <a href="#contact" class="text-brand-400 hover:text-brand-300 font-semibold text-sm">Learn More →</a>
              </div>
            </div>

            <!-- Web Developer -->
            <div class="bg-gray-800/60 border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-brand-500/10 transition duration-300 animate-on-scroll" style="animation-delay:0.05s">
              <h4 class="text-lg font-bold mb-1">Web Developer</h4>
              <p class="text-gray-300 text-sm">Build fast, accessible, and beautiful web experiences.</p>
              <div class="flex items-center justify-between mt-4">
                <span class="text-xs text-brand-300 bg-brand-500/10 px-3 py-1 rounded-md">Full Time</span>
                <a href="#contact" class="text-brand-400 hover:text-brand-300 font-semibold text-sm">Learn More →</a>
              </div>
            </div>

            <!-- Graphic Designer -->
            <div class="bg-gray-800/60 border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-brand-500/10 transition duration-300 animate-on-scroll" style="animation-delay:0.1s">
              <h4 class="text-lg font-bold mb-1">Graphic Designer</h4>
              <p class="text-gray-300 text-sm">Create compelling visuals and brand identities.</p>
              <div class="flex items-center justify-between mt-4">
                <span class="text-xs text-brand-300 bg-brand-500/10 px-3 py-1 rounded-md">Full Time</span>
                <a href="#contact" class="text-brand-400 hover:text-brand-300 font-semibold text-sm">Learn More →</a>
              </div>
            </div>

            <!-- Digital Marketing Executive -->
            <div class="bg-gray-800/60 border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-brand-500/10 transition duration-300 animate-on-scroll" style="animation-delay:0.15s">
              <h4 class="text-lg font-bold mb-1">Digital Marketing Executive</h4>
              <p class="text-gray-300 text-sm">Plan and execute high-performing digital campaigns.</p>
              <div class="flex items-center justify-between mt-4">
                <span class="text-xs text-brand-300 bg-brand-500/10 px-3 py-1 rounded-md">Full Time</span>
                <a href="#contact" class="text-brand-400 hover:text-brand-300 font-semibold text-sm">Learn More →</a>
              </div>
            </div>

            <!-- Social Media Executive -->
            <div class="bg-gray-800/60 border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-brand-500/10 transition duration-300 animate-on-scroll" style="animation-delay:0.2s">
              <h4 class="text-lg font-bold mb-1">Social Media Executive</h4>
              <p class="text-gray-300 text-sm">Grow and engage audiences across platforms.</p>
              <div class="flex items-center justify-between mt-4">
                <span class="text-xs text-brand-300 bg-brand-500/10 px-3 py-1 rounded-md">Full Time</span>
                <a href="#contact" class="text-brand-400 hover:text-brand-300 font-semibold text-sm">Learn More →</a>
              </div>
            </div>

            <!-- SEO Analyst -->
            <div class="bg-gray-800/60 border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-brand-500/10 transition duration-300 animate-on-scroll" style="animation-delay:0.25s">
              <h4 class="text-lg font-bold mb-1">SEO Analyst</h4>
              <p class="text-gray-300 text-sm">Optimize content and performance to rank and convert.</p>
              <div class="flex items-center justify-between mt-4">
                <span class="text-xs text-brand-300 bg-brand-500/10 px-3 py-1 rounded-md">Full Time</span>
                <a href="#contact" class="text-brand-400 hover:text-brand-300 font-semibold text-sm">Learn More →</a>
              </div>
            </div>

            <!-- Content Writer -->
            <div class="bg-gray-800/60 border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-brand-500/10 transition duration-300 animate-on-scroll" style="animation-delay:0.3s">
              <h4 class="text-lg font-bold mb-1">Content Writer</h4>
              <p class="text-gray-300 text-sm">Tell powerful stories through words across formats.</p>
              <div class="flex items-center justify-between mt-4">
                <span class="text-xs text-brand-300 bg-brand-500/10 px-3 py-1 rounded-md">Full Time</span>
                <a href="#contact" class="text-brand-400 hover:text-brand-300 font-semibold text-sm">Learn More →</a>
              </div>
            </div>

            <!-- PPC Manager -->
            <div class="bg-gray-800/60 border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-brand-500/10 transition duration-300 animate-on-scroll" style="animation-delay:0.35s">
              <h4 class="text-lg font-bold mb-1">PPC Manager</h4>
              <p class="text-gray-300 text-sm">Scale performance with paid media across channels.</p>
              <div class="flex items-center justify-between mt-4">
                <span class="text-xs text-brand-300 bg-brand-500/10 px-3 py-1 rounded-md">Full Time</span>
                <a href="#contact" class="text-brand-400 hover:text-brand-300 font-semibold text-sm">Learn More →</a>
              </div>
            </div>

            <!-- Internship -->
            <div class="bg-gray-800/60 border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-brand-500/10 transition duration-300 animate-on-scroll" style="animation-delay:0.4s">
              <h4 class="text-lg font-bold mb-1">Internship</h4>
              <p class="text-gray-300 text-sm">Kickstart your career with hands-on experience.</p>
              <div class="flex items-center justify-between mt-4">
                <span class="text-xs text-brand-300 bg-brand-500/10 px-3 py-1 rounded-md">Full Time</span>
                <a href="#contact" class="text-brand-400 hover:text-brand-300 font-semibold text-sm">Learn More →</a>
              </div>
            </div>
          </div>

          <!-- Benefits -->
          <div class="mt-12 grid md:grid-cols-2 gap-6">
            <div class="bg-gray-800/60 border border-white/10 rounded-2xl p-6">
              <h3 class="text-2xl font-bold mb-4">Benefits</h3>
              <ul class="space-y-2 text-gray-300">
                <li>Competitive compensation</li>
                <li>Flexible work hours</li>
                <li>Learning & development budgets</li>
                <li>Team offsites and events</li>
              </ul>
            </div>
            <div class="bg-gray-800/60 border border-white/10 rounded-2xl p-6">
              <h3 class="text-2xl font-bold mb-4">Our Culture</h3>
              <ul class="space-y-2 text-gray-300">
                <li>Bias for action</li>
                <li>Customer-centric</li>
                <li>Data-informed decisions</li>
                <li>Continuous improvement</li>
              </ul>
            </div>
          </div>

          <!-- CTA -->
          <div class="mt-12 text-center">
            <p class="text-gray-300 mb-4">Don’t see a role that fits? We’d still love to hear from you.</p>
            <a href="mailto:hr&#64;neeraali.com" class="btn-primary inline-block">Apply Now</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-padding { padding-top: 5rem; padding-bottom: 5rem; }
  `]
})
export class CareersComponent {}
