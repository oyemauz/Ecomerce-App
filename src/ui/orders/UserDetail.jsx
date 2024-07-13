import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../common/Button";

const Form = styled.form`
  margin: 1.4rem 3.4rem;

  button {
    width: 100%;
    font-weight: 600;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--color-slate-200);
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
  outline: none;

  &:focus {
    border: 1px solid var(--color-lime-500);
  }
`;
const Label = styled.label`
  font-size: 1rem;
  color: var(--color-grey-700);
`;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

function UserDetail() {
  const { register, handleSubmit } = useForm({
    //  defaultValues:
  });

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <DIV>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          {...register("name", { required: true })}
          placeholder="Full name"
        />
      </DIV>
      <DIV>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          {...register("email", { required: true })}
          placeholder="some@example.com"
        />
      </DIV>
      <DIV>
        <Label>Contact</Label>
        <Input
          type="number"
          name="contact"
          {...register("contact", { required: true })}
          placeholder="0303 799154"
        />
      </DIV>
      <DIV>
        <Label>Address</Label>
        <Input
          type="text"
          name="address"
          {...register("address", { required: true })}
          placeholder="street no 2 Adan town Lahore Punjab, Pakistan"
        />
      </DIV>
      <Button color={"white"} size="small">
        Submit
      </Button>
    </Form>
  );
}

export default UserDetail;
