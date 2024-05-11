import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const configAtom = atomWithStorage<{ theme: string }>('config', {
  theme: 'violet',
})

export const useConfig = () => {
  return useAtom(configAtom)
}
