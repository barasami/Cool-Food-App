import axios from "axios";

const Url='https://cocktails3.p.rapidapi.com/random'

const options = {
    headers: {
      'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
      'X-RapidAPI-Host': 'cocktails3.p.rapidapi.com'
    }
};


export const myCooktail=async()=>{
    try {
        const cooktails=await axios.get(Url,options)
        return cooktails
    } catch (error) {
        console.log(error);
    }
}