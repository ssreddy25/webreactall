import React from "react"
import { useFormik } from "formik"
import * as yup from 'yup'

const YupValdiationComponents=()=>{

    const formik=useFormik({
        initialValues:{
            Name:'',
            Salary:'',
            Email:'',
            Address:''
        },
        validationSchema:yup.object({
            Name:yup.string().required().min(5 ,"name is altest five characters").max(15,"name should be a minimume 15 charts only"),
            Salary:yup.string().required("requried salary"),
            Email:yup.string().email("invalid email"),
            Address:yup.string().required("requried address")
        }),
        onSubmit: values=>{
            alert(JSON.stringify(values))
        }
    })

    return(
        <>
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <h1>Employee Details</h1>

                <dl>
                    <dt>Employee Name</dt>
                    <dd><input type="text" name="Name" {...formik.getFieldProps("Name")}/></dd>
                    <dd>{(formik.touched.Name && formik.errors.Name)? formik.errors.Name:null}</dd>
                    <dt>Employee Salary</dt>
                    <dd><input type="text" name="Salary" {...formik.getFieldProps("Salary")}/></dd>
                    <dd>{(formik.touched.Salary && formik.errors.Salary)? formik.errors.Salary:null}</dd>
                    <dt>Employee Email</dt>
                    <dd><input type="text" name="Email" {...formik.getFieldProps("Email")}/></dd>
                    <dd>{(formik.touched.Salary && formik.errors.Salary)? formik.errors.Salary:null}</dd>
                    <dt>Employee Address</dt>
                    <dd>
                        <select name="Address" {...formik.getFieldProps("Address")}>
                            <option>telegana</option>
                            <option>andhra pradesh</option>
                            <option>tamilnadu</option>
                            <option>karnataka</option>
                            <option>keral</option>
                        </select>
                    </dd>
                    <dd>{(formik.touched.Address && formik.errors.Address)? formik.errors.Address:null}</dd>
                </dl>
                <div>
                    <button className="btn btn-primary">submit</button>
                </div>
            </form>
        </div>
        </>
    )

}
export default YupValdiationComponents