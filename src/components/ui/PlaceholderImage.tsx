import { Settings, Grid3X3 } from 'lucide-react';

interface PlaceholderImageProps {
  title: string;
  subtitle?: string;
  type?: 'roof-rail' | 'engineering' | 'product';
  className?: string;
}

export default function PlaceholderImage({ title, subtitle, type = 'engineering', className = '' }: PlaceholderImageProps) {
  const getRoofRailPlaceholder = () => (
    <div className={`aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl flex flex-col items-center justify-center text-neutral-600 border-2 border-dashed border-neutral-300 ${className}`}>
      {/* Car outline with roof rails */}
      <div className="relative mb-4">
        {/* Car body */}
        <div className="w-32 h-16 bg-neutral-400 rounded-lg relative">
          {/* Car windows */}
          <div className="absolute top-1 left-2 w-8 h-6 bg-neutral-300 rounded"></div>
          <div className="absolute top-1 right-2 w-8 h-6 bg-neutral-300 rounded"></div>
          
          {/* Roof rails on top */}
          <div className="absolute -top-1 left-1 right-1 h-1 bg-orange-500 rounded-full"></div>
          <div className="absolute -top-3 left-4 w-2 h-2 bg-orange-400 rounded-full"></div>
          <div className="absolute -top-3 left-8 w-2 h-2 bg-orange-400 rounded-full"></div>
          <div className="absolute -top-3 right-8 w-2 h-2 bg-orange-400 rounded-full"></div>
          <div className="absolute -top-3 right-4 w-2 h-2 bg-orange-400 rounded-full"></div>
          
          {/* Wheels */}
          <div className="absolute -bottom-2 left-2 w-4 h-4 bg-neutral-600 rounded-full"></div>
          <div className="absolute -bottom-2 right-2 w-4 h-4 bg-neutral-600 rounded-full"></div>
        </div>
        
        {/* Unistrut rail detail */}
        <div className="absolute -right-8 top-2 flex flex-col items-center">
          <Grid3X3 className="h-6 w-6 text-orange-500" />
          <span className="text-xs mt-1">Unistrut</span>
        </div>
        
        {/* 3D printed spacer detail */}
        <div className="absolute -left-8 top-2 flex flex-col items-center">
          <Settings className="h-6 w-6 text-blue-500" />
          <span className="text-xs mt-1">Spacers</span>
        </div>
      </div>
      
      <h3 className="font-bold text-lg text-center mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-center">{subtitle}</p>}
      <p className="text-xs mt-2 text-center text-neutral-500">Photo Coming Soon</p>
    </div>
  );

  const getGenericPlaceholder = () => (
    <div className={`aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl flex flex-col items-center justify-center text-neutral-600 border-2 border-dashed border-neutral-300 ${className}`}>
      <Settings className="h-12 w-12 mb-4 text-neutral-400" />
      <h3 className="font-bold text-lg text-center mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-center">{subtitle}</p>}
      <p className="text-xs mt-2 text-center text-neutral-500">Image Coming Soon</p>
    </div>
  );

  switch (type) {
    case 'roof-rail':
      return getRoofRailPlaceholder();
    default:
      return getGenericPlaceholder();
  }
} 