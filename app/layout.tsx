export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        {children}
        <style>{`
        div {
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
        }
        `}</style>
      </body>
    </html>
  );
}
