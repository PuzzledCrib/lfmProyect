import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import twitterSquareFilled from "@iconify/icons-ant-design/twitter-square-filled";
import facebookOutlined from "@iconify/icons-ant-design/facebook-outlined";
import instagramOutlined from "@iconify/icons-ant-design/instagram-outlined";
import githubOutlined from "@iconify/icons-ant-design/github-outlined";
import mailOutlined from "@iconify/icons-ant-design/mail-outline";
import codepenOutlined from "@iconify/icons-ant-design/codepen-outlined";

const Contacto = () => {
  return (
    <div class="row contacto">
      <div class="col-7 col-left">
        <div class="row info rounded-lg">
          <div class="contactInfo">
            <h1> Luis Fernando Miranda Cruz </h1>
            <h3>Fotógrafo y Programador</h3>
          </div>
          <div class="col">
            <a class="col" href="https://www.facebook.com/fer.mirandacruz">
              <Icon icon={facebookOutlined} class="codePen" color="#48b461be" />
              Luis Fernando Miranda Cruz
            </a>
            <a class="col" href="https://www.instagram.com/justasimple.photo/">
              <Icon
                icon={instagramOutlined}
                class="codePen"
                color="#48b461be"
              />
              Just a Simple Photo
            </a>
            <a class="col" href="https://github.com/PuzzledCrib">
              <Icon icon={githubOutlined} class="codePen" color="#48b461be" />
              PuzzledCrib
            </a>
          </div>
          <div class="col">
            <a class="col" href="mailto: luiscruzmiranda@hotmail.com">
              <Icon icon={mailOutlined} class="codePen" color="#48b461be" />
              luiscruzmiranda@hotmail.com
            </a>
            <a class="col" href="https://twitter.com/LFMC_99">
              <Icon
                icon={twitterSquareFilled}
                class="codePen"
                color="#48b461be"
              />
              @LFMC_99
            </a>
            <a class="col" href="https://codepen.io/PuzzledCrib">
              <Icon icon={codepenOutlined} class="codePen" color="#48b461be" />
              PuzzledCrib
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
