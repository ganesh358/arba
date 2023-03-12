
const handleLoading = () => ({
    type : "IS_Loading"
})

const handleError = () => ({
    type: "IS_ERROR"
}
)
const storeData = (payload) => ({
    type : "STORE_DATA",
    payload
})

const getData = () => (dispatch) => {
    dispatch(handleLoading())
     fetch("https://fakestoreapi.com/products")
     .then((res) => res.json())
     .then((res) => dispatch(storeData(res)))
     .catch(()=> dispatch(handleError()))
}

export {storeData,handleError,handleLoading,getData}