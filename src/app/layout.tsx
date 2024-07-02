import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/style/globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
	title: "Kelana dalam",
	description:
		"Discover the enchanting jungle interior of Kalimantan with Kelana. Immerse yourself in the breathtaking flora and fauna, and uncover the hidden gems of this tropical paradise. Explore now to learn more about the natural wonders that await.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
