import { loadProductFilters } from '@/modules/products/search-params'
import { ProductListView } from '@/modules/products/ui/views/product-list'
import { getQueryClient, trpc } from '@/trpc/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { SearchParams } from 'nuqs/server'

interface Props {
  params: Promise<{
    subcategory: string
  }>
  searchParams: Promise<SearchParams>
}

const Page = async ({ params, searchParams }: Props) => {
  const { subcategory } = await params
  const filters = await loadProductFilters(searchParams)

  console.log(JSON.stringify(filters), 'DETTE er FRA RSC')

  const queryClient = getQueryClient()

  void queryClient.prefetchQuery(
    trpc.products.getMany.queryOptions({
      category: subcategory,
      ...filters,
    }),
  )

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductListView category={subcategory} />
    </HydrationBoundary>
  )
}

export default Page
