import styled from "styled-components";

export const ContContact = styled.div `
  width: 100%;
  height: 65vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 65px;
  /* border:2px solid red;//.................. */
  @media (max-width: 768px) {
    margin-top: 15rem;
    height: max-content !important;
    align-items: flex-start;
  }

  img {
    /* width: 100%; */
    height: 100%;
    object-fit: cover;
    object-position: 35em 10%;
    /* border:2px solid red;//.................. */
    @media (max-width: 732px) {
      width: auto;
      height: 100%;
      object-position: right center;
    }
    @media (max-width: 550px) {
      width: 100%;
      height: auto;
      object-position: right center;
    }
  }
  .contContact1 {
    width: 50%;
    margin: 0 auto;
    height: auto;
    position: absolute;
    right: 120px;
    @media (max-width: 743px) {
      margin-top: 10em;
    }
    @media (max-width: 550px) {
      margin-top: 0;
    }
    .contContact2 {
      /* border: 2px solid red; //.................. */
      margin-top: 80px;
      .title {
        font-size: 4.5vw;
        font-weight: 900;
        padding-left: 0.2em;
        @media (max-width: 600px) {
          font-size: 30px;
        }
      }
      .subTitle {
        font-size: 1.8vw;
        font-weight: 600;
        margin: 3.5rem 0 0 0;
        padding-left: 0.2em;
        @media (max-width: 600px) {
          margin: 2rem 0;
        }
      }
      div {
        padding: 1rem 0;
        a {
          text-decoration: none;
          padding: 1.5rem 6.5rem;
          background-color: var(--color4);
          font-size: 2rem;
          font-weight: 600;
          color: var(--color5);
          border-radius: 0.7em;
          @media (max-width: 766px) {
            padding: 1.5rem 3vw;
            font-size: 3.4vw;
            font-weight: 100;
          }
          &:hover {
            color: var(--color1);
          }
          &:active {
            background-color: var(--color7);
          }
        }
      }
    }
  }
`;

export const FormContact = styled.div `
  /* border:2px solid blue;//.................. */
  .cont_form_mail {
    form {
      flex-direction: column;
      display: flex;
      /* padding: 1.5em; */
      .firstBlock {
        display: flex;
        div {
          width: 50%;
          display: flex;
          flex-direction: column;
          padding: 0 1rem;
        }
      }
      .form_label {
        font-size: 1.6em;
        color: var(--color4);
        padding: 0 0 0.5em 0;
        font-weight: 600;
        span {
          color: red;
          font-size: 20px;
        }
      }
      .form_input,
      select{
        margin-bottom: 1em;
        height: 2.8em;
        border-radius: 1em;
        border: 1px solid var(--color3);
        padding: 0 0 0 0.5em;
        option:disabled {
          color: transparent;
        }
        &::placeholder {
          color: var(--color4);
        }
        &:focus {
          border: 2px solid var(--color1);
          outline: none;
          &::placeholder {
            color: var(--color3);
          }
        }
      }
      .class_1 {
        margin-bottom: 1em;
        height: 2.8em;
        border-radius: 0.5em;
        border: 1px solid red;
        padding: 0 0 0 0.5em;
        &::placeholder {
          color: rgba(255, 0, 0, 0.623);
        }
        &:focus {
          border: 2px solid var(--color1);
          outline: none;
          &::placeholder {
            color: white;
          }
        }
      }
      input[type="number"] {
        -moz-appearance: textfield; /* Firefox */
      }

      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Estilo para el control personalizado */
      input[type="number"] {
        border: none;
        background: white;
        font-size: 12px;
        width: 100%;
      }

      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        display: none;
      }
    }
    .secondForm {
      display: flex;
      flex-direction: column;
      width: 96%;
      margin: auto;
      .btnFormContact {
        width: 100%;
        /* border: 1px solid red; //................ */
        text-align: center;
        padding: 0.5em 0;
        button {
          background-color: var(--color4);
          border: none;
          color: var(--color5);
          padding: 0.5em 1em;
          width: 20%;
          border-radius: 25px;
          cursor: pointer;
          font-size: 25px;
          font-weight: 900;
          &:hover {
            color: var(--color1);
          }
        }
        &:active {
          background-color: var(--color6);
        }
      }
    }
  }
`;

export const TextArea = styled.textarea `
  margin-bottom: 1em;
        /* height: 2.8em; */
        border-radius: 1em;
        border: 1px solid var(--color3);
        padding: 1em;
        option:disabled {
          color: transparent;
        }
        &::placeholder {
          color: var(--color4);
        }
        &:focus {
          border: 2px solid var(--color1);
          outline: none;
          &::placeholder {
            color: var(--color3);
          }
        }
`

export const CheckboxLabel = styled.label `
  display: flex;
  justify-content: space-around;
  /* border: 1px solid red;//................... */
  padding: 1em 0;
  span {
    width: 90%;
  }
`;

export const CheckboxInput = styled.input `
  appearance: none;
  width: 30px;
  height: 30px;
  border: 2px solid var(--color4);
  /* border-radius: 50%; */
  position: relative;
  transition: all 0.3s ease;
  /* border-color: var(--color1); */

  &:checked {
    border: 2px solid var(--color1);
    background-color: var(--color1);
  }

  &:checked::after {
    content: "\\2714";
    font-size: 14px;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    cursor: pointer;
  }
`;
