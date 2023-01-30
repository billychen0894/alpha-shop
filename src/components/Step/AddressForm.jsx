import { useState } from "react";
import classes from "./AddressForm.module.css";
import Input from "../UI/Input";
import Dropdown from "../UI/Dropdown";
import Button from "../UI/Button";

const titleDropdownOptions = [
  { label: "請輸入稱謂", value: "", disabled: true },
  { label: "先生", value: "先生" },
  { label: "小姐", value: "小姐" },
];

const cityDropdownOptions = [
  { label: "請選擇縣市", value: "", disabled: true },
  { label: "台北市", value: "台北市" },
  { label: "台中市", value: "台中市" },
  { label: "高雄市", value: "高雄市" },
];

function AddressForm({ onToNextStep, formData, setFormData }) {
  // TODO: for title & city input values will be handled by using useState hook
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const titleChangeHandler = (e) => {
    setSelectedTitle(e.target.value);
  };

  const cityChangeHandler = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <form className={classes.formWrapper}>
      <h2>寄送地址</h2>
      <div className={classes.formControl}>
        <Dropdown
          label="稱謂"
          dropdownOptions={titleDropdownOptions}
          className={`${classes.input} ${classes.title}`}
          selected={selectedTitle}
          onChange={titleChangeHandler}
        />
        <Input
          className={`${classes.input} ${classes.name}`}
          label="姓名"
          input={{
            id: "name",
            type: "text",
            placeholder: "請輸入姓名",
          }}
          onChange={(e) => {
            setFormData({
              ...formData,
              address: { ...formData.address, name: e.target.value },
            });
          }}
          value={formData.address.name}
        />
        <Input
          className={`${classes.input} ${classes.phone}`}
          label="電話"
          input={{
            id: "phone",
            type: "text",
            placeholder: "請輸入電話",
          }}
          onChange={(e) => {
            setFormData({
              ...formData,
              address: { ...formData.address, phone: e.target.value },
            });
          }}
          value={formData.address.phone}
        />
        <Input
          className={`${classes.input} ${classes.email}`}
          label="Email"
          input={{
            id: "email",
            type: "email",
            placeholder: "請輸入電子郵件",
          }}
          onChange={(e) => {
            setFormData({
              ...formData,
              address: { ...formData.address, email: e.target.value },
            });
          }}
          value={formData.address.email}
        />
        <Dropdown
          label="縣市"
          dropdownOptions={cityDropdownOptions}
          className={`${classes.input} ${classes.city}`}
          selected={selectedCity}
          onChange={cityChangeHandler}
        />
        <Input
          className={`${classes.input} ${classes.address}`}
          label="地址"
          input={{
            id: "address",
            type: "text",
            placeholder: "請輸入地址",
          }}
          onChange={(e) => {
            setFormData({
              ...formData,
              address: { ...formData.address, address: e.target.value },
            });
          }}
          value={formData.address.address}
        />
      </div>
      <hr />
      <div className={classes.btnWrapper}>
        <Button className="nextStepBtn" type="button" onClick={onToNextStep}>
          下一步
          <i className="gg-arrow-right"></i>
        </Button>
      </div>
    </form>
  );
}

export default AddressForm;
