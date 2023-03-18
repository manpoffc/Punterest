
import './App.css';
import Header from './components/Header';
import MainBoard from './components/MainBoard';
import unsplash from './api/unsplash'
import { useEffect, useState } from 'react';
function App() {
  const [pins, setNewPins]= useState([])
  const getImages =(term)=>{
    return unsplash.get("https://api.unsplash.com/search/photos",{
      params:{query:term}
    });
  };
  const onSearchSubmit = (term)=>{
    getImages(term).then((res)=>{
      let result = res.data.results;

      let newPins = [
        ...result,
        ...pins,
      ]
      newPins.sort(function(a,b){
        return 0.5 - Math.random()
      })
      setNewPins(newPins)
    })
  }


  const getNewPins =() =>{
    let promise = []
    let pinData=[]
    let pins = ['rajasthan', 'Udaipur', 'delhi','mumbai','himachal','manali','goa','kerela']
  
    pins.forEach((pinTerm)=>{
      promise.push(
        getImages(pinTerm).then((res)=>{
          let results= res.data.results;
          pinData= pinData.concat(results);
          pinData.sort(function(a,b){
            return 0.5 - Math.random();
          });
        })
      )
    })

      Promise.all(promise).then(()=>{
        setNewPins(pinData);
      })
  
  }

  useEffect(()=>{
    getNewPins();
  },[]);

  
  return (
    <div className="app">
    <Header onSubmit={onSearchSubmit}/>
    <MainBoard pins={pins} />
    </div>
  );
}

export default App;
