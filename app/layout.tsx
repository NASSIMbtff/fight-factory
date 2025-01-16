import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Fight Factory - Club de Boxe",
  description: "Rejoignez notre club de boxe pour atteindre vos objectifs !",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-800">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
