export function log_description(description: string, value?: any) {
  let dashes = ' ---------- '
  console.log('')
  console.log(dashes + description + dashes)
  if (value) return console.log(value)
}