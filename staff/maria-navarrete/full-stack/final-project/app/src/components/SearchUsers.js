import './SearchUsers.sass'
import { Input, Button, XMarkIcon, SearchIcon } from '.'


export const SearchUsers = ({ onSearchUsers, onReset }) => {

    const search = event => {
        const { target: { query: { value: query } } } = event
        onSearchUsers && onSearchUsers(query)
    }

    const onSubmit = event => {
        event.preventDefault()
        search(event)
    }

    return <>
        <div>
            <form className='searchUsers__form' onSubmit={onSubmit} >
                <Input className='input-underlined searchUsers__input' type='text' name='query' placeholder='Busca Hoomans' />
                <Button className='searchUsers__button' type='submit'><SearchIcon className='searchUsers__icon' /></Button>
                <Button className='searchUsers__button' type='reset' onClick={onReset}> <XMarkIcon className='searchUsers__icon' /></Button>
            </form>
        </div>
    </>


}