export interface User {
  id: string;
  name: string;
  avatarUrl?: string;
  role: string;
}

export interface Task {
  id: string;
  title: string;
  assignee: User;
  priority: 'High' | 'Medium' | 'Low';
  category: 'Development' | 'Testing' | 'Review' | 'Media' | 'Other';
  deadline: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  meetingId?: string;
}

export interface Decision {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'Confirmed' | 'Updated' | 'Conflict detected';
  meetingId?: string;
}

export interface Meeting {
  id: string;
  title: string;
  date: string;
  duration: number; // in minutes
  participants: User[];
  summary: string[];
  tasksCount: number;
  decisionsCount: number;
  productivityScore: number;
  project?: string;
}

export interface TranscriptLine {
  id: string;
  speaker: User;
  text: string;
  timestamp: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
