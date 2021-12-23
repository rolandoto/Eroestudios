const ENDPOINT ='https://deno-api-users-login.herokuapp.com'

const loginService =({username,password})=>{
    return fetch(`${ENDPOINT}/login`,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify({username,password})
    }).then(resp =>{
        if(!resp.ok) throw new Error('Response is not ok')
        return resp.json()
    }).then(resp=>{
         const {jwt} =resp
         return jwt
    })
}

export default loginService