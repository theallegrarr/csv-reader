import { useState } from "react"

function Base64Image(){
    const [base64, setBase64] = useState("")

    const onChange = (e) => {
        console.log("file to upload:", e.target.files[0])
        let file= e.target.files[0]

        if(file){
            const reader = new FileReader()
            reader.onload = function handleReaderLoaded(event){
                let binaryString = event.target.result
                setBase64(btoa(binaryString))
            }
            reader.readAsBinaryString(file)
        }
    }

    return(
        <>
            <h1>Base 64 Image</h1>
            <form onChange={(e) => onChange(e)}>
                <input 
                    type="file"
                    name="image"
                    id="file"
                    accept=".jpeg, .png, .jpg"
                />
            </form>
            {base64.length>1 && <img src={`data:image/png;base64,${base64}`} alt="a to b" />}
        </>
    )
}

export default Base64Image