export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="src/app/assets/favico.png"
        />
        <title>Legalis</title>
        <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
