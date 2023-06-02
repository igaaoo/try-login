import './globals.css';

export const metadata = {
  title: 'Login if you can',
  description: 'Just a joke',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}

