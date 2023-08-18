import styled from "styled-components";

export const StyledDivTasks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
export const StyledInputAddTask = styled.input`
  font-family: "Poppins", sans-serif;
  color: var(--white);
  width: 23vw;
  height: 3vw;
  border-radius: 20px;
  background: none;
  border: 2px solid #d6625e;
  margin-right: -5px;
  margin-top: 20px;
  padding: 10px;

  ::placeholder {
    font-family: "Poppins", sans-serif;
    color: var(--white);
    text-transform: uppercase;
  }

  :focus {
    outline: none;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 20px;
  color: var(--white);

  li {
    width: 30vw;
    border-bottom: 2px solid #d6625e;
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }

  .custom-checkbox input {
    display: none;
  }
  .custom-checkbox input + label:before {
    content: "";
    width: 25px;
    height: 25px;
    border: 1px solid var(--white);
    border-radius: 5px;
    background: none;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    margin-bottom: 5px;
  }

  .custom-checkbox input:checked + label:before {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMS41ZW0iIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjQuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHN0eWxlPnN2Z3tmaWxsOiNkNzJkYzl9PC9zdHlsZT48cGF0aCBkPSJNNDM4LjYgMTA1LjRjMTIuNSAxMi41IDEyLjUgMzIuOCAwIDQ1LjNsLTI1NiAyNTZjLTEyLjUgMTIuNS0zMi44IDEyLjUtNDUuMyAwbC0xMjgtMTI4Yy0xMi41LTEyLjUtMTIuNS0zMi44IDAtNDUuM3MzMi44LTEyLjUgNDUuMyAwTDE2MCAzMzguNyAzOTMuNCAxMDUuNGMxMi41LTEyLjUgMzIuOC0xMi41IDQ1LjMgMHoiLz48L3N2Zz4=");
    border: 1px solid #222;
  }

  button {
    background: none;
    border: none;
    width: 25px;
    height: 25px;
    margin-bottom: 10px;
    background-image: none;
  }
`;

export const StyledLabel = styled.label`
  font-size: 18px;
  color: ${(props) => (props.iscompleted ? "#5c5d61" : "var(--white)")};
  text-decoration: ${(props) => (props.iscompleted ? "line-through" : "none")};
  opacity: ${(props) => (props.iscompleted ? 0.8 : 1)};
`;
