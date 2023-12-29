export const isEmpty = (value) => {
  return value === undefined || value.trim().length === 0;
}

export const isNotEmpty = (value) => {
  return value !== undefined && value.trim().length > 0;
}
