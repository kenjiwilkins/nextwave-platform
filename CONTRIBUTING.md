# Contributing to NextWave Platform

Thank you for contributing to NextWave Platform! This guide will help you get started.

## 📋 Development Workflow

### 1. Branch Strategy

- `main` - Production-ready code (deploys to Production)
- `develop` - Integration branch (deploys to Beta)
- `feature/*` - Feature development
- `fix/*` - Bug fixes
- `chore/*` - Maintenance tasks

### 2. Getting Started

```bash
# Clone the repository
git clone https://github.com/kenjiwilkins/nextwave-platform.git
cd nextwave-platform

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Start local development
pnpm dev
```

### 3. Making Changes

1. **Create a feature branch from `develop`**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clear, concise commit messages
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

3. **Test your changes**
   ```bash
   pnpm test          # Run tests
   pnpm typecheck     # Type checking
   pnpm lint          # Linting
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

### 4. Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks
- `ci:` - CI/CD changes

Example:
```
feat: add user authentication with Cognito
fix: resolve DynamoDB connection timeout
docs: update API documentation
```

### 5. Pull Request Process

1. **Push your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request**
   - Go to GitHub and create a PR to `develop` branch
   - Fill in the PR template
   - Link any related issues
   - Request review from team members

3. **PR Review**
   - Address any review comments
   - Ensure all CI checks pass
   - Get approval from at least one team member

4. **Merge**
   - Once approved, your PR will be merged to `develop`
   - This automatically deploys to Beta environment
   - After testing in Beta, changes can be promoted to Production

## 🏗️ Project Structure

```
nextwave-platform/
├── packages/
│   ├── web/          # Next.js frontend
│   ├── functions/    # Lambda functions
│   └── core/         # Shared code
├── infra/            # Infrastructure (SST)
├── scripts/          # Utility scripts
└── docs/             # Documentation
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Writing Tests

- Place tests next to the code they test
- Use descriptive test names
- Follow the AAA pattern (Arrange, Act, Assert)

## 📝 Code Style

- Use TypeScript for all new code
- Follow existing formatting conventions
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

## 🚀 Deployment

### Beta Environment
- Automatically deploys when PRs are merged to `develop`
- Used for integration testing
- Access: Development team only

### Production Environment
- Deploys when changes are merged to `main`
- Requires manual approval in GitHub Actions
- Production-ready code only

## 🐛 Bug Reports

When reporting bugs, please include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Environment details (Node version, OS, etc.)
- Screenshots or error messages if applicable

## 💡 Feature Requests

We welcome feature suggestions! Please include:
- Clear description of the feature
- Use case and benefits
- Any implementation ideas
- Mockups or examples if applicable

## 📞 Getting Help

- Check existing issues and documentation
- Ask questions in team chat
- Reach out to project maintainers

## 🙏 Thank You!

Your contributions make this project better. We appreciate your time and effort!
