const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export const monthName = (monthsNum) => {
  if (monthsNum >= 1 && monthsNum <= 12) {
    return months[monthsNum -1]
  } else{
    return null
  }
}
