'use client'
import { useState } from 'react'
import { ListFilterIcon, SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CategoriesSidebar } from './categories-sidebar'

interface Props {
    disabled?: boolean
}

export const SearchInput = ({
    disabled,
}: Props) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    // console.log(data);
    
    return (
        <div className='flex items-center gap-2 w-full'>
            <CategoriesSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
            <div className='relative w-full'>
                <SearchIcon className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500'/>
                <Input className='pl-8' placeholder="Search product" disabled={disabled} />
            </div>
            {/* TODO: Categories vie all button */}
            <Button
                variant="elevated"
                className='size-12 shrink-0 flex lg:hidden'
                onClick={() => setIsSidebarOpen(true)}
            >
                <ListFilterIcon />
            </Button>
            {/* TODO: Library button */}
        </div>
    )
}