import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient({ log: ['query'] })

export async function GET(request: Request) {
  const users = await prisma.user.findMany({})
  console.log(users)

  return NextResponse.json({ users })
}

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json()
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  })
  return NextResponse.json({ user })
}
