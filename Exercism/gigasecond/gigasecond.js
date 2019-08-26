export const gigasecond = (startDate) =>  {
  const gigasecondInMs = 1000000000000
  return new Date(startDate.getTime() + gigasecondInMs)
}


