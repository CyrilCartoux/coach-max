import { supabase } from '@/lib/supabase';

// Sanitize email input
const sanitizeEmail = (email: string): string => {
  return email.trim().toLowerCase();
};

// Validate email format
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const newsletterService = {
  async subscribe(email: string): Promise<{ success: boolean; error: string | null }> {
    try {
      // Sanitize and validate the email
      const sanitizedEmail = sanitizeEmail(email);
      
      if (!validateEmail(sanitizedEmail)) {
        return { success: false, error: 'Invalid email format' };
      }

      // Check if email already exists
      const { data: existingSubscriber } = await supabase
        .from('subscribers')
        .select('email')
        .eq('email', sanitizedEmail)
        .single();

      if (existingSubscriber) {
        return { success: false, error: 'Email already subscribed' };
      }

      // Insert the new subscriber
      const { error } = await supabase
        .from('subscribers')
        .insert([{ email: sanitizedEmail }]);

      if (error) throw error;

      return { success: true, error: null };
    } catch (error) {
      return { success: false, error: 'Failed to subscribe. Please try again.' };
    }
  }
}; 