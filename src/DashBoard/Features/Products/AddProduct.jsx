import styled from "styled-components";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { CreateNewProduct, updateProduct } from "@/api/getProductsDetails";
import toast from "react-hot-toast";

// import { useEffect } from 'react';
// CreateNewProduct

const NewProduct = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 6rem;
  transition: all 0.5s ease 0s;
  border: 6px;
  width: 40%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 2rem;

  .btn {
    display: flex;
    align-items: center;
    gap: 2.4rem;
  }
`;

const Input = styled.input`
  width: 70%;
  padding: 0.8rem;
  border: 1px solid var(--color-slate-200);
  border-radius: var(--border-radius-sm);
  font-size: 1rem;

  &::file-selector-button {
    background-color: var(--color-lime-500);
    border: none;
    padding: 0.3rem 0.5rem;
    border-radius: 3px;
    color: #fff;
  }
`;

const Label = styled.label`
  font-size: 1rem;
  color: var(--color-grey-700);
`;

const Button = styled.button`
  padding: 0.8rem 1.6rem;
  border: none;
  background-color: var(--color-lime-500);
  color: #fff;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: rgb(118, 178, 28);
  }
`;

AddProduct.propTypes = {
  setnewProduct: PropTypes.any,
  item: PropTypes.any,
  setEdit: PropTypes.any,
  isEdit: PropTypes.any,
  setdropdown: PropTypes.any,
};

export default function AddProduct({
  setdropdown,
  isEdit,
  setnewProduct,
  item,
  setEdit,
}) {
  const { register, handleSubmit } = useForm({
    defaultValues: item,
  });

  const onSubmit = async (data) => {
    if (isEdit) {
      try {
        /* Hello */
        const editItem = {
          ...data,
          imageUrl: data.imageUrl || item.imageUrl,
        };
        updateProduct(editItem);
        toast.success("Item Successfully Edit");
      } catch (error) {
        toast.error("Error during submission");
      } finally {
        // setnewProduct(false);
      }
    } else {
      CreateNewProduct(data);
      toast.success("Item Successfully Added");
      setnewProduct(false);
    }
    setdropdown(false);
  };
  function handleCancel() {
    if (isEdit) {
      setEdit(false);
    } else {
      setnewProduct(false);
    }
    setdropdown(false);
  }

  return (
    <NewProduct>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Product Name</Label>
        <Input
          type="text"
          name="productName"
          {...register("name", { required: true })}
        />

        <Label>Product Price</Label>
        <Input
          type="text"
          name="productPrice"
          {...register("price", { required: true })}
        />

        <Label>Product Quantity</Label>
        <Input
          type="text"
          name="productQuantity"
          {...register("quantity", { required: true })}
        />

        <Label>Product Status</Label>
        <select {...register("status")}>
          <option value="available">Available</option>
          <option value="notavailable">Not Available</option>
        </select>
        <Label>Category Image</Label>
        <Input
          type="file"
          name="categoryImage"
          accept="image/png, image/jpeg, image/jpg"
          {...register("imageUrl", { required: true })}
        />

        <div className="btn">
          <Button type="button" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </NewProduct>
  );
}
// onClick={()=>toast("toast is here")}
