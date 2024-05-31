import Button from "@/ui/common/Button";
import Input from "@/ui/common/Input";
import styled from "styled-components";

const DIV = styled.div`
padding:2.4rem 4.6rem;

h4{
    font-size:1.8rem;
    color:var(--color-grey-500);
    margin:1.4rem 0;
    letter-spacing:1.2px;
}

`;

const Pass = styled.div`

    padding:1.4rem;
    background-color:#fff;
    border-radius:6px;
    display:flex;
    flex-direction:column;
    gap:1.4rem;

div{
    display:grid;
    grid-template-columns: 20rem 1.8fr 1.8fr;
    align-items:center;
    padding: 0 3.4rem;
    padding-bottom:1rem;
    border-bottom:1px solid var(--color-slate-100);
    background-color:#fff;

    &:last-child{
        display:flex;
        justify-content:flex-end;
        gap:1.4rem;
    }
}

label{
    font-size:1.3rem;
    color:var(--color-grey-600);
    font-weight:600;
}

    input{
        border: 1px solid var(--color-slate-200);
        outline:none;
    }

    input:focus{
        border: 2px solid var(--color-lime-500);
    }

    button{
        color:#fff;
    }
    button:hover{
        background-color:var(--color-lime-600);
    }


`;

export default function UpdatePassword() {
    return (
        <DIV>
            <h4>Update Password</h4>
            <Pass>
                <div>
                    <label>New Password</label>
                    <Input type="text" />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <Input type="text" />
                </div>
                <div>
                    <Button size="medium">Cancel</Button>
                    <Button size="medium">Update Password</Button>
                </div>
            </Pass>
        </DIV>
    )
}
