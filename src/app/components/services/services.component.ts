import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  buttonStyle: string;
  pattern: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'palette',
      title: 'Brand Identity',
      description: 'Create powerful brand identities that resonate with your audience and establish market presence.',
      features: ['Logo & Visual Identity', 'Brand Guidelines', 'Brand Strategy', 'Market Positioning'],
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      buttonStyle: 'bg-purple-100 hover:bg-purple-200 text-purple-700',
      pattern: 'pattern-dots'
    },
    {
      icon: 'campaign',
      title: 'Digital Marketing',
      description: 'Comprehensive digital strategies that boost online presence and drive measurable results.',
      features: ['SEO & SEM', 'Content Marketing', 'Email Campaigns', 'Analytics & Reporting'],
      color: 'bg-gradient-to-br from-brand-500 to-brand-600',
      buttonStyle: 'bg-brand-100 hover:bg-brand-200 text-brand-700',
      pattern: 'pattern-grid'
    },
    {
      icon: 'web',
      title: 'Web Solutions',
      description: 'Modern, responsive websites and applications that deliver exceptional user experiences.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Web Applications', 'CMS Development'],
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      buttonStyle: 'bg-blue-100 hover:bg-blue-200 text-blue-700',
      pattern: 'pattern-diagonal'
    },
    {
      icon: 'share',
      title: 'Social Media',
      description: 'Engage audiences and build communities across all major social media platforms.',
      features: ['Content Creation', 'Community Management', 'Social Strategy', 'Influencer Marketing'],
      color: 'bg-gradient-to-br from-pink-500 to-pink-600',
      buttonStyle: 'bg-pink-100 hover:bg-pink-200 text-pink-700',
      pattern: 'pattern-dots'
    },
    {
      icon: 'design_services',
      title: 'Creative Design',
      description: 'Stunning visual designs that communicate your message and captivate your audience.',
      features: ['Graphic Design', 'UI/UX Design', 'Print Design', 'Digital Assets'],
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      buttonStyle: 'bg-orange-100 hover:bg-orange-200 text-orange-700',
      pattern: 'pattern-grid'
    },
    {
      icon: 'analytics',
      title: 'Performance Marketing',
      description: 'Data-driven strategies focused on measurable results and ROI optimization.',
      features: ['Analytics Setup', 'Conversion Optimization', 'A/B Testing', 'Performance Tracking'],
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      buttonStyle: 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700',
      pattern: 'pattern-diagonal'
    }
  ];
}