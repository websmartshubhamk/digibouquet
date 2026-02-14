export interface Flower {
  id: string;
  name: string;
  meaning: string;
  birthMonth?: string;
  color: string;
  emoji: string;
}

export interface BouquetFlower {
  flowerId: string;
  rotation: number;
  x: number;
  y: number;
}

export interface Bouquet {
  id: string;
  flowers: BouquetFlower[];
  message?: string;
  recipientName?: string;
  senderName?: string;
  createdAt: Date;
  mode: 'color' | 'mono';
}

export type BuilderStep = 'flowers' | 'arrange' | 'message' | 'preview';
