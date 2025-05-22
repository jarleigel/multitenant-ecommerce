import { useEffect, useState } from 'react'
import { BookmarkCheckIcon, ListFilterIcon, SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CategoriesSidebar } from './categories-sidebar'
import { useTRPC } from '@/trpc/client'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

interface Props {
  disabled?: boolean
  defaultValue?: string | undefined
  onChange?: (value: string) => void
}

export const SearchInput = ({ disabled, defaultValue, onChange }: Props) => {
  const [searchValue, setSearchValue] = useState(defaultValue || '')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const trpc = useTRPC()
  const session = useQuery(trpc.auth.session.queryOptions())

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onChange?.(searchValue)
    }, 400)

    return () => clearTimeout(timeoutId)
  }, [searchValue, onChange])

  return (
    <div className="flex items-center gap-2 w-full">
      <CategoriesSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
        <Input
          value={searchValue}
          className="pl-8"
          placeholder="Search product"
          disabled={disabled}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <Button
        variant="elevated"
        className="size-12 shrink-0 flex lg:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <ListFilterIcon />
      </Button>

      {session.data?.user && (
        <Button asChild variant="elevated">
          <Link href="/library">
            <BookmarkCheckIcon />
            Library
          </Link>
        </Button>
      )}
    </div>
  )
}
