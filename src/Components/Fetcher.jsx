
const baseURl = "http://localhost:3001";
const Fetcher = async (url)=> {
    let responseObj = {
        errorMessage : '',
        data : []
    };
    try{
        const response = await fetch(baseURl+url);
        if(!response.ok) throw new Error(`HTTP Error ${response.status}`)
        const responseData = await response.json();
        responseObj.data =  responseData;
        responseObj.errorMessage = '';
    }
    catch(e){
        responseObj.errorMessage = e.message;
    }
    return responseObj;
    
}

export const getCategories = ()=>{
    return Fetcher("/categories");
}

export const getProducts = id=>{
    return Fetcher("/products?catId="+id);
}

export const getProductById = id=>{
    return Fetcher('/products/'+id);
}