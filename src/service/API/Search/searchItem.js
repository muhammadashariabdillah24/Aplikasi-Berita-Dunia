// import React from 'react'

// export const searchItem = (searchItem) => {

//     // saveDataInState(prev => {

//     //     return {
//     //         ...prev,
//     //         loadingForData: true
//     //     }
//     // })

//     // const waitProcess = await searchItem


//     fetch(`https://newsapi.org/v2/top-headlines?q=${searchItem}&apiKey=66c3d5faed4848e18a906d02b1d97f0b`, {
//         method: 'GET',
//     })
//         .then(response => response.json())
//         .then(result => {


//             const { articles } = result

//             console.log(articles);

//             // saveDataInState(prev => {

//             //     return {
//             //         ...prev,

//             //         dataResultSearch: articles

//             //     }

//             // })

//         })
//         .catch(err => console.log(err))
//         .finally(() => {

//             // saveDataInState(prev => {

//             //     return {
//             //         ...prev,
//             //         loadingForData: false
//             //     }
//             // })

//             console.log('Api Berhenti');

//         })



// }