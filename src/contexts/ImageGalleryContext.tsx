'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import ImageGalleryModal from '@/components/ui/ImageGalleryModal';

interface ImageGalleryContextType {
  openGallery: (images: string[], productName: string, initialIndex?: number) => void;
  closeGallery: () => void;
}

const ImageGalleryContext = createContext<ImageGalleryContextType | undefined>(undefined);

export function useImageGallery() {
  const context = useContext(ImageGalleryContext);
  if (!context) {
    throw new Error('useImageGallery must be used within an ImageGalleryProvider');
  }
  return context;
}

interface ImageGalleryProviderProps {
  children: ReactNode;
}

export function ImageGalleryProvider({ children }: ImageGalleryProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [productName, setProductName] = useState('');
  const [initialIndex, setInitialIndex] = useState(0);

  const openGallery = (galleryImages: string[], name: string, index: number = 0) => {
    setImages(galleryImages);
    setProductName(name);
    setInitialIndex(index);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  return (
    <ImageGalleryContext.Provider value={{ openGallery, closeGallery }}>
      {children}
      <ImageGalleryModal
        isOpen={isOpen}
        onClose={closeGallery}
        images={images}
        productName={productName}
        initialImageIndex={initialIndex}
      />
    </ImageGalleryContext.Provider>
  );
} 