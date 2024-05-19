import { Layout } from '@/components/layout'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <Layout>
      <h1>Total Money</h1>
      <h1>Money Spent</h1>
      <h1>Transfers</h1>
      <h1>Profit Percentage</h1>
      <Separator orientation="horizontal" />
      <h1>Recent Transactions</h1>
      <Separator orientation="horizontal" />
      <h1>Recent Transfers</h1>
      <Separator orientation="horizontal" />
      <h1>Recent Expenses</h1>
      <Separator orientation="horizontal" />
      <h1>Recent Income</h1>
    </Layout>
  )
}
