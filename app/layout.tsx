import '@/app/ui/global.css'
import { bitter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bitter.className} antialiased`}>{children}</body>
    </html>
  );
}
