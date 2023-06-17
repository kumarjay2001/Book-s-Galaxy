import react from 'react';
import "./Main.css";
const Modal=({show,item,onClose})=>{
    if(!show)
    {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return(
        <div className='bg-[#000814]'>
            <div className="overlay  min-h-screen w-full fixed left-0 top-0 bottom-0 right-0 flex items-center justify-center">
                <div className="w-[400px] p-2 bookdiv    relative box-border overflow-hidden text-xl">
                    <button className="close absolute text-base bg-transparent" onClick={onClose}><i class="fas fa-times"></i></button>
                    <div className="mt-8 flex justify-center ">
                        <img src={thumbnail} alt="" className='mr-5 w-40 h-48' />
                        <div className="info">
                            <h1>{item.volumeInfo.title}</h1>
                            <h3 className='mt-2 text-green-900'>{item.volumeInfo.authors}</h3>
                            <h4 className='text-blue-900'>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br/>
                            <a href={item.volumeInfo.previewLink}><button className='w-24 rounded bg-blue-500 text-white font-bold'>More</button></a>
                        </div>
                    </div>
                    <h4 className="mt-8 desc text-justify p-2 text-xs  text-blue-900">{
                        item.volumeInfo.description.length>900?(item.volumeInfo.description.substr(0,900))+"...":
                        (item.volumeInfo.description)
                        }</h4>
                </div>
            </div>
        </div>
    )
}
export default Modal;