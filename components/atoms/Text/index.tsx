import { cn } from '@/lib/utils'

type TextStyle =
  | 'title-bold'
  | 'title-semibold'
  | 'desc-regular'
  | 'desc-bold'
  | 'explan-regular'
  | 'explan-bold'
  | 'tag-regular'
  | 'writing-bold'
  | 'btn-bold'
  | 'badge-regular'

interface TextProps {
  children: React.ReactNode
  variant: TextStyle
  className?: string
}

const textStyles: Record<TextStyle, string> = {
  'title-bold': 'text-title-bold',
  'title-semibold': 'text-title-semibold',
  'desc-regular': 'text-desc-regular',
  'desc-bold': 'text-desc-bold',
  'explan-regular': 'text-explan-regular',
  'explan-bold': 'text-explan-bold',
  'tag-regular': 'text-tag-regular',
  'writing-bold': 'text-writing-bold',
  'btn-bold': 'text-btn-bold',
  'badge-regular': 'text-badge-regular',
}

export default function Text({
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <p className={cn(textStyles[variant], className)} {...props}>
      {children}
    </p>
  )
}
