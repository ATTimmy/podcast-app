export interface Podcast {
  id: number;
  title: string;
  description: string;
  episodes: Episode[];
}

export interface Episode {
  id: number;
  title: string;
  description: string;
}