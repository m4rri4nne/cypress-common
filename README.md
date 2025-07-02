# 🚀 Cypress Common

Reusable TypeScript utilities & helpers to boost your Cypress tests with best practices and easy integrations.

# 📖 Overview

This package provides:

- 🔄 HTTP request wrappers with consistent handling
- 📜 Contract validation using JSON schemas
- 🌱 Environment variable support
- 🧩 OOP-based abstractions for flexibility & reuse 
- All written in TypeScript for type safety and scalability.

# ⚙️ Installation

## Install from npm:
```bash
npm install cypress-common
```
## For local development & linking:

```bash
cd /path/to/cypress-common
npm link
```

```bash
cd /path/to/your-cypress-project
npm link cypress-common
```

# 🚧 Usage Examples

### 🛠 Import utilities

```javascript
import { RequestService } from 'cypress-common/src/utils/requestService';
import { ContractValidator } from 'cypress-common/src/utils/contractValidator';
```

### 🌐 Make HTTP requests

```javascript
const requestService = new RequestService();

requestService.getRequest({
  method: 'GET',
  url: Cypress.env('API_URL') + '/books/1',
}).then(response => {
  // Validate or assert response here
  cy.log('Response:', response.body);
});
```

### ✅ Validate contracts

```javascript
import bookContract from 'cypress-common/contracts/bookContract.json';

const validator = new ContractValidator(bookContract);
validator.validate(response.body);
```

# ⚙️ Configuration

- 🔑 Use Cypress environment variables (cypress.env.json or CLI) for API URLs, tokens, etc.
- 🛠 Build before usage:
```
npm run build
```

# 🧑‍💻 Development

- Source code: src/
- Build project:
```
npm run build
```
