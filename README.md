# Flight Search App

A flight search web application built with Next.js, pure JavaScript, Tailwind CSS, and the Amadeus Flight Offers API. Inspired by Skyscanner's clean design, it allows users to search for flights by entering origin, destination, departure date, and number of passengers.

## Features
- Responsive form for flight search (origin, destination, date, passengers)
- Displays flight results with airline, stops, price, and timing details
- Mobile-friendly UI with Tailwind CSS
- Server-side API route for secure Amadeus API calls
- Error handling for invalid inputs or API failures

## Setup Instructions
1. **Amadeus API Key**:
   - Sign up for a free Amadeus Developer account at [https://developers.amadeus.com/](https://developers.amadeus.com/).
   - Obtain your sandbox API key and secret.
   - Create a `.env.local` file in the project root and add:
     ```env
     AMADEUS_API_KEY=your_api_key
     AMADEUS_API_SECRET=your_api_secret
     ```

2. **Install Dependencies**:
   ```bash
   npm install


Run the Development Server:
npm run dev

Open http://localhost:3000 to view the app.

Build for Production:
npm run build
npm run start



Screenshots
(Add screenshots here after running the app, e.g., form and results on desktop and mobile)
Deployment

Push to a GitHub repository:git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main


Optionally, deploy to Vercel for a live demo: Vercel Deployment Guide.

Notes

Use valid 3-letter IATA codes for origin and destination (e.g., NYC, LAX).
The departure date must be today or later.
The Amadeus sandbox API is used for testing; switch to the production API for live use.


