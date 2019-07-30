export const generateErrorText = (err) => {
  if (!err.response) return err.message
  const { data } = err.response
  let msg = ''
  for (const key in data) {
    msg += `${key}: ${data[key]} |`
  }
  return msg.slice(0, -2)
}
