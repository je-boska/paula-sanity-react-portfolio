import { getFilms } from './filmsQuery'
import { getWritings } from './writingsQuery'

export const getAndSortProjects = async () => {
  const films = await getFilms()
  const writings = await getWritings()
  const sortedProjects = films
    .concat(writings)
    .sort((a, b) => b.order - a.order)
  return sortedProjects
}
