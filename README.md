# AI Flashcards

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [License](#license)

## Description

AI Flashcards is a web application built with Next.js that allows users to create and study flashcards using AI-generated content. This project leverages OpenAI's language model to generate flashcards that help users study more effectively.

## Features

- **AI-Powered Flashcards**: Automatically generate flashcards based on user input or predefined topics using OpenAI's API.
- **User Authentication**: Sign up and log in securely using Clerk.
- **Payment Integration**: Stripe integration for handling payments and subscriptions.
- **Personalized Learning**: Save and categorize flashcards for a personalized learning experience.
- **Responsive Design**: Fully responsive UI built with Material-UI for consistent and modern design across devices.

## Technologies Used

- **Frontend**: Next.js, React, Material-UI
- **Backend**: Firebase (Firestore)
- **Authentication**: Clerk
- **Payment Processing**: Stripe
- **AI Integration**: OpenAI API
  
## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-flashcards.git
   cd ai-flashcards
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up OpenAI API:
   - Obtain your OpenAI API key from [OpenAI](https://platform.openai.com/).
   - Add your API key to your environment variables.

4. Set up Clerk and Stripe:
   - Create a Clerk project at [Clerk Dashboard](https://dashboard.clerk.dev/).
   - Create a Stripe account at [Stripe Dashboard](https://dashboard.stripe.com/).
   - Add your Clerk and Stripe configuration details in the appropriate files.

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
