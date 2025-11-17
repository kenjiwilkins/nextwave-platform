/// <reference path="./.sst/platform/config.d.ts" />

/**
 * SST Configuration for nextwave-platform
 *
 * Stages:
 * - dev: Local development (default)
 * - beta: Staging/testing environment
 * - production: Production environment
 *
 * Usage:
 * - sst dev (uses 'dev' stage by default)
 * - sst deploy --stage beta
 * - sst deploy --stage production
 */
export default $config({
  app(input) {
    return {
      name: "nextwave-platform",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    // Get current stage (dev, beta, production)
    const stage = $app.stage;

    // Stage-specific configuration
    const isProduction = stage === "production";

    // DynamoDB Employee Table
    const employeeTable = new sst.aws.Dynamo("EmployeeTable", {
      fields: {
        userId: "string",
      },
      primaryIndex: { hashKey: "userId" },
      // Enable point-in-time recovery for production
      transform: {
        table: {
          pointInTimeRecovery: isProduction ? { enabled: true } : undefined,
        },
      },
    });

    // Health Check Lambda Function
    const api = new sst.aws.Function("HealthCheck", {
      handler: "infra/functions/health.handler",
      url: true,
      link: [employeeTable],
      environment: {
        STAGE: stage,
      },
    });

    return {
      stage,
      api: api.url,
      employeeTable: employeeTable.name,
    };
  },
});
