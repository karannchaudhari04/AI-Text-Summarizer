# Contributing to AI Text Summarizer

First off, thank you for considering contributing to AI Text Summarizer! It's people like you that make this tool a great resource for everyone. This document provides guidelines and steps for contributing.

## C

## Table of Contents
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)
- [Bug Reports](#bug-reports)
- [Feature Requests](#feature-requests)
- [Documentation](#documentation)
- [Community](#community)

## Getting Started

1. **Fork the Repository**
   - Click the 'Fork' button at the top right of this repository
   - Clone your fork locally: `git clone https://github.com/yourusername/ai-text-summarizer.git`

2. **Set Up Development Environment**
   ```bash
   cd ai-text-summarizer
   npm install
   cp .env.example .env
   # Configure your environment variables
   ```

3. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

## Development Process

1. **Keep Your Fork Updated**
   ```bash
   git remote add upstream https://github.com/original/ai-text-summarizer.git
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Run Tests**
   ```bash
   npm test
   npm run lint
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

## Pull Request Process

1. **Before Submitting**
   - Ensure all tests pass: `npm test`
   - Add tests for new features
   - Update documentation as needed
   - Verify code style compliance: `npm run lint`

2. **Submitting Changes**
   - Push to your fork
   - Submit a Pull Request (PR) to our `main` branch
   - Fill in the PR template completely
   - Link any relevant issues

3. **After Submitting**
   - Respond to code review feedback
   - Make requested changes if any
   - Keep your PR updated with the main branch

## Coding Standards

### JavaScript

- Use ES6+ features
- Follow the ESLint configuration
- Use async/await for asynchronous operations
- Add JSDoc comments for functions
- Maximum line length: 80 characters

```javascript
// Good
async function summarizeText(text) {
  try {
    const result = await api.summarize(text);
    return result;
  } catch (error) {
    logger.error('Summarization failed:', error);
    throw error;
  }
}

// Bad
function summarizeText(text) {
  return api.summarize(text).then(result => result).catch(error => { console.log(error); throw error; });
}
```

### CSS

- Use CSS modules or styled-components
- Follow BEM naming convention
- Keep selectors specific but not too nested

### Testing

- Write unit tests for new features
- Maintain test coverage above 80%
- Use meaningful test descriptions

## Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks

Example:
```
feat(api): add rate limiting to summarization endpoint

- Add rate limiting middleware
- Configure limits in environment variables
- Add tests for rate limiting logic

Closes #123
```

## Bug Reports

When filing an issue, please include:

1. **Description**: Clear explanation of the bug
2. **Steps to Reproduce**: Detailed steps to reproduce the issue
3. **Expected Behavior**: What you expected to happen
4. **Actual Behavior**: What actually happened
5. **Environment**:
   - Browser and version
   - Node.js version
   - npm version
   - Operating system
6. **Screenshots**: If applicable
7. **Additional Context**: Any other relevant information

## Feature Requests

When proposing new features:

1. **Use Case**: Explain the use case
2. **Current Solution**: Describe current alternatives if any
3. **Proposed Solution**: Your idea of how to implement it
4. **Additional Context**: Any other relevant information

## Documentation

- Keep README.md updated
- Document all new features
- Update API documentation
- Include JSDoc comments for functions
- Update changelog

## Community
- Follow Me [Twitter](https://x.com/karannchaudhari)

## Questions?

Feel free to reach out:
- Create an issue
- Email: karanchaudhari722@gmail.com

Thank you for contributing! 🎉

---
*This document was last updated: November 2024*
