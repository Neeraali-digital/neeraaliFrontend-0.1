import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="portfolio" class="section-padding bg-gray-50">
      <div class="container-custom">
        <!-- Section Header -->
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Portfolio</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results.
          </p>
          
          <!-- Filter Buttons -->
          <div class="flex flex-wrap justify-center gap-4">
            <button 
              *ngFor="let category of categories"
              (click)="filterProjects(category)"
              [class]="getFilterButtonClass(category)"
              class="px-6 py-2 rounded-full font-semibold transition-all duration-300"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <!-- Portfolio Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let project of filteredProjects; let i = index"
            class="group cursor-pointer animate-on-scroll"
            [style.animation-delay]="(i * 0.1) + 's'"
          >
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <!-- Project Image Placeholder -->
              <div [class]="'h-64 flex items-center justify-center text-white ' + project.color">
                <div class="text-center">
                  <span class="material-icons text-6xl mb-4">{{ getProjectIcon(project.category) }}</span>
                  <div class="text-sm opacity-75">{{ project.image }}</div>
                </div>
              </div>
              
              <!-- Project Content -->
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                    {{ project.category }}
                  </span>
                  <span class="material-icons text-gray-400 group-hover:text-primary-600 transition-colors duration-300">
                    arrow_outward
                  </span>
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {{ project.title }}
                </h3>
                
                <p class="text-gray-600 mb-4 leading-relaxed">
                  {{ project.description }}
                </p>
                
                <!-- Tags -->
                <div class="flex flex-wrap gap-2">
                  <span 
                    *ngFor="let tag of project.tags"
                    class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Testimonials -->
        <div class="mt-20 animate-on-scroll">
          <h3 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Client Testimonials</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let testimonial of testimonials" class="bg-white rounded-2xl p-6 shadow-lg">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                  <span class="material-icons text-white">person</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ testimonial.name }}</h4>
                  <p class="text-sm text-gray-600">{{ testimonial.position }}</p>
                </div>
              </div>
              <p class="text-gray-700 italic leading-relaxed">
                "{{ testimonial.quote }}"
              </p>
              <div class="flex text-accent-500 mt-4">
                <span class="material-icons" *ngFor="let star of [1,2,3,4,5]">star</span>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-16 animate-on-scroll">
          <div class="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 class="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p class="text-xl mb-8 text-primary-100">
              Let's create something amazing together and make your brand the next success story.
            </p>
            <a href="#contact" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PortfolioComponent {
  activeFilter = 'All';
  
  categories = ['All', 'Brand Identity', 'Web Design', 'Digital Marketing', 'Social Media'];
  
  projects: Project[] = [
    {
      title: 'TechStart Brand Identity',
      category: 'Brand Identity',
      description: 'Complete brand identity design for a innovative tech startup, including logo, guidelines, and visual system.',
      image: 'Brand Identity Showcase',
      tags: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
      color: 'bg-gradient-to-br from-purple-500 to-pink-600'
    },
    {
      title: 'E-commerce Platform',
      category: 'Web Design',
      description: 'Modern, responsive e-commerce website with seamless user experience and conversion optimization.',
      image: 'E-commerce Website',
      tags: ['E-commerce', 'Responsive Design', 'UX/UI'],
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    },
    {
      title: 'Digital Campaign Success',
      category: 'Digital Marketing',
      description: 'Comprehensive digital marketing campaign that increased brand awareness by 300% and ROI by 250%.',
      image: 'Marketing Campaign',
      tags: ['SEO', 'PPC', 'Content Marketing'],
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
    },
    {
      title: 'Social Media Growth',
      category: 'Social Media',
      description: 'Strategic social media management that grew follower base by 500% and engagement by 400%.',
      image: 'Social Media Strategy',
      tags: ['Content Creation', 'Community Management', 'Analytics'],
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
    },
    {
      title: 'Corporate Rebranding',
      category: 'Brand Identity',
      description: 'Complete corporate rebranding project for established company entering new markets.',
      image: 'Corporate Rebrand',
      tags: ['Rebranding', 'Corporate Identity', 'Market Research'],
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600'
    },
    {
      title: 'SaaS Platform Design',
      category: 'Web Design',
      description: 'User-centered design for complex SaaS platform with focus on usability and conversion.',
      image: 'SaaS Platform UI',
      tags: ['SaaS Design', 'User Experience', 'Dashboard Design'],
      color: 'bg-gradient-to-br from-teal-500 to-blue-600'
    }
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart',
      quote: 'Neeraali transformed our brand identity completely. The results exceeded our expectations and our brand now stands out in the competitive tech market.'
    },
    {
      name: 'Michael Chen',
      position: 'Marketing Director, GrowthCo',
      quote: 'The digital marketing campaign delivered incredible results. Our online presence grew exponentially and we saw immediate ROI improvements.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Founder, CreativeLab',
      quote: 'Working with Neeraali was a game-changer. Their strategic approach and creative execution helped us reach new heights in our industry.'
    }
  ];

  filteredProjects = this.projects;

  filterProjects(category: string) {
    this.activeFilter = category;
    this.filteredProjects = category === 'All' 
      ? this.projects 
      : this.projects.filter(project => project.category === category);
  }

  getFilterButtonClass(category: string): string {
    return this.activeFilter === category
      ? 'bg-primary-600 text-white shadow-lg'
      : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600';
  }

  getProjectIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'Brand Identity': 'palette',
      'Web Design': 'web',
      'Digital Marketing': 'campaign',
      'Social Media': 'share'
    };
    return icons[category] || 'work';
  }
}