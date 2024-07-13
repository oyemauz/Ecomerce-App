import styled from "styled-components";
import Input from "@/ui/common/Input";
import Button from "@/ui/common/Button";
import UpdatePassword from "./UpdatePassword";
import { useAuth } from "@/contextApi/authenticateUser";

const UserProfile = styled.div`
  padding: 2.4rem 4.6rem;

  h1 {
    color: var(--color-grey-600);
    font-size: 2.6rem;
    background-color: 3rem;
    margin-bottom: 1.8rem;
  }
`;

const DIV = styled.div`
  h4 {
    font-size: 1.6rem;
    color: var(--color-grey-500);
    margin: 1.4rem 0;
    letter-spacing: 1.2px;
  }
`;

const UserData = styled.div`
  padding: 1.4rem;
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const Field = styled.div`
  display: grid;
  grid-template-columns: 20rem 1.8fr 1.8fr;
  align-items: center;
  padding: 0 3.4rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-slate-100);

  label {
    font-size: 1.3rem;
    color: var(--color-grey-600);
    font-weight: 600;
  }

  &:last-child {
    display: flex;
    justify-content: flex-end;
    gap: 1.4rem;
  }

  input {
    // width:40%;
    font-size: 1.4rem;
    outline: none;

    &::file-selector-button {
      background-color: var(--color-lime-500);
      border: none;
      padding: 0.3rem 0.5rem;
      border-radius: 3px;
      color: #fff;
    }
  }

  input:focus {
    border: 2px solid var(--color-lime-500);
  }

  button {
    color: #fff;
  }

  button:hover {
    background-color: var(--color-lime-600);
  }
`;

export default function Profile() {
  const { currentUser: user } = useAuth();
  console.log("current user-> ", user);

  return (
    <>
      <UserProfile>
        <h1>Update Your Account</h1>
        <DIV>
          <h4>Update User data</h4>
          <UserData>
            <Field>
              <label>Email Address</label>
              <Input type="text" defaultValue={user.email} disabled />
            </Field>
            <Field>
              <label>Full Name</label>
              <Input
                type="text"
                defaultValue={user.name}
                style={{ border: "1px solid var(--color-slate-200)" }}
              />
            </Field>
            <Field>
              <label>Avatar Image</label>
              <Input type="file" />
            </Field>
            <Field>
              <Button size="medium">Cancel</Button>
              <Button size="medium">Update Account</Button>
            </Field>
          </UserData>
        </DIV>
      </UserProfile>
      <UpdatePassword />
    </>
  );
}
