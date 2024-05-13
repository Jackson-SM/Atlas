import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

type Config = {
  theme: string
  radius: number
}

const configAtom = atomWithStorage<Config>('config', {
  theme: 'zinc',
  radius: 0.5,
})

export const useConfig = () => {
  return useAtom(configAtom)
}
