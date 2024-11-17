# AI Text Summarizer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2014.0.0-brightgreen)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)


A powerful, production-ready text summarization application leveraging state-of-the-art AI models through the Hugging Face API. Transform lengthy documents into concise, meaningful summaries with just a few clicks.

## ✨ Features

- **Advanced AI Summarization**: Powered by Hugging Face's BART model for accurate and context-aware summaries
- **RESTful API**: Well-documented endpoints for seamless integration
- **Responsive Design**: Optimized user experience across all devices
- **Rate Limiting**: Built-in protection against API abuse
- **Error Handling**: Comprehensive error management and user feedback
- **Performance Optimized**: Efficient request handling and response caching


## 🏗 Architecture

### Technology Stack

- **Frontend**
  - HTML5/CSS3/JavaScript (ES6+)
  - Responsive design with CSS Grid and Flexbox
  - Client-side input validation
  - Loading states and error handling

- **Backend**
  - Node.js (v14+)
  - Express.js for REST API
  - Axios for HTTP requests
  - dotenv for environment management

- **AI Integration**
  - Hugging Face Inference API
  - BART model for summarization
  - Fallback error handling

## 🏁 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Hugging Face API account and token

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/ai-text-summarizer.git
cd ai-text-summarizer
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.example .env
```

### Environment Configuration

Create a `.env` file with the following variables:

```plaintext
PORT=3000
NODE_ENV=development
HUGGINGFACE_API_TOKEN=your_api_token_here
MAX_TEXT_LENGTH=10000
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## 💻 Usage

1. Start the development server:
```bash
node index.js
```

2. Access the application at `http://localhost:3000`

3. For production deployment:
```bash
npm run build
npm start
```


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and development process.

## 🔧 Troubleshooting

Common issues and their solutions:

- **API Rate Limiting**: Ensure you're within the free tier limits or upgrade your plan
- **Long Processing Times**: Consider reducing the input text length
- **CORS Issues**: Check the allowed origins in your environment configuration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- [Hugging Face](https://huggingface.co/) for their excellent API and models
- [Express.js](https://expressjs.com/) team for the robust web framework
- All our [contributors](CONTRIBUTORS.md) who help improve the project


---
Made with ❤️ by [Karan Chaudhari]
