import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

interface MyFormValues {
  sku: string;
  name: string;
  price: string;
  type: string;
  size?: string;
  weight?: string;
  height?: string;
  width?: string;
  length?: string;
}

function MainForm() {
  const [formData, setFormData] = useState<MyFormValues>({
    sku: "",
    name: "",
    price: "",
    type: "",
    size: "",
    weight: "",
    height: "",
    width: "",
    length: "",
  });

  const navigate = useNavigate();

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });

    if (formData.type === "dvd") {
      formData.weight = "";
      formData.height = "";
      formData.length = "";
      formData.width = "";
    } else if (formData.type === "book") {
      formData.size = "";
      formData.height = "";
      formData.length = "";
      formData.width = "";
    } else if (formData.type === "furniture") {
      formData.size = "";
      formData.weight = "";
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    //--------------------------------------------------------------------------------------
    //Notification for empty fields
    if (
      formData.sku === "" ||
      formData.name === "" ||
      formData.price === "" ||
      (formData.type === "dvd" && formData.size === "") ||
      (formData.type === "book" && formData.weight === "") ||
      (formData.type === "furniture" &&
        formData.height === "" &&
        formData.width === "" &&
        formData.length === "") ||
      formData.type === ""
    ) {
      toast.error("Please, submit required data", {
        position: "top-center",
        theme: "light",
      });
    }

    else if (
      !isNaN(Number(formData.sku)) ||
      !isNaN(Number(formData.name)) ||
      isNaN(Number(formData.price)) ||
      isNaN(Number(formData.size)) ||
      isNaN(Number(formData.weight)) ||
      isNaN(Number(formData.height)) ||
      isNaN(Number(formData.width)) ||
      isNaN(Number(formData.length))
    ) {
      toast.error("Please, provide the data of indicated type", {
        position: "top-center",
        theme: "light",
      });
    }

    const cleanedData = Object.fromEntries(
      Object.entries(formData).filter(([_, val]) => val != "")
    );

    try {
      axios
        .post("http://localhost/scandiweb_test/api/addproduct.php", cleanedData)
        .then((response) => {
          if (response.status === 200) {
            if (response.data.message === "Product added") {
              navigate("/");
            }
            if (response.data.message === "SKU already exists!") {
              toast.error("SKU already exists! It has to be unique", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          }
        });
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
            value={formData.sku}
            onChange={handleChange}
          />
        </div>
        <div className="input_label">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input_label">
          <label htmlFor="price">Price ($)</label>
          <input
            type="text"
            name="price"
            value={formData.price}
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
            <option value="dvd">DVD</option>
            <option value="book">Book</option>
            <option value="furniture">Furniture</option>
          </select>
        </div>
        {formData.type == "dvd" && (
          <div className="type_container">
            <div className="input_label">
              <label htmlFor="size">Size (MB)</label>
              <input
                type="text"
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
              />
            </div>
            <p className="type_description">Please, provide size</p>
          </div>
        )}
        {formData.type == "book" && (
          <div className="type_container">
            <div className="input_label">
              <label htmlFor="weight">Weight (KG)</label>
              <input
                type="text"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            <p className="type_description">Please, provide weight.</p>
          </div>
        )}
        {formData.type == "furniture" && (
          <div className="type_container">
            <div className="input_label">
              <label htmlFor="height">Height (CM)</label>
              <input
                type="text"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
              />
            </div>
            <div className="input_label">
              <label htmlFor="width">Width (CM)</label>
              <input
                type="text"
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
              />
            </div>
            <div className="input_label">
              <label htmlFor="length">Length (CM)</label>
              <input
                type="text"
                id="length"
                name="length"
                value={formData.length}
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
