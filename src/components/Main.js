import react ,{useState}from "react";
// import Card from "./Card";
import Card  from "./Card";
import axios from "axios";
import "../components/Main.css"
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBj-pwARGn8zI1-tJx0KUkbzyzq0UNigj0'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
    }
    return(
        <div className="par  min-h-screen">
            <div className="header  relative text-blue-9000 w-full flex items-center ">
                <div className="row1 absolute">
                </div>
                <div className="   p-[40px] m-[25px] text-center ">
                    <h2 className=" mb-9 text-5xl  ">Find Your Book</h2>
                    <div className="search flex items-center justify-center">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} className="outline-none border-none p-6 h-10 rounded-lg  text-sm font-bold w-[350px] text-blue-900" onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                    </div>
                </div>
            </div>

            <div className='container  mx-auto mt-[25px] grid  '>
              {
                    <Card book={bookData}/>
              }  
            </div>
        </div>
    )
}
export default Main;