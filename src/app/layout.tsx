import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "sonner";

import { cn } from "@/lib/utils";

const fontSans = FontSans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Kelana",
	description:
		"Discover the enchanting jungle interior of Kalimantan with Kelana. Immerse yourself in the breathtaking flora and fauna, and uncover the hidden gems of this tropical paradise. Explore now to learn more about the natural wonders that await.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("font-sans antialiased", fontSans.variable)}>{children}</body>
			<Toaster
				toastOptions={{
					classNames: {
						toast: "bg-[#333] bg-opacity-90 backdrop-blur border border-[#363636]",
						title: "font-poppins text-white mb-1 text-lg",
						description: "font-poppins text-white",
					},
				}}
			/>
		</html>
	);
}
