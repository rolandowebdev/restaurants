import { cn } from '@/lib'
import { ReactNode } from 'react'

type PageContainerProps = {
  className?: string
  children: ReactNode
}

export const PageContainer = ({ className, children }: PageContainerProps) => {
  return (
    <main className={cn('mx-auto my-8 max-w-6xl px-4 pt-4 lg:px-0', className)}>
      {children}
    </main>
  )
}
