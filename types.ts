import type React from 'react';

export interface CardData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  description: string;
}
