import { Amount } from './styles'
const GenericIcon = ({ calculateTotal }) => (
  <Amount>
    <div className='amount'>{calculateTotal}</div>
  </Amount>
)

export default GenericIcon
