import React from 'react'
import { HeroList } from '../index';

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />

      <HeroList publisher={'Marvel Comics'}/>
    </>
  )
}
