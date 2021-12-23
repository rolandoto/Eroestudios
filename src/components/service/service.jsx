
const ServiceMap =() =>{
   
    const url = 'http://localhost:3000/productos'
   return fetch(url)
    .then(resp => resp.json())
    .then(data =>{
        if(Array.isArray(data)){
                const results = data.map(index =>{
                const {id,img,name} = index
                return {id,img,name}
            })
            return results
        }
    })
}

export default ServiceMap