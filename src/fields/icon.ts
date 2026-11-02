import type { SelectField } from 'payload'

/** Line icons available to editors; the SVGs live in components/ui/Icon.tsx. */
export const iconOptions = [
  'infrastructure',
  'cloud',
  'managed',
  'staffing',
  'maintenance',
  'data',
  'security',
  'workspace',
  'print',
  'erp',
  'classroom',
  'robotics',
  'excellence',
  'library',
  'school',
  'university',
  'digital',
  'csr',
  'search',
  'plan',
  'rocket',
  'star',
  'users',
  'check',
  // Industries
  'globe',
  'health',
  'bank',
  'factory',
  'car',
  'store',
  'media',
  'building',
] as const

export type IconName = (typeof iconOptions)[number]

export const iconField = (name = 'icon'): SelectField => ({
  name,
  type: 'select',
  options: iconOptions.map((value) => ({ label: value.charAt(0).toUpperCase() + value.slice(1), value })),
})
