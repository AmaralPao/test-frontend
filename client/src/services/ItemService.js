export async function getItem(id){
    try{
        const url = `http://localhost:8080/api/items/${id}`
        const response = await fetch(url);
        return await response.json();
    }catch(error){
        return {}
    }

}

export async function searchItem(query){
    try{
        const url = `http://localhost:8080/api/items?q=${query}`
        const response = await fetch(url);
        return await response.json();
    }catch(error){
        return {}
    }

}