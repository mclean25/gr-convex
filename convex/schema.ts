import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  lists: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
  }),
  items: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    listId: v.id("lists"),
  }),
});
