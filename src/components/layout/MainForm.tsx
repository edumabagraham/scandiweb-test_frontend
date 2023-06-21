import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { IFormValues } from "../../interface";

function MainForm() {
  const [formData, setFormData] = useState<IFormValues>({
    sku: "",
    name: "",
    price: undefined,
    type: "",
    size: undefined,
    weight: undefined,
    height: undefined,
    width: undefined,
    length: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (event: { target: { name: string; value: string } }) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });

    if (formData.type === "Dvd") {
      formData.weight = undefined;
      formData.height = undefined;
      formData.length = undefined;
      formData.width = undefined;
    } else if (formData.type === "Book") {
      formData.size = undefined;
      formData.height = undefined;
      formData.length = undefined;
      formData.width = undefined;
    } else if (formData.type === "Furniture") {
      formData.size = undefined;
      formData.weight = undefined;
    }
  };

  const validateForm = () => {

    if (
      formData.sku === "" ||
      formData.name === "" ||
      formData.price === undefined ||
      (formData.type === "Dvd" && formData.size === undefined) ||
      (formData.type === "Book" && formData.weight === undefined) ||
      (formData.type === "Furniture" &&
        formData.height === undefined &&
        formData.width === undefined &&
        formData.length === undefined) ||
      formData.type === undefined
    ) {
      toast.error("Please, submit required data", {
        position: "top-center",
      });
    }
  }

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();

    validateForm();

    const cleanedData = Object.fromEntries(
      Object.entries(formData).filter(([_, val]) => val != "")
    );

    const postProduct = async () => {
      const response = await fetch("https://gloria-graham.000webhostapp.com/api/addproduct.php/", {
        method: 'POST',
        body: JSON.stringify(cleanedData),
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json',
          // mode: "cors",
          // credentials: "same-origin"
        }
      })
      const productData = await response.json()
      console.log(productData);
      
    }


    try {
      // axios
      //   .post("https://gloria-graham.000webhostapp.com/api/addproduct.php/", cleanedData)
      //   .then((response) => {
      //     if (response.status === 200) {
      //       console.log("request sent");

      //       if (response.data.message === "Product added") {
      //         navigate("/");
      //       }
      //       const msg = response.data.message;
      //       if (msg === "SKU already exists!") {
      //         toast.error("SKU already exists!", {
      //           position: "top-center",
      //         });
      //       }
      //     }
      //   });
      postProduct()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form id="product_form" onSubmit={handleSubmit}>
        <div className="input_label">
          <label htmlFor="sku">SKU</label>
          <input
            type="text"
            name="sku"
            id="sku"
            value={formData.sku}
            onChange={handleChange}
          />
        </div>
        <div className="input_label">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input_label">
          <label htmlFor="price">Price ($)</label>
          <input
            type="number"
            name="price"
            id="price"
            value={formData.price || ''}
            onChange={handleChange}
          />
        </div>
        <div className="input_label">
          <label htmlFor="type">Type Switcher</label>
          <select
            id="productType"
            value={formData.type}
            name="type"
            onChange={handleChange}
          >
            <option value="">Type Switcher</option>
            <option value="Dvd">DVD</option>
            <option value="Book">Book</option>
            <option value="Furniture">Furniture</option>
          </select>
        </div>
        {formData.type == "Dvd" && (
          <div className="type_container">
            <div className="input_label">
              <label htmlFor="size">Size (MB)</label>
              <input
                type="number"
                id="size"
                name="size"
                value={formData.size || ''}
                onChange={handleChange}
              />
            </div>
            <p className="type_description">Please, provide size</p>
          </div>
        )}
        {formData.type == "Book" && (
          <div className="type_container">
            <div className="input_label">
              <label htmlFor="weight">Weight (KG)</label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight || ''}
                onChange={handleChange}
              />
            </div>
            <p className="type_description">Please, provide weight.</p>
          </div>
        )}
        {formData.type == "Furniture" && (
          <div className="type_container">
            <div className="input_label">
              <label htmlFor="height">Height (CM)</label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height || ''}
                onChange={handleChange}
              />
            </div>
            <div className="input_label">
              <label htmlFor="width">Width (CM)</label>
              <input
                type="number"
                id="width"
                name="width"
                value={formData.width || ''}
                onChange={handleChange}
              />
            </div>
            <div className="input_label">
              <label htmlFor="length">Length (CM)</label>
              <input
                type="number"
                id="length"
                name="length"
                value={formData.length || ''}
                onChange={handleChange}
              />
            </div>
            <p className="type_description">Please, provide dimensions.</p>
          </div>
        )}
      </form>
      <ToastContainer />
    </>
  );
}

export default MainForm;
