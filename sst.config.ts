/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "nextwave-platform",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const api = new sst.aws.Function("HealthCheck", {
      handler: "infra/functions/health.handler",
      url: true,
    });

    return {
      api: api.url,
    };
  },
});
