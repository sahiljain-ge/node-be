import type { ROLE } from "@prisma/client"

type User = {
  id: number,
  name: string,
  email: string,
  role : ROLE
  createdAt: Date
}