import { defineSchema } from "convex/server";
import { defineTestApp } from "convex-test";
import { expect, test } from "vitest";
import { exposeApi } from "gmi-cloud-component-convex";
import componentTest from "gmi-cloud-component-convex/test";

test("a host app can call the component through package exports", async () => {
  const app = defineTestApp({
    schema: defineSchema({}),
    components: { gmiCloudComponent: componentTest },
  });
  const { api, createTest } = app.defineModules({
    comments: exposeApi(app.components.gmiCloudComponent, {
      auth: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) throw new Error("Unauthorized");
        return identity.subject;
      },
    }),
  });
  const host = createTest().withIdentity({ subject: "example-user" });

  await host.mutation(api.comments.add, {
    targetId: "first-post",
    text: "Package smoke test",
  });

  expect(await host.query(api.comments.list, { targetId: "first-post" })).toEqual(
    [
      expect.objectContaining({
        text: "Package smoke test",
        userId: "example-user",
      }),
    ],
  );
  expect(await host.query(api.comments.list, { targetId: "other-post" })).toEqual(
    [],
  );
});
