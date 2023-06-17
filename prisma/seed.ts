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
        address: "0x12Eb84C64d30bCB08fFC75c7E38CB9a8a9D8983d",
        contributors: ["0x12Eb84C64d30bCB08fFC75c7E38CB9a8a9D8983d", "0x12Eb84C64d30bCB08fFC75c7E38CB9a8a9D8983d"]
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