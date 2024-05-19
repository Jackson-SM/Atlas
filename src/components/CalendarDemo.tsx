import React from 'react'
import { Calendar } from './ui/calendar'

export const CalendarDemo = () => {
  const [date, setDate] = React.useState<Date[] | undefined>([
    new Date(),
    new Date(new Date().setDate(new Date().getDate() + 2)),
    new Date(new Date().setDate(new Date().getDate() + 6)),
    new Date(new Date().setDate(new Date().getDate() + 10)),
  ])
  return (
    <Calendar
      mode="multiple"
      selected={date}
      onSelect={setDate}
      className="border w-min p-3 bg-background"
    />
  )
}
