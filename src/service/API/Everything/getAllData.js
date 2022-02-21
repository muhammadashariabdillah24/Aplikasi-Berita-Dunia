import React from 'react'

export const getAllData = (saveDataInState,setCountry,setCategory,setSearchKey) => {

    const actionSetCountry = setCountry == '' ? 'id' : setCountry

    const actionSetCategory = setCategory == '' ? '' : setCategory

    const actionSetSearchKey = setSearchKey == '' ? '' : setSearchKey


    saveDataInState(prev => {

        return {
            ...prev,
            loadingForData : true
        }
    })


    fetch(`https://newsapi.org/v2/top-headlines?country=${actionSetCountry}&category=${actionSetCategory}&q=${actionSetSearchKey}&apiKey=66c3d5faed4848e18a906d02b1d97f0b`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(result => {
            

            const { articles } = result

            console.log(result);

            saveDataInState(prev => {

                return {
                    ...prev,
                    
                    dataNewsEverything : articles

                }

            })

        })
        .catch(err => console.log(err))
        .finally(() => {

            saveDataInState(prev => {

                return {
                    ...prev,
                    loadingForData : false
                }
            })

            console.log('Api Berhenti');

        })
}
