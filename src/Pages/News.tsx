import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NewsFeature from '../Store/Feature/NewsFeature'
import { RootState } from '../Store/store'
import { addNews } from '../Store/Feature/NewsFeature'
import { Line } from 'react-chartjs-2'

const News = () => {
    const data = {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
            {
                axis: 'y',
                label: "Currency",
                data: [12, 13, 45, 78, 69, 87],
                fill: false,
                tension: 0.1,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            }
        ]

    }


    const dispatch = useDispatch()
    const newsState = useSelector((state: RootState) => state.News.data)
    React.useEffect(() => {
        dispatch(addNews())
    }, [])

    return (
        <div>
            <Line data={data} />

        </div>
    )
}

export default News
