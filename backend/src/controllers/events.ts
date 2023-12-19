import { RequestHandler } from "express";
import * as events from "../services/events";
import { z } from "zod";

export const getAll: RequestHandler = async (req, res) => {
  const items = await events.getAll();
  if (items) return res.json({ events: items });

  res.json({ error: "something went wrong" });
};

export const getOne: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const item = await events.getOne(id);
  if (item) return res.json({ event: item });

  res.json({ error: "something went wrong" });
};

export const create: RequestHandler = async (req, res) => {
  const { title, description, groupable } = req.body;
  const item = await events.create(title, description, groupable);
  if (item) return res.json({ event: item });

  res.json({ error: "something went wrong" });
};
