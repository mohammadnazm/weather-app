import React, { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"

function search({ onSearchChange }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [search, setSearch] = useState(null)

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
