import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Save to database
    await db.waitingList.create({
      data: {
        email,
        createdAt: new Date(),
      },
    });

    return NextResponse.json(
      { message: 'Successfully added to waiting list' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error adding to waiting list:', error);
    return NextResponse.json(
      { error: 'Failed to add to waiting list' },
      { status: 500 }
    );
  }
} 