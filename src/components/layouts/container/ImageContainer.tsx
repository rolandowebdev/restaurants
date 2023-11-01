import { cn } from '@/lib'

type ImageContainerProps = {
  className?: string
  children: React.ReactNode
}

export const ImageContainer = ({
  className,
  children
}: ImageContainerProps) => {
  return (
    <div
      className={cn(
        '-m-2 h-[430px] rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4',
        className
      )}>
      {children}
    </div>
  )
}
