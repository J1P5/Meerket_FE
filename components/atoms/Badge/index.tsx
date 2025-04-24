import { Badge } from '@/components/ui/badge'

import Text from '../Text'

type BadgeType = 'default' | 'chat'

const badgeStyles: Record<BadgeType, string> = {
  default: 'w-fit p-2 flex justify-center items-center bg-grey-200 rounded-2xl',
  chat: 'w-[1.4375rem] h-[1.4375rem] flex justify-center items-center bg-primary-dark text-white rounded-full',
}

export interface IBadgeProps {
  /** Badge 의 내용으로 들어가는 Text */
  text: string
  type?: BadgeType
}
export const CustomBadge = ({ text, type = 'default' }: IBadgeProps) => {
  return (
    <Badge className={badgeStyles[type]}>
      <Text variant="badge-regular">{text}</Text>
    </Badge>
  )
}
