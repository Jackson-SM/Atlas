import React from 'react'
import SvgLogo from '@/components/svg-logo'

export const Logo = () => {
  return (
    <div className="flex flex-row gap-0.5 items-center">
      {' '}
      <SvgLogo height="50" width="50" />{' '}
      <h1 className="text-3xl animate-pulse">Atlas</h1>{' '}
    </div>
  )
}
