export interface CardListData {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: CardListResultData[];
}

export interface CardListResultData {
  id: number;
  team: string;
  name: string;
  backgroundColor: string;
  backgroundImageURL?: string | null;
  createdAt: string;
  messageCount: number;
  recentMessages?: RecentMessages[];
  reactionCount: number;
  topReactions?: TopReactions[];
}

export interface RecentMessages {
  id: number;
  recipientId: number;
  sender: string;
  profileImageURL: string;
  relationship: string;
  content: string;
  font: string;
  createdAt: string;
}

export interface TopReactions {
  id: number;
  emoji: string;
  count: number;
}

export interface PostRecipientData {
  id: number;
  name: string;
  backgroundColor: string;
  backgroundImageURL: string | null;
  createdAt: string;
  messageCount: number;
  recentMessages: RecentMessage[];
  reactionCount: number;
  topReactions: Reaction[];
}

export interface PostRecentMessage {
  id: number;
  recipientId: number;
  sender: string;
  profileImageURL: string;
  relationship: string;
  content: string;
  font: string;
  createdAt: string;
}

export interface PostReaction {
  id: number;
  emoji: string;
  count: number;
}

export interface Sender {
  id: number;
  profileImageURL: string;
}
