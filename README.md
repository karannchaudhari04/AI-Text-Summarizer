# AI Text Summarizer App

The **AI Text Summarizer App** is a web-based tool that uses AI to summarize long texts. This application uses the Hugging Face API for text summarization and is built with Node.js, Express, and a simple frontend.

## Features

- **AI-powered Summarization**: Uses Hugging Face's powerful models to summarize lengthy texts into concise summaries.
- **User-Friendly Interface**: Simple and intuitive UI to input text and display the summarized content.
- **Real-Time Summarization**: Get a summary instantly after submitting the text.
- **Responsive**: Works on both desktop and mobile browsers.

## Demo

Check out the live demo at [Your Demo Link] (e.g., Vercel, Netlify, etc.).

## Tech Stack

- **Frontend**:
  - HTML, CSS, JavaScript
  - Fetch API for asynchronous requests
- **Backend**:
  - Node.js with Express
  - Axios for making requests to the Hugging Face API
- **AI**:
  - Hugging Face API (BART model for text summarization)

## Installation

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js and npm (Node Package Manager) must be installed. [Download Node.js](https://nodejs.org/).
- You need a Hugging Face API token. [Get the API key here](https://huggingface.co/).

### Setup Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/karannchaudhari04/AI-Text-Summerizer.git

Navigate to the project directory:

bash
Copy code
cd AI-Text-Summarizer
Install the necessary dependencies:

bash
Copy code
npm install
Set up the Hugging Face API Token:

Create a .env file in the root directory of the project.

Add your Hugging Face API token to the .env file:

makefile
Copy code
ACCESS_TOKEN=your_huggingface_api_token
Start the server:

bash
Copy code
npm start
Access the app in your browser:

Open your browser and go to http://localhost:3000 to start using the app.

Usage
Paste the text you want to summarize into the Text Area.
Click the Summarize button to generate the summary.
The summarized text will appear in the output area below.
API
The app uses a POST request to the Hugging Face API to get the summary.

POST /summarize
Request:

text_to_summarize (string): The text that needs to be summarized.
Response:

summary_text (string): The AI-generated summary.