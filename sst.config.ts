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
    const employeeTable = new sst.aws.Dynamo("EmployeeTable", {
      fields: {
        userId: "string",
      },
      primaryIndex: { hashKey: "userId" },
    });

    const api = new sst.aws.Function("HealthCheck", {
      handler: "infra/functions/health.handler",
      url: true,
      link: [employeeTable],
    });

    return {
      api: api.url,
      employeeTable: employeeTable.name,
    };
  },
});
