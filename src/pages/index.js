import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen p-24 ${inter.className}`}
    >
<Hero/>

    </main>
  )
}
