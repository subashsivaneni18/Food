import fetcher from '@/libs/fetcher'
import useSwr  from 'swr'

const getItems = () =>{
    const  {data} = useSwr("/api/item",fetcher)

    return {
        data
    }
}

export default getItems