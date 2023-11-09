import { useState } from 'react'
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components'
import { cn } from '@/lib'
import { Check, ChevronsUpDown } from 'lucide-react'

export type Option = {
  value: string
  label: string
}

type ComboboxProps = {
  options: Option[]
  placeholderText: string
  className?: string
  onSelect: (value: string) => void
}

export const Combobox = ({
  options,
  placeholderText,
  className = 'w-[200px] justify-between',
  onSelect
}: ComboboxProps) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const handleSelect = (selectedValue: string) => {
    setValue(selectedValue)
    setOpen(false)
    onSelect(selectedValue)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className={className}>
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholderText}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput
            placeholder={`Search ${placeholderText.toLowerCase()}...`}
          />
          <CommandEmpty>{`No ${placeholderText.toLowerCase()} found.`}</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={() => handleSelect(option.value)}>
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === option.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
