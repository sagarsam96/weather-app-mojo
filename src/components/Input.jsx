import React from 'react'
import { QueryBox, InputBar, SearchButton} from './Styled'

function Input({query, setQuery, getStarted}) {
  return (
      <> 
      
    <QueryBox> 
      <label htmlFor='cityname' > City Name</label>
      <InputBar type="text" id='cityname' value={query} 
      onChange={(e)=>setQuery(e.target.value)}/>
      <SearchButton onClick={getStarted} >Search</SearchButton>
    </QueryBox>
      
      </>
  )
}

export default Input