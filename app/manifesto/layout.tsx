import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Manifesto",
  description: "What we're building at Forge Brotherhood: A living network of men forged together through prayer. Not a list manager. Not a content feed. A brotherhood engine.",
  openGraph: {
    title: "The Forge Brotherhood Manifesto",
    description: "Discover our vision for transforming male loneliness into brotherhood through the power of prayer and authentic connection.",
    url: "https://forge-app.io/manifesto",
  },
  twitter: {
    title: "The Forge Brotherhood Manifesto",
    description: "Discover our vision for transforming male loneliness into brotherhood through the power of prayer.",
  }
};

export default function ManifestoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
