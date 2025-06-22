import { EngineeringProject } from '@/types';

export const engineeringProjects: EngineeringProject[] = [
  {
    id: 'eng-001',
    title: 'Modular Roof Rail System',
    description: 'Innovative roof rail system combining custom 3D printed spacers with unistrut rails to create a strong, versatile, and affordable multi-attachment system. More cost-effective than traditional roof rack solutions.',
    category: 'automotive',
    images: ['/images/engineering/roof-rail-system.jpg', '/images/engineering/roof-rail-spacers.jpg'],
    challenges: [
      'High cost of traditional roof rack systems',
      'Limited attachment points and flexibility',
      'Complex installation requirements',
      'Weather resistance and load-bearing needs'
    ],
    solutions: [
      'Custom 3D printed spacers for precise fitment',
      'Unistrut rail integration for multiple attachment points',
      'Modular design allowing endless configuration options',
      'Significant cost savings vs. commercial alternatives'
    ],
    technologies: ['CAD Design', 'Custom Spacer Engineering', 'Unistrut Integration', 'Load Testing'],
    featured: true,
    status: 'Coming Soon',
  },
  {
    id: 'eng-002',
    title: 'Custom Industrial Fixtures',
    description: 'Precision manufacturing jigs and fixtures designed for specific industrial applications. Reduces setup time and improves consistency.',
    category: 'industrial',
    images: ['/images/industrial-fixture.jpg'],
    challenges: [
      'Tight tolerance requirements',
      'High repeatability demands',
      'Chemical resistance needs',
      'Cost-effective small batch production'
    ],
    solutions: [
      'Precision 3D printing with post-processing',
      'Integrated alignment features and guides',
      'Chemical-resistant material selection',
      'Rapid iteration and customization capabilities'
    ],
    technologies: ['Precision 3D Printing', 'Industrial Design', 'ABS Materials', 'Quality Control'],
    featured: false,
  },
  {
    id: 'eng-003',
    title: 'Rapid Prototyping Solutions',
    description: 'Fast-turnaround prototyping for product development teams. From concept validation to functional testing.',
    category: 'prototyping',
    images: ['/images/prototype-parts.jpg'],
    challenges: [
      'Quick turnaround requirements',
      'Multiple material property needs',
      'Iterative design modifications',
      'Cost control for multiple iterations'
    ],
    solutions: [
      'Streamlined design-to-print workflow',
      'Material library for different applications',
      'Version control and modification tracking',
      'Optimized printing parameters for speed'
    ],
    technologies: ['Rapid Prototyping', 'Multi-Material Printing', 'Design Optimization', 'Testing Protocols'],
    featured: false,
  },
  {
    id: 'eng-004',
    title: 'Automotive Dashboard Mount',
    description: 'Universal smartphone and tablet mounting system for vehicle dashboards. Secure, adjustable, and non-permanent installation.',
    category: 'automotive',
    images: ['/images/dash-mount.jpg'],
    challenges: [
      'Vehicle safety standards compliance',
      'Temperature extremes in car interiors',
      'Universal device compatibility',
      'Vibration resistance during driving'
    ],
    solutions: [
      'Safety-certified design and materials',
      'High-temperature resistant ABS material',
      'Adjustable clamp system for various devices',
      'Vibration-dampening base design'
    ],
    technologies: ['Automotive Engineering', 'ABS 3D Printing', 'Safety Testing', 'Universal Design'],
    featured: false,
  }
]; 