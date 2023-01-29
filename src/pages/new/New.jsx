import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss";
import { DriveFolderUploadOutlined } from "@mui/icons-material";

function New ({inputs, title}) {

    //we use a use State hook for the image container
    const [fileImage, setFileImage] = useState("");
    //we add an unchange for the inputs
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={fileImage ? URL.createObjectURL(fileImage) : 
                            "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />

                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="files">Image: <DriveFolderUploadOutlined className="icon"  /></label>
                                <input type="file"  id="files" 
                                        style={{display: "none"}} onChange={(e) => setFileImage(e.target.files[0])} />
                            </div>
                            {inputs.map((input) => (

                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            
                            ))}
                            <button type="submit" onClick={(e) => e.preventDefault}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New