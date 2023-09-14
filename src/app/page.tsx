import Typography from '@/components/ui/Typography'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type FC } from 'react'

const Home: FC = () => {
  return (
    <>
      <Typography variant="h1" align="center" >EntGamers Next Template</Typography>
      <Typography variant="body1">A template for EntGamers websites</Typography>
      <ul className="fa-ul">
        <li>
          <FontAwesomeIcon icon={faCheck} listItem /> Cosas
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} listItem /> Cosas
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} listItem /> Cosas
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} listItem /> Cosas
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} listItem /> Cosas
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} listItem /> Cosas
        </li>
      </ul>
    </>
  )
}

export default Home
