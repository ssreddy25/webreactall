import React from "react";
import { ErrorMessage, Field, Form, Formik  } from "formik";
import * as yup from 'yup'

const FomikComponent=()=>{

    return(
       <Formik 
        initialValues={
            {
                EmpId:'', 
                EmpName:'',
                EmpSalary:'',
                EmpCity:''
            }

        }
        validationSchema={
            yup.object({
                EmpId:yup.number().required().min(3,"id should be a 3 numbers only").max(6 ,"id should be maximum 6 numbers only"),
                EmpName:yup.string().required().min(5,"name should be a 5 charcters").max(15 ,"name should be maximum 15 characters only"),
                EmpSalary:yup.number().required("enter the salry"),
                EmpCity:yup.string().required("select the city name ")
            })
        }
        
        onSubmit={
           values=> {
                alert(JSON.stringify(values))
            }
        }
    
       
       >
        {
             props =>(
                <div className="container">
                    <h1>Employee register  form</h1>
                    <Form>
                      <dl>
                        <dt>Id</dt>
                        <dd>
                            <Field type="text" name="EmpId"></Field>
                        </dd>
                        <dd><ErrorMessage name="EmpId" ></ErrorMessage></dd>
                        <dt>name</dt>
                        <dd>
                            <Field type="text" name="EmpName"></Field>
                        </dd>
                        <dd><ErrorMessage name="EmpName" ></ErrorMessage></dd>
                        <dt>salary</dt>
                        <dd>
                            <Field type="text" name="EmpSalary"></Field>
                        </dd>
                        <dd><ErrorMessage name="EmpSalary" ></ErrorMessage></dd>
                        <dt>city</dt>
                        <dd>
                            <Field as="select" name="EmpCity">
                            <option>delhi</option>
                            <option>telegana</option>
                            <option>andhra pradesh</option>
                            <option>tamilnadu</option>
                            <option>karnataka</option>
                            <option>keral</option>
                            </Field>
                            </dd>
                        <dd><ErrorMessage name="EmpCity" ></ErrorMessage></dd>
                        <button disabled={props.isValid}>Register</button>
                        <button disabled={props.dirty}>Save</button>
                      </dl>
                    </Form>
                </div>

            )
        }
            

            
       </Formik>

    )

}
export default FomikComponent