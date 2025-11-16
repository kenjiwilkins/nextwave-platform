# NextWave Platform

Modern serverless platform built with Next.js, AWS Lambda, DynamoDB, and SST v3.

## 🏗️ Architecture

- **Frontend**: Next.js 15+ (App Router) + Vercel
- **Backend**: AWS Lambda + API Gateway
- **Database**: DynamoDB
- **Auth**: AWS Cognito
- **IaC**: SST v3
- **Monorepo**: pnpm workspaces

## 📦 Project Structure

```
nextwave-platform/
├── packages/
│   ├── web/          # Next.js frontend
│   ├── functions/    # Lambda functions
│   └── core/         # Shared types & utilities
├── infra/            # SST infrastructure definitions
├── scripts/          # Migration & operation scripts
└── docs/             # Documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- pnpm 8+
- AWS CLI configured
- AWS account with appropriate permissions

### Installation

```bash
# Clone repository
git clone https://github.com/kenjiwilkins/nextwave-platform.git
cd nextwave-platform

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Start development
pnpm dev
```

## 🌍 Environments

### Beta Environment
- **Purpose**: Integration testing, E2E testing
- **Deploy**: `pnpm deploy:beta`
- **URL**: https://beta.yourdomain.com

### Production Environment
- **Purpose**: Live production
- **Deploy**: `pnpm deploy:production`
- **URL**: https://yourdomain.com

## 📝 Development Workflow

1. Create feature branch: `git checkout -b feature/your-feature`
2. Develop locally: `pnpm dev`
3. Run tests: `pnpm test`
4. Create PR to `develop` branch
5. Auto-deploy to Beta on merge
6. Manual approval for Production deployment

## 🔧 Available Scripts

```bash
pnpm dev              # Start SST dev mode
pnpm build            # Build all packages
pnpm deploy:beta      # Deploy to Beta environment
pnpm deploy:production # Deploy to Production
pnpm test             # Run all tests
pnpm lint             # Lint all packages
pnpm typecheck        # TypeScript type checking
pnpm clean            # Clean build artifacts
```

## 📚 Documentation

- [Architecture Overview](./docs/architecture.md)
- [API Specification](./docs/api-spec.md)
- [Deployment Guide](./docs/deployment.md)
- [Migration Guide](./docs/migration.md)

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines.

## 📄 License

Private - All rights reserved
