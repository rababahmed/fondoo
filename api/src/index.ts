import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.customer.create({
    data: {
      firstName: "Rabab",
      lastName: "Ahmed",
      email: "bob@prisma.io",
      phone: "+8801635335125",
      address: {
        create: {
          streetAddress: "House 956",
          city: "Dhaka",
          postCode: "1229",
          country: "Bangladesh",
        },
      },
    },
  });

  const allCustomers = await prisma.customer.findMany({
    include: {
      address: true,
    },
  });
  console.dir(allCustomers, { depth: null });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
