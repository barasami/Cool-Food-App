import axios from "axios";

const Url='https://dietagram.p.rapidapi.com/apiFood.php'

const options = {
    params: {name: 'Jabłko'},
    headers: {
      'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
      'X-RapidAPI-Host': 'dietagram.p.rapidapi.com'
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