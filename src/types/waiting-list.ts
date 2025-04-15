export interface WaitingListEntry {
  id: string;
  email: string;
  created_at: string;
  status: 'pending' | 'approved' | 'rejected';
  notes?: string;
} 