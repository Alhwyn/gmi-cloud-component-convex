import { defineApp } from "convex/server";
import gmiCloudComponent from "gmi-cloud-component-convex/convex.config.js";

const app = defineApp();
app.use(gmiCloudComponent, { httpPrefix: "/comments/" });

export default app;
