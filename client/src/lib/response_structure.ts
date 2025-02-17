interface ImageFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
    provider_metadata: {
      public_id: string;
      resource_type: string;
    };
  }
  
interface Image {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats?: {
      large?: ImageFormat;
      small?: ImageFormat;
      medium?: ImageFormat;
      thumbnail?: ImageFormat;
    }; 
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: {
      public_id: string;
      resource_type: string;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }

export interface Section {
    __component: string;
    id: number;
    title: string;
    description: DescriptionBlock[];
  }
  
interface DescriptionBlock {
    type: string;
    format?: string;
    children: DescriptionChild[];
  }
  
interface DescriptionChild {
    type: string;
    text?: string;
    bold?: boolean;
    children?: DescriptionChild[];
  }
  
export interface Country {
    id: number;
    documentId: string;
    name: string;
    show_on_home: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: Image;
    Section: Section[];
  }
  
export interface Continent {
    id: number;
    documentId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: Image;
    countries: Country[];
  }
  
export interface Testimonial {
    id: number;
    documentId: string;
    name: string;
    description: string;
    feedback: string;
    stars: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: Image;
  }