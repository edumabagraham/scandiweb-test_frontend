import { useFormik } from "formik"
import { IFormValues } from "../../types"
import * as Yup from 'yup'
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialValues = {
    sku: "",
    name: "",
    price: undefined,
    type: "",
    size: undefined,
    weight: undefined,
    height: undefined,
    width: undefined,
    length: undefined,
}

function Form_Formik() {

    const navigate = useNavigate();

    const postProduct = async (data: any) => {
        const response = await fetch("https://gloria-graham.000webhostapp.com/api/addproduct.php", {
            method: 'POST',
            body: JSON.stringify(data),
        })
        const productData = await response.json()
        if (response.status === 200) {
            if (productData.message === "Product added") {
                navigate("/");
            }
            const msg = productData.message;
            if (msg === "SKU already exists!") {
                toast.error("SKU already exists!", {
                    position: "top-center",
                });
            }
        }
    }

    const onSubmit = (values: IFormValues) => {
        const cleanedData = Object.fromEntries(
            Object.entries(values).filter(([_, val]) => val != "")
        );

        postProduct(cleanedData)
        console.log('Form data', cleanedData);
        console.log('Hi');

    }



    const validationSchema = Yup.object({
        sku: Yup.string().required("Please, submit required data"),
        name: Yup.string().required("Please, submit required data"),
        price: Yup.number().required("Please, submit required data"),
        type: Yup.string().required("Please, submit required data"),
        size: Yup.number().required("Please, submit required data"),
        weight: Yup.number().required("Please, submit required data"),
        height: Yup.number().required("Please, submit required data"),
        width: Yup.number().required("Please, submit required data"),
        length: Yup.number().required("Please, submit required data")
    })


    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    // console.log(formik.values);

    if (formik.values.type === "Dvd") {
        formik.values.weight = undefined;
        formik.values.height = undefined;
        formik.values.length = undefined;
        formik.values.width = undefined;
    } else if (formik.values.type === "Book") {
        formik.values.size = undefined;
        formik.values.height = undefined;
        formik.values.length = undefined;
        formik.values.width = undefined;
    } else if (formik.values.type === "Furniture") {
        formik.values.size = undefined;
        formik.values.weight = undefined;
    }

    return (
            <form id="product_form" onSubmit={formik.handleSubmit}>
                <div className="input_label">
                    <label htmlFor="sku">SKU</label>
                    <input
                        type="text"
                        id="sku"
                        name="sku"
                        // {...formik.getFieldProps("sku")}
                        value={formik.values.sku}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.sku && formik.errors.sku ? <div className="error">{formik.errors.sku}</div> : null}
                </div>

                <div className="input_label">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        // {...formik.getFieldProps("name")}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
                </div>
                <div className="input_label">
                    <label htmlFor="price">Price ($)</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formik.values.price || ''}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.price && formik.errors.price ? <div className="error">{formik.errors.price}</div> : null}
                </div>

                <div className="input_label">
                    <label htmlFor="type">Type Switcher</label>
                    <select
                        id="productType"
                        name="type"
                        value={formik.values.type}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        // {...formik.getFieldProps("type")}
                    >
                        <option value="">Type Switcher</option>
                        <option value="Dvd">DVD</option>
                        <option value="Book">Book</option>
                        <option value="Furniture">Furniture</option>
                    </select>
                </div>
                {formik.values.type == "Dvd" && (
                    <div className="type_container">
                        <div className="input_label">
                            <label htmlFor="size">Size (MB)</label>
                            <input
                                type="number"
                                id="size"
                                name="size"
                                value={formik.values.size || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <p className="type_description">Please, provide size</p>
                        {formik.touched.size && formik.errors.size ? <div className="error">{formik.errors.size}</div> : null}
                    </div>
                )}
                {formik.values.type == "Book" && (
                    <div className="type_container">
                        <div className="input_label">
                            <label htmlFor="weight">Weight (KG)</label>
                            <input
                                type="number"
                                id="weight"
                                name="weight"
                                value={formik.values.weight || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <p className="type_description">Please, provide weight.</p>
                        {formik.touched.weight && formik.errors.weight ? <div className="error">{formik.errors.weight}</div> : null}
                    </div>
                )}
                {formik.values.type == "Furniture" && (
                    <div className="type_container">
                        <div className="input_label">
                            <label htmlFor="height">Height (CM)</label>
                            <input
                                type="number"
                                id="height"
                                name="height"
                                value={formik.values.height || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div className="input_label">
                            <label htmlFor="width">Width (CM)</label>
                            <input
                                type="number"
                                id="width"
                                name="width"
                                value={formik.values.width || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div className="input_label">
                            <label htmlFor="length">Length (CM)</label>
                            <input
                                type="number"
                                id="length"
                                name="length"
                                value={formik.values.length || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <p className="type_description">Please, provide dimensions.</p>
                        {(formik.touched.height && formik.errors.height) || (formik.touched.width && formik.errors.width) || (formik.touched.length && formik.errors.length) ? <div className="error">{formik.errors.size}</div> : null}
                    </div>
                )}
            </form>
    )
}

export default Form_Formik
