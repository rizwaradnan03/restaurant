import { PrismaClient } from "@prisma/client";

//CASL
export type CONFIG_CASL_Actions = "create" | "read" | "update" | "delete";
export type CONFIG_CASL_Subjects = "Article" | "User" | "all";

//Prisma
export const prisma = new PrismaClient();
