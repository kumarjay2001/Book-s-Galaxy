import react from "react";
import { useState } from "react";
import Modal from "./Modal";
import "./Main.css"
const Card = ({ book }) => {

    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    console.log(book)
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!= undefined && amount !=undefined)
                    {
                        return (
                            <div className="flex flex-row gap-4 ">
                            <div className="card  w-36 hover:scale-90 text-backcol rounded-lg p-2 mb-1 text-center relative" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumbnail} className=".rounded-lg	 w-full h-48" alt="" />
                                <div className="cardhui mb-1 flex flex-col  p-4 max-h-32 overflow-y-hidden  ">
                                    <h3 className=" text-sm mb-6">
                                    {item.volumeInfo.title.length>20?(item.volumeInfo.title.substr(0,20))+"...":
                                    (item.volumeInfo.title)
                                    }
                                    </h3>
                                    <p className="amount absolute bottom-10 left-10 right-10 text-xs font-bold p-1">&#8377;{amount}</p>
                                </div>
                            </div>
                              <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </div>
                        )
                    }
                    
                })
            }

        </>
    )
}
export default Card;