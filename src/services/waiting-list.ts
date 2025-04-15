import { supabase } from '@/lib/supabase';
import { WaitingListEntry } from '@/types/waiting-list';

// Sanitize email input
const sanitizeEmail = (email: string): string => {
  // Remove any whitespace
  const trimmedEmail = email.trim();
  
  // Convert to lowercase
  const lowercaseEmail = trimmedEmail.toLowerCase();
  
  // Remove any HTML tags
  const sanitizedEmail = lowercaseEmail.replace(/<[^>]*>/g, '');
  
  return sanitizedEmail;
};

// Validate email format
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const waitingListService = {
  async addToWaitingList(email: string): Promise<{ data: WaitingListEntry | null; error: Error | null }> {
    try {
      // Sanitize and validate the email
      const sanitizedEmail = sanitizeEmail(email);
      
      if (!validateEmail(sanitizedEmail)) {
        throw new Error('Invalid email format');
      }

      // Check if email already exists
      const { data: existingEntry } = await supabase
        .from('waiting_list')
        .select('email')
        .eq('email', sanitizedEmail)
        .single();

      if (existingEntry) {
        throw new Error('Email already exists in waiting list');
      }

      // Insert the sanitized email
      const { data, error } = await supabase
        .from('waiting_list')
        .insert([{ email: sanitizedEmail }])
        .select()
        .single();

      if (error) throw error;

      return { data, error: null };
    } catch (error) {
      return { data: null, error: error as Error };
    }
  },

  async getWaitingList(): Promise<{ data: WaitingListEntry[] | null; error: Error | null }> {
    try {
      const { data, error } = await supabase
        .from('waiting_list')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;

      return { data, error: null };
    } catch (error) {
      return { data: null, error: error as Error };
    }
  },

  async updateStatus(id: string, status: string): Promise<{ data: WaitingListEntry | null; error: Error | null }> {
    try {
      const { data, error } = await supabase
        .from('waiting_list')
        .update({ status })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      return { data, error: null };
    } catch (error) {
      return { data: null, error: error as Error };
    }
  }
}; 