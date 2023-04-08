import "./globals.css";

export const metadata = {
  title: "Cinemoji 🎬😄",
  description: "you decipher emoji sequences to guess the hidden movie titles!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
