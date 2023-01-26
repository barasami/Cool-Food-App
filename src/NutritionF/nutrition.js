import axios from "axios";

const Url='https://drinks-digital1.p.rapidapi.com/v1/cocktails/search'

const options = {
    params: {query: 'mojito', limit: '5'},
    headers: {
      'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
      'X-RapidAPI-Host': 'drinks-digital1.p.rapidapi.com'
    }
};
  


export const myCooktail=async()=>{
    try {
        const data=await axios.get(Url,options)
        return data
    } catch (error) {
        console.log(error);
    }
}