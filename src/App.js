// import logo from './logo.svg';
import './App.css';

function App() {
  const movies=[{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBglFRsPsmmIUQ_oQeNK_0w5oPcfz4H1D2w&usqp=CAU",
    name:"Valimai",
    rating:"9.6",
    des:"Arjun, an IPS officer sets out for a mission on hunting down illegal bikers involving in theft and murder. Arjun, an IPS officer sets out for a mission on hunting down illegal bikers involving in theft and murder."
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2J3ejzjas_rHsk5O6A7I5HWlMjBZk0H1Jg&usqp=CAU",
    name:"comali",
    rating:"9",
    des:"The film was released on 15 August 2019. Comali follows Ravi, a coma patient who has missed 16 years of his life and struggles to adapt to the new improved world."
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHgmh-zuuweSedeS0RV23zTgbTL_RaQdYJA&usqp=CAU",
    name:"Darbar",
    rating:"8",
    des:" It follows Aaditya Arunasalam (Rajinikanth), the commissioner of Mumbai Police, who sets out to curb rampant drug-trafficking and prostitution in the city."
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPlYdMcbt8m2L6duXJgyaOkpUAAm5ijwA1TQ&usqp=CAU",
    name:"Vikram",
    rating:"9.8",
    des:"A high-octane action film where a special investigator is assigned a case of serial Killings, he finds the case is not what it seems to be and leading down this path is only going to end in a war between everyone involved"
  }]
  return(
    <div>
      <div classNmae="App">
        {movies.map((nm)=>{
          return(
            <MoviePoster img={nm.img} name={nm.name} rating={nm.rating} des={nm.des}/>
          )
        })}
      </div>
    </div>
  )
}

function MoviePoster({img,name,rating,des}){
  return(
    <div className="col-4 main">
    <img src={img} alt='pic'></img>
    <h6>{name}<i class="fa-solid fa-star"><span>{rating}</span></i></h6>
    <p>{des}</p>
  </div>
  )
}


export default App;
