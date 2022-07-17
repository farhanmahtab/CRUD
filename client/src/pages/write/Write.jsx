import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImage"
        src="https://images.pexels.com/photos/3695238/pexels-photo-3695238.jpeg?cs=srgb&dl=pexels-damir-mijailovic-3695238.jpg&fm=jpg" alt="" />
     <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-camera"></i>
            </label>
            <input type="file" id="fileInput" style={{display : "none"}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus = {true}/>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Write your Blog..." className="writeInput writeText"
            type="text"></textarea>
        </div>
        <button className="writeSubmit">Post</button>
     </form>
    </div>
  )
}
