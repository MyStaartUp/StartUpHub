export const STARTUP_STATUSES = {
  NEW: 'Nouveau',
  GROWING: 'En croissance',
  SEEKING_FUNDS: 'En recherche de fonds'
} as const;

export const STARTUP_CATEGORIES = {
  TECH: 'Technologies',
  HEALTH: 'Santé',
  FINANCE: 'Finance',
  EDUCATION: 'Éducation',
  ENVIRONMENT: 'Environnement'
} as const;

export const STORAGE_BUCKETS = {
  AVATARS: 'avatars',
  STARTUP_IMAGES: 'startup-images',
  DOCUMENTS: 'documents'
} as const;