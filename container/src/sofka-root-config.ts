import { registerApplication, start } from "single-spa";


registerApplication({
  name: "@sofka/mf-footer",
  app: () => System.import("@sofka/mf-footer"),
  activeWhen: ["/"]
});
registerApplication({
  name: "@sofka/header",
  app: () => System.import("@sofka/header"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
