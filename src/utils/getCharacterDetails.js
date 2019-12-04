import {
    marvelapikey,
    marvelapihash
  } from '../config';

const getDetails=async (id)=>{
    // console.log(id);
    // return fetch(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${marvelapikey}&hash=${marvelapihash}`)
    // .then((res)=>
    // {
    //     return res.json();
    // })
    // .then((res)=>
    // {
    //     return res.data.results[0];
    // })
    // .catch((err)=>
    // {
    //     console.log(err);
    // })
    const response=await fetch(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${marvelapikey}&hash=${marvelapihash}`);
    const data=await response.json();
    return data.data.results[0];
}

export{
    getDetails
}