'use client';

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  productName: string;
  initialImageIndex?: number;
}

export default function ImageGalleryModal({ 
  isOpen, 
  onClose, 
  images, 
  productName,
  initialImageIndex = 0 
}: ImageGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialImageIndex);

  // Reset to initial index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialImageIndex);
    }
  }, [isOpen, initialImageIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 max-w-6xl max-h-[90vh] w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-white">
            <h3 className="text-xl font-bold">{productName}</h3>
            <p className="text-white/70">
              Image {currentIndex + 1} of {images.length}
            </p>
          </div>
          
          <button
            onClick={onClose}
            className="text-white hover:text-neutral-300 transition-colors p-2 rounded-full hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Main Image */}
        <div className="relative bg-white rounded-lg overflow-hidden mb-4">
          <div className="relative aspect-square max-h-[70vh]">
            <Image
              src={images[currentIndex]}
              alt={`${productName} - Image ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1536px) 90vw, 1400px"
              priority
            />
          </div>
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? 'border-white shadow-lg scale-110'
                    : 'border-white/30 hover:border-white/60'
                }`}
              >
                <Image
                  src={image}
                  alt={`${productName} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}

        {/* Instructions */}
        <div className="text-center text-white/60 text-sm mt-4">
          {images.length > 1 && (
            <p>Use arrow keys or click thumbnails to navigate • Press ESC to close</p>
          )}
        </div>
      </div>
    </div>
  );
} 