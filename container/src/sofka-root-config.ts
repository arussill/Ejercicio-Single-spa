import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@sofka/header",
  app: () => System.import("@sofka/header"),
  activeWhen: ["/header"]
});

registerApplication({
  name: "@sofka/mf-footer",
  app: () => System.import("@sofka/mf-footer"),
  activeWhen: ["/footer"]
});

start({
  urlRerouteOnly: true,
});
