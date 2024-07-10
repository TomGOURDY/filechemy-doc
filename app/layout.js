import "./globals.css";

export const metadata = {
  title: "Filechemy",
  description: "The best file converter on the internet !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      {children}
    </html>
  );
}
