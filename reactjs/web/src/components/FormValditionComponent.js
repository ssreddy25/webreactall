import React from "react";
import { useFormik } from "formik";
const Validation=props =>{
    var errors={
        Name: '',
        Price: '',
        Color: ''
    }
    if(!props.Name){
        errors.Name="Product name requried"
    }
    else if(props.Name.lenght<5){
        errors.Color="Product name to short"
    }
    if(!props.Price){
        errors.Price="Product price requried"
    }
    if(!props.Color){
        errors.Color="Product color requried"
    }
    return errors
}
const FormValdatitionComponent = () => {

    const formik = useFormik({
        initialValues: {

            Name: '',
            Price: '',
            Color: ''
        },
        validate:Validation,
        onSubmit: values => {
            alert(JSON.stringify(values))
        }
    })
    return (
        <>
            <div className="container">
                <h1>product details</h1>
                <form onSubmit={formik.handleSubmit}>
                    <dl>

                        <dt>Product Name</dt>
                        <dd><input className="Form-Control" onBlur={formik.handleBlur} type="text" onChange={formik.handleChange} name="Name" value={formik.values.Name} /></dd>
                        <dd>{(formik.touched.Name && formik.errors.Name)?formik.errors.Name:null}</dd>
                        <dt>Product Price</dt>
                        <dd><input className="Form-Control"  onBlur={formik.handleBlur} type="text" onChange={formik.handleChange} name="Price" value={formik.values.Price} /></dd>
                        <dd>{(formik.touched.Price && formik.errors.Price)?formik.errors.Price:null}</dd>
                        <dt>Product colour</dt>
                        <dd>
                        <select className="Form-Select" name="Color" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Color}>
                            <option>red</option>
                            <option>yellow</option>
                            <option>blue</option>
                            <option>green</option>
                            <option>pink</option>
                            <option>white</option>
                            <option>ornage</option>

                        </select></dd><br></br><br></br>
                        <dd>{(formik.touched.Color && formik.errors.Color)?formik.errors.Color:null}</dd>
                        <button className="btn btn-primary">register</button>

                    </dl>
                </form>
            </div>
        </>
    )
}
export default FormValdatitionComponent
