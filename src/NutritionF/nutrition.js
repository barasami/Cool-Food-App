import axios from "axios";



const options = {
    headers: {
      'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
      'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com'
    }
};

export const myCooktail=async(foodid)=>{
    try {
        const data=await axios.get(`https://random-recipes.p.rapidapi.com/ai-quotes/${foodid}`,options)
        return data
    } catch (error) {
        console.log(error);
    }
}