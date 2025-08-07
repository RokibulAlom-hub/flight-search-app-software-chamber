import "./globals.css";



export const metadata = {
   title: 'Flight Search App',
  description: 'A flight search app using Amadeus API',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
