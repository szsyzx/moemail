export interface ExpiryOption {
  label: string
  value: number
}

export const EXPIRY_OPTIONS: ExpiryOption[] = [
   { label: '10分钟', value: 1000 * 60 * 10 },
  { label: '30分钟', value: 1000 * 60 * 30 },
  { label: '2小时', value: 2000 * 60 * 60 },
  { label: '永久', value: 0 }
]
