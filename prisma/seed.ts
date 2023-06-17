import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
//   const allDatasets = await prisma.datasets.findMany()
//   console.log(allDatasets)
const result = await prisma.datasets.create({
    data: {
        title: "testfile",
        cid: "QmWYN4QK7TzTF6pHyazpEnR8dSh7omu4s36BLe8429r3sr",
        description: "91 Bytes",
    },
  })
  console.log(result)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })