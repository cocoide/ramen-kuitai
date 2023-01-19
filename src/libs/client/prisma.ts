/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions

import { PrismaClient } from '@prisma/client'
// 『npx prisma generate』でPrismaClientをインスタンス化

// let prisma: PrismaClient

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient()
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient()
//   }
//   prisma = global.prisma
// }
// export default prisma



declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {

  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  prisma = global.cachedPrisma
}

export const db = prisma