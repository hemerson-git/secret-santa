import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const getAll = async () => {
  try {
    const events = await client.event.findMany();
    return events;
  } catch (error) {
    return false;
  }
};

export const getOne = async (id: string) => {
  try {
    const event = await client.event.findUnique({
      where: {
        id,
      },
    });
    return event;
  } catch (error) {
    return false;
  }
};

export const create = async (
  title: string,
  description: string,
  groupable?: boolean
) => {
  try {
    const event = await client.event.create({
      data: {
        title,
        description,
        groupable,
      },
    });
    return event;
  } catch (error) {
    return false;
  }
};
