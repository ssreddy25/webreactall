import React from "react";
import { useFormik } from "formik";

const FormikDemoCompnents = () => {
    const formik = useFormik({
        initialValues: {
            ProductId: "",
            Name: "",
            Price: ""
        },
        onSubmit:values => {
           document.write(JSON.stringify(values));
        }

    })
    return (
        <>
            <div className="container">
                <h1>product details</h1>
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>product id</dt>
                        <dd><input type="text" onChange={formik.handleChange} name="ProductId" value={formik.values.ProductId} /></dd>
                        <dt>product name</dt>
                        <dd><input type="text" onChange={formik.handleChange} name="Name" value={formik.values.Name} /></dd>
                        <dt>product price</dt>
                        <dd><input type="text" onChange={formik.handleChange} name="Price" value={formik.values.Price} /></dd>
                        <button>submit</button>
                    </dl>
                </form>
            </div>
        </>
    )


}
export default FormikDemoCompnents