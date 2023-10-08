import { Head, Main, NextScript } from 'next/document'
import Header from '@/components/Header'

interface IPageLayout {
  children: any;
  className?: string;
}

export default function PageLayout( { children, className = '' }: IPageLayout) {
  return (
    <main className={`${className}`}>
        {children}
    </main>
  )
}
