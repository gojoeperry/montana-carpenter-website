'use client';

import Image, { ImageProps } from 'next/image';
import { useState, forwardRef } from 'react';
import { cn } from '@/lib/utils';

// Generate blur data URL for placeholder
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#0A3A2E" offset="20%" />
      <stop stop-color="#3E2723" offset="50%" />
      <stop stop-color="#0A3A2E" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#FAFAF8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" opacity="0.3" />
  <animate attributeName="x" from="-${w}" to="${w}" dur="1.5s" repeatCount="indefinite" />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

interface OptimizedImageProps extends Omit<ImageProps, 'placeholder' | 'onLoad'> {
  /** Whether this image is above the fold (should be prioritized) */
  priority?: boolean;
  /** Custom aspect ratio classes */
  aspectRatio?: 'square' | 'video' | 'photo' | 'wide' | 'tall';
  /** Loading animation variant */
  loadingVariant?: 'shimmer' | 'blur' | 'fade';
  /** Whether to show a fallback on error */
  showFallback?: boolean;
  /** Custom fallback image */
  fallbackSrc?: string;
  /** Caption for accessibility */
  caption?: string;
  /** Whether this image is decorative (purely visual) */
  decorative?: boolean;
}

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  photo: 'aspect-[4/3]',
  wide: 'aspect-[16/9]',
  tall: 'aspect-[3/4]',
};

export const OptimizedImage = forwardRef<HTMLDivElement, OptimizedImageProps>(
  ({
    src,
    alt,
    width,
    height,
    className,
    priority = false,
    aspectRatio,
    loadingVariant = 'shimmer',
    showFallback = true,
    fallbackSrc = '/images/placeholder-carpenter.jpg',
    caption,
    decorative = false,
    sizes,
    ...props
  }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // Default sizes if not provided
    const defaultSizes = sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

    // Generate blur placeholder
    const blurDataURL = `data:image/svg+xml;base64,${toBase64(
      shimmer(Number(width) || 700, Number(height) || 475)
    )}`;

    const handleLoad = () => {
      setIsLoading(false);
    };

    const handleError = () => {
      setHasError(true);
      setIsLoading(false);
    };

    const imageClassName = cn(
      'transition-all duration-300 ease-in-out',
      {
        'opacity-0 scale-105': isLoading && loadingVariant === 'fade',
        'opacity-100 scale-100': !isLoading || loadingVariant !== 'fade',
        'filter blur-sm': isLoading && loadingVariant === 'blur',
        'filter blur-none': !isLoading || loadingVariant !== 'blur',
      },
      className
    );

    const containerClassName = cn(
      'relative overflow-hidden',
      aspectRatio && aspectRatioClasses[aspectRatio],
      {
        'bg-gradient-to-r from-[#FAFAF8] via-[#F5F5F5] to-[#FAFAF8] animate-pulse': 
          isLoading && loadingVariant === 'shimmer',
      }
    );

    return (
      <figure ref={ref} className={containerClassName}>
        {/* Loading overlay for shimmer effect */}
        {isLoading && loadingVariant === 'shimmer' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        )}

        {/* Main image */}
        <Image
          src={hasError && showFallback ? fallbackSrc : src}
          alt={decorative ? '' : alt}
          width={width}
          height={height}
          priority={priority}
          sizes={defaultSizes}
          placeholder="blur"
          blurDataURL={blurDataURL}
          onLoad={handleLoad}
          onError={handleError}
          className={imageClassName}
          quality={85}
          {...props}
        />

        {/* Loading skeleton for above-fold images */}
        {isLoading && priority && (
          <div className="absolute inset-0 bg-[#FAFAF8] animate-pulse">
            <div className="w-full h-full bg-gradient-to-r from-[#0A3A2E]/10 via-[#3E2723]/5 to-[#0A3A2E]/10" />
          </div>
        )}

        {/* Error state */}
        {hasError && !showFallback && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#FAFAF8] border-2 border-dashed border-[#333333]">
            <div className="text-center text-[#333333]">
              <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Image not found</p>
            </div>
          </div>
        )}

        {/* Caption */}
        {caption && !decorative && (
          <figcaption className="mt-2 text-sm text-[#333333] text-center">
            {caption}
          </figcaption>
        )}

        {/* Screen reader only alt text for decorative images */}
        {decorative && alt && (
          <span className="sr-only">{alt}</span>
        )}
      </figure>
    );
  }
);

OptimizedImage.displayName = 'OptimizedImage';

// Higher-order component for lazy loading images
export function LazyImage(props: OptimizedImageProps) {
  return <OptimizedImage {...props} loading="lazy" />;
}

// Component for hero/above-fold images
export function HeroImage(props: OptimizedImageProps) {
  return <OptimizedImage {...props} priority={true} />;
}

// Component for gallery images with consistent aspect ratio
export function GalleryImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      aspectRatio="photo"
      loadingVariant="fade"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}

// Component for thumbnail images
export function ThumbnailImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      aspectRatio="square"
      loadingVariant="shimmer"
      sizes="(max-width: 768px) 50vw, 25vw"
    />
  );
}