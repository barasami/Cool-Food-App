import axios from "axios";

const Url='https://burgers-hub.p.rapidapi.com/burgers'

const options = {
    headers: {
      'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
      'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
    }
};


export  const deSert=async()=>{
    try {
        const data= await axios.get(Url,options)
        return data

    } catch (error) {
        console.log(error);
        
    }
}