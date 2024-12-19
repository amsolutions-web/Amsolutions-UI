import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AMSolution",
  description: "AMSolution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/ico" sizes="16x16" href="favicon.ico" />
        <link rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
