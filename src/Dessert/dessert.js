import axios from "axios";

const Url='https://beverages-and-desserts.p.rapidapi.com/desserts/1'

const options = {
    headers: {
      'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
      'X-RapidAPI-Host': 'beverages-and-desserts.p.rapidapi.com'
    }
};


export  const deSert=async()=>{
    try {
        const myDessert= await axios.get(Url,options)
        return myDessert
        
    } catch (error) {
        console.log(error);
        
    }
}