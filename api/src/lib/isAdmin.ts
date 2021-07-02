import prisma from "../PrismaClient";

export const isAdmin = async (req: any, res: any) => {
  try {
    const id = req.body.role;
    const user = await prisma.user.findUnique({ where: { id: id } });

    if (user && user.role === "Admin") {
      return;
    }

    if (!user) {
      res.send({ message: "Not Allowed" });
    }
  } catch (e) {
    res.send(e);
  }
};
