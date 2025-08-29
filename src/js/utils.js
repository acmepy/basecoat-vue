let counter = 0

export function useUniqueId(prefix='id'){
  return `${prefix}-${Date.now()}-${counter}-${Math.floor(Math.random() * 10000)}`
}