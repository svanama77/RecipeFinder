const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const userData = [
  {
    username: 'Alice',
    email: 'alice@prisma.io',
    password: "Rad",
    favoriteRecipes: {
      create: []
    },
    shoppingLists: {create: []}
  },
  {
    username: 'Nilu',
    email: 'nilu@prisma.io',
    password: "Rad",
    favoriteRecipes: {create: []},
    shoppingLists: {create: []}
  },
  {
    username: 'Mahmoud',
    email: 'mahmoud@prisma.io',
    password: "Rad",
    favoriteRecipes: {create: []},
    shoppingLists: {create: []}
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
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
