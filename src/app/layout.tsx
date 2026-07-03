import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: { default: '水回りリフォームナビ | 費用・業者比較', template: '%s | 水回りリフォームナビ' },
  description: 'キッチン・お風呂・トイレ・洗面台の水回りリフォーム費用相場と業者比較。失敗しない業者の選び方を解説。',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-50 text-gray-800">
        <header className="bg-cyan-600 text-white shadow">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-tight">🚿 水回りリフォームナビ</a>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <a href="/category/kitchen" className="hover:text-cyan-200">キッチン</a>
              <a href="/category/bathroom" className="hover:text-cyan-200">浴室・トイレ</a>
              <a href="/category/plumbing" className="hover:text-cyan-200">配管・水道</a>
              <a href="/category/beginner" className="hover:text-cyan-200">入門ガイド</a>
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-800 text-gray-400 text-sm mt-16">
          <div className="max-w-5xl mx-auto px-4 py-8 text-center">
            <p>© 2025 水回りリフォームナビ | 費用・業者比較</p>
            <p className="mt-1 text-xs">※本サイトにはアフィリエイト広告が含まれます</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
