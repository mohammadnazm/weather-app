const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions"
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
}

try {
  const response = await fetch(url, options)
  const result = await response.text()
  console.log(result)
} catch (error) {
  console.error(error)
}
