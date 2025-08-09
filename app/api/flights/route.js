
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { origin, destination, departureDate, passengers } = await request.json();

  // Validate inputs
  if (!origin || !destination || !departureDate || !passengers) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (!/^[A-Z]{3}$/.test(origin) || !/^[A-Z]{3}$/.test(destination)) {
    return NextResponse.json({ error: 'Invalid IATA code' }, { status: 400 });
  }

  if (new Date(departureDate) < new Date()) {
    return NextResponse.json({ error: 'Departure date must be today or later' }, { status: 400 });
  }

 

  try {
    // Get access token
    const tokenResponse = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=client_credentials&client_id=${process.env.AMADEUS_API_KEY}&client_secret=${process.env.AMADEUS_API_SECRET}`,
    });
    console.log("this is token response",tokenResponse);
   
   
    const { access_token } = await tokenResponse.json();
    console.log("this is access_token",access_token);
    
    
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch flights' }, { status: 500 });
  }
}
