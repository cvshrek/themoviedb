export const displayText = (text?: string | number): string | number => {
  return text ?? '...'
}

export const displayDurationFromMinute = (minute?: number): string => {
  if (!minute) return '...';
  const totalHours = Math.floor(minute/60);
  const remainMinute = minute - (totalHours * 60);
  return `${totalHours}h ${remainMinute}m`
}