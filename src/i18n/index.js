import React from "react";

import { I18nContext, useTranslation } from "react-i18next";


const LanguageSelector = () => {

  const { i18n } = useTranslation();


  const changeLanguage = (event) => {

    changeLanguage(event.target.value);

  };


  return (

    <div onChange={i18n.changeLanguage}>

      <input type="radio" value="en" name="language" defaultChecked /> English

      <input type="radio" value="zh-hk" name="language" /> Chinese

      <input type="radio" value="de" name="language" />

      German

      <input type="radio" value="ar" name="language" /> Arabic

    </div>

  );

};


export default LanguageSelector;