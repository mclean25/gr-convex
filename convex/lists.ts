import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const lists = await ctx.db.query("lists").take(20);

    const items = lists.map(async (list) => {
      const items = await ctx.db
        .query("items")
        .filter((q) => q.eq(q.field("listId"), list._id))
        .collect();
      return { ...list, items };
    });

    return await Promise.all(items);
  },
});
