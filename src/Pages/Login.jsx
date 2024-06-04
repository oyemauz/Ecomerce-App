import styled from "styled-components";
import Button from "../ui/common/Button";
import "../index.css";
import { useState } from "react";
import { signInUser } from "@/api/userAuthentication";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  background-color: var(--color-slate-100);
  padding: 2rem 6rem;
  width: 45rem;
  margin: 8rem auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.4rem;
  border-radius: 6px;
  font-size: 1.2rem;
  letter-spacing: 1.2px;

  @media screen and (max-width: 500px) {
    width: 35rem;
    padding: 2rem 4rem;
  }

  @media screen and (max-width: 350px) {
    width: 30rem;
    padding: 1rem 3rem;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Img = styled.img`
  width: 50%;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 3.4rem;
  border: none;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  background-color: #fff;

  &:focus {
    border: 1px solid var(--color-lime-500);
    background-color: #fff;
    font-size: 1.2rem;
  }
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function SubmitForm(e) {
    e.preventDefault();
    if (!email || !password) return;
    await signInUser({ email, password }, navigate);
  }

  return (
    <Form onSubmit={SubmitForm}>
      <Img src="/app_logo_img-removebg.png" alt="Grocery Go" />
      <Row>
        <label className="label">Enter Email </label>
        <Input
          type="email"
          placeholder="Enter Email... "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Row>
      <Row>
        <label className="label">Enter Password </label>
        <Input
          type="password"
          placeholder="Enter Password... "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Row>
      {/* <Row> */}
      <Button style={{ width: "100%", marginBottom: "1.4rem" }} size="medium">
        Login
      </Button>
      {/* </Row> */}
    </Form>
  );
}
