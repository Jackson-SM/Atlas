import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const AvatarDemo = ({ src }: { src?: string }) => {
  return (
    <Avatar>
      <AvatarImage src={src} alt="Jackson-SM" />
      <AvatarFallback>JS</AvatarFallback>
    </Avatar>
  )
}
