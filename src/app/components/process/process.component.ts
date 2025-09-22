import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-padding bg-white">
      <div class="container-custom">
        <!-- Section Header -->
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Process</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures every project delivers exceptional results through strategic planning and flawless execution.
          </p>
        </div>

        <!-- Process Steps -->
        <div class="relative">
          <!-- Connection Line -->
          <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-600 transform -translate-y-1/2 z-0"></div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            <div 
              *ngFor="let step of processSteps; let i = index"
              class="text-center animate-on-scroll"
              [style.animation-delay]="(i * 0.2) + 's'"
            >
              <!-- Step Number Circle -->
              <div class="relative mb-6">
                <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <span class="text-2xl font-bold text-white">{{ step.number }}</span>
                </div>
                <!-- Icon -->
                <div class="absolute -bottom-2 -right-2 w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center shadow-lg">
                  <span class="material-icons text-white text-sm">{{ step.icon }}</span>
                </div>
              </div>

              <!-- Step Content -->
              <h3 class="text-xl font-bold text-gray-900 mb-4">{{ step.title }}</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ step.description }}</p>
              
              <!-- Step Details -->
              <div class="bg-gray-50 rounded-lg p-4">
                <ul class="text-sm text-gray-700 space-y-2">
                  <li *ngFor="let detail of step.details" class="flex items-center">
                    <span class="material-icons text-primary-600 mr-2 text-xs">fiber_manual_record</span>
                    {{ detail }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Process Benefits -->
        <div class="mt-20 animate-on-scroll">
          <div class="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h3 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Why Our Process Works</h3>
            
            <div class="grid md:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span class="material-icons text-2xl text-white">schedule</span>
                </div>
                <h4 class="text-xl font-semibold text-gray-900 mb-3">Time Efficient</h4>
                <p class="text-gray-600">Streamlined workflow ensures projects are delivered on time without compromising quality.</p>
              </div>
              
              <div class="text-center">
                <div class="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span class="material-icons text-2xl text-white">verified</span>
                </div>
                <h4 class="text-xl font-semibold text-gray-900 mb-3">Quality Assured</h4>
                <p class="text-gray-600">Multiple checkpoints and reviews guarantee exceptional quality at every stage.</p>
              </div>
              
              <div class="text-center">
                <div class="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span class="material-icons text-2xl text-white">groups</span>
                </div>
                <h4 class="text-xl font-semibold text-gray-900 mb-3">Collaborative</h4>
                <p class="text-gray-600">Continuous client involvement ensures the final result exceeds expectations.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Timeline Visualization -->
        <div class="mt-20 animate-on-scroll">
          <h3 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Project Timeline</h3>
          
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div class="text-center">
                <div class="text-2xl font-bold text-primary-600 mb-1">Week 1-2</div>
                <div class="text-gray-600">Discovery & Strategy</div>
              </div>
              <div class="hidden md:block w-8 h-1 bg-primary-200"></div>
              <div class="text-center">
                <div class="text-2xl font-bold text-primary-600 mb-1">Week 3-4</div>
                <div class="text-gray-600">Design & Development</div>
              </div>
              <div class="hidden md:block w-8 h-1 bg-primary-200"></div>
              <div class="text-center">
                <div class="text-2xl font-bold text-primary-600 mb-1">Week 5-6</div>
                <div class="text-gray-600">Testing & Refinement</div>
              </div>
              <div class="hidden md:block w-8 h-1 bg-primary-200"></div>
              <div class="text-center">
                <div class="text-2xl font-bold text-primary-600 mb-1">Week 7-8</div>
                <div class="text-gray-600">Launch & Optimization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProcessComponent {
  processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into understanding your business, goals, and target audience to create a strategic foundation.',
      icon: 'search',
      details: [
        'Business Analysis',
        'Market Research',
        'Competitor Analysis',
        'Goal Definition'
      ]
    },
    {
      number: '02',
      title: 'Design & Planning',
      description: 'Creative concepts and detailed planning ensure every element aligns with your brand and objectives.',
      icon: 'design_services',
      details: [
        'Creative Concepts',
        'Wireframing',
        'Visual Design',
        'Technical Planning'
      ]
    },
    {
      number: '03',
      title: 'Development & Creation',
      description: 'Our expert team brings the vision to life with precision, quality, and attention to detail.',
      icon: 'build',
      details: [
        'Content Creation',
        'Development',
        'Quality Assurance',
        'Performance Testing'
      ]
    },
    {
      number: '04',
      title: 'Launch & Optimize',
      description: 'Strategic launch followed by continuous monitoring and optimization for maximum impact.',
      icon: 'rocket_launch',
      details: [
        'Strategic Launch',
        'Performance Monitoring',
        'Data Analysis',
        'Continuous Optimization'
      ]
    }
  ];
}