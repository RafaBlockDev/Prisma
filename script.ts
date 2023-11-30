import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/*async function main() {
  const user = await prisma.user.create({
    data: {
        address: "0x56b35Ca64163AbBA999F7fe5B87473e7Bf56b09E",
    },
  })
  console.log("User Data", user)
}
*/

async function main() {
    const users = await prisma.user.findMany();
    console.log("USERS: ", users)
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