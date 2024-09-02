import type { Metadata } from 'next';
import './globals.css';
import AuthOverlay from '@/app/components/AuthOverlay';

export const metadata: Metadata = {
    title: 'Toktok Clone',
    description: 'Tiktok Clone',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                {' '}
                <AuthOverlay />
                {children}
            </body>
        </html>
    );
}
