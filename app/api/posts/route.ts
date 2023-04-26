import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient({ log: ['query'] })

export async function GET(request: Request) {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  })

  return NextResponse.json({ posts })
}
