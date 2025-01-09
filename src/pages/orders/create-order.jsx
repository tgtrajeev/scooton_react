import React, { useState } from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Loading from "../../components/Loading";
import axiosInstance from "../../api";
import { toast } from "react-toastify"; // Ensure toast is imported
import { BASE_URL } from "../../api";

const CreateOrder = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    // Handle File Selection
    const handleFileChange = (e) => {
       console.log("E",e)
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
        console.log("e.target.files[0]",e.target.files[0].name)
        console.log("e.target.files",e.target.files)
        
    };

        const handleUpload = async () => {
            if (!file) {
                toast.error("Please select a file before uploading!");
                return;
            }
            try {
                console.log("file",file)
                console.log("name",file.name)
                const formData = new FormData();
                formData.append('file', file, file.name); 

               console.log('Uploading File:', file);
          
                
                await axiosInstance.post(
                    `${BASE_URL}/order/bulk-ordersBy-admin`, formData, {
                        headers: {
                          'Content-Type': 'multipart/form-data',
                         }
                        }).then((response) => {
                             toast.success("File uploaded Successfully");
                             console.log("done")
                        });
                  
                 
              } catch (error) {
                console.error('Error uploading file:', error);
                
              }
        };
    

    return (
        <Card>
            <h4 className="card-title">Create Order</h4>
            <div className="input-group mb-4">
                <input
                    id="file"
                    type="file"
                    onChange={handleFileChange}
                    className="file-input"
                />
            </div>
            <button
                className="btn btn-dark"
                type="button"
                onClick={() => handleUpload()}
            >Upload</button>
            {loading && <Loading />}
        </Card>
    );
};

export default CreateOrder;
