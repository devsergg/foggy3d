import { ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Idea & Concept',
    description: 'We start by understanding your vision and requirements through detailed consultation.',
    details: [
      'Fill out our contact form with project details',
      'Schedule a call or in-person meeting to discuss your needs',
      'Concept sketching and brainstorming session',
      'Feasibility analysis and material considerations',
      'Project timeline and cost estimation'
    ],
    icon: '💡'
  },
  {
    id: 2,
    title: 'Digital Design',
    description: 'Professional 3D modeling in Fusion 360 with detailed renderings for your review.',
    details: [
      'Professional CAD modeling in Fusion 360',
      'Design optimization for 3D printing constraints',
      'High-quality renderings and design previews',
      'Multiple versions and iterations as needed',
      'Client review and approval before printing'
    ],
    icon: '🖥️'
  },
  {
    id: 3,
    title: '3D Printing',
    description: 'High-quality printing using Bambu Lab printers, known for precision and reliability.',
    details: [
      'Material selection based on application requirements',
      'Bambu Lab printers for exceptional quality',
      'Print parameter optimization for best results',
      'Real-time monitoring during printing process',
      'Support structure design and careful removal'
    ],
    icon: '🖨️'
  },
  {
    id: 4,
    title: 'Finishing & Delivery',
    description: 'Professional post-processing as needed, with both local pickup and shipping options.',
    details: [
      'Support removal and surface smoothing',
      'Post-processing treatments as needed (sanding, painting, etc.)',
      'Quality control inspection and testing',
      'Local pickup available in San Francisco Bay Area',
      'Professional packaging and shipping nationwide'
    ],
    icon: '📦'
  }
]; 