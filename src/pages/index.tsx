import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
    className='flex w-full h-screen justify-center items-center flex-col gap-10'
    >
        <Link href={"/Personal"}>Personal</Link>
        <Link href={"/Welcome"}>Welcome Page</Link>
        <Link href={"/Signup"}>Signup Page</Link>
        <Link href={"/Login"}>Login Page</Link>

    </main>
  )
}
