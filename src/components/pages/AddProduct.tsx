
import Footer from './../layout/Footer';
import AddProductNavbar from './../layout/AddProductNavbar';
import MainForm from './../layout/MainForm';
import Form_Formik from '../layout/Form_Formik';


function AddProduct() {
  return (
    <div className='home '>
      <AddProductNavbar/>
      <MainForm/>
      {/* <Form_Formik/> */}
      <Footer/>
    </div>
  )
}

export default AddProduct
