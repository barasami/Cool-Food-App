import axios from "axios";

const Url='https://random-recipes.p.rapidapi.com/ai-quotes/3'

const options = {
    headers: {
      'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
      'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com'
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