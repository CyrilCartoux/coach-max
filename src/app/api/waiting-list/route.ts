import { NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Get server-side Supabase client
    const supabase = getSupabaseServerClient();

    // Insert into waiting_list table
    const { error } = await supabase
      .from('waiting_list')
      .insert([{ email }]);

    if (error) {
      console.error('Error inserting into waiting_list:', error);
      return NextResponse.json(
        { error: 'Failed to add to waiting list' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Successfully added to waiting list' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in waiting-list API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 