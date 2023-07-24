import React, { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL, geoApiOptions } from "../../api"

function search({ onSearchChange }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [search, setSearch] = useState(null)

  const loadOptions = inputValue => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then(response => response.json())
      .then(response => {
        response.data.map(city => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          }
        })
      })
      .catch(err => console.error(err))
  }

  const handleOnChange = searchData => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default search
