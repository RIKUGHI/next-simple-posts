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

export const PUT = async (req: NextRequest) => {
  const { title, content, id } = await req.json()

  const post = await prisma.post.update({
    where: {
      id: Number(id),
    },
    data: {
      title,
      content,
    },
  })

  return NextResponse.json({ post })
}

export const DELETE = async (req: NextRequest) => {
  const url = new URL(req.url).searchParams
  const id = Number(url.get('id')) || 0

  const post = await prisma.post.delete({
    where: {
      id: id,
    },
  })

  if (!post) {
    return NextResponse.json({ message: 'Error' }, { status: 500 })
  }

  return NextResponse.json({})
}
