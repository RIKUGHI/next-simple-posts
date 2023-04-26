import { Prisma, PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient({ log: ['query'] })

export async function GET(request: Request) {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  })

  return NextResponse.json({ posts })
}

export async function POST(req: NextRequest) {
  const { title, content, tag } = (await req.json()) as {
    title: string
    content: string
    tag: string
  }

  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        tags: {
          connectOrCreate: {
            where: {
              name: tag,
            },
            create: {
              name: tag,
            },
          },
        },
        author: {
          connect: {
            id: 5,
          },
        },
      },
    })

    return NextResponse.json({ post })
  } catch (e) {
    if (
      e instanceof Prisma.PrismaClientKnownRequestError &&
      e.code == 'P2025'
    ) {
      console.log('User not found')
    }

    throw e
  }
}
