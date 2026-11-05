import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'parlons. — French, a little every day', description: 'Short, thoughtful French audio immersions for curious professionals.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
