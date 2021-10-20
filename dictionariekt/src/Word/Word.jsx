import React from 'react'

function Word({word}) {
    useEffect(() => {
        const fetchData = async() =>{
            axios.get(`${process.env.REACT_APP_OWLBOT_BASE_URL}${word}`, { headers: { Authorization: `Token ${process.env.REACT_APP_OWLBOT_TOKEN}`  } })
            .then(response=>console.log(response.data))
          }
        fetchData()
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Word
