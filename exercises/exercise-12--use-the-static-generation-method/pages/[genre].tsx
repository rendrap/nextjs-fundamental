const getWeather = async (genre: string) => {
  const response = await fetch(`/api/weather/${genre}`)
  const data = await response.json()
  return data
}

export default getWeather
