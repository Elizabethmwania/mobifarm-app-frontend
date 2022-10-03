import React from 'react';
import { Bar } from 'react-chartjs-2';


const BarLoans = () => {
    var data = {
        labels: ["Home", "Product", "Cart"],
        datasets: [
            {
                label: ' ',
                data: [38, 75, 25],
                borderColor: ['rgb(82,134,163)'],
                backgroundColor: ['rgb(82,134,163)'],
                pointBackgroundColor: 'rgb(82,134,163)',
                pointBorderColor: 'rgb(82,134,163)'
            }
        ]
    }
    return (
        <div>
            <Bar
                Data={data}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false
                }}
            />

        </div>
    );
};

export default BarLoans;