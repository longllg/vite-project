import { useEffect, useState } from 'react'
import { getData } from 'src/api'
function Home() {
    useEffect(() => {
        getData().then((res: any) => {
            console.log(res);
        }).catch(err => {
            console.log(err);

        })
    }, [])
    return (
        <div className="App">
            home
        </div>
    )
}

export default Home
