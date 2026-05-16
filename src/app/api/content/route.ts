import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const contentPath = path.join(process.cwd(), 'src/data/content.json');

export async function GET() {
  try {
    const data = await fs.readFile(contentPath, 'utf-8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read content' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newData = await request.json();
    await fs.writeFile(contentPath, JSON.stringify(newData, null, 2), 'utf-8');
    return NextResponse.json({ message: 'Content updated successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update content' }, { status: 500 });
  }
}
