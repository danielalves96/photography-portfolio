import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: sans-serif;
    letter-spacing: 2px;

  }

  input {
    letter-spacing: normal;
  }
  
  .react-images__footer__caption {
    font-size: 20px;

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
  }
  
  .react-images__view {
      img {
        border: 1rem solid #fff;
      }

  }

  .react-images__view-wrapper {
    img {
        max-height: 80vh;
    }
      
    @media screen and (max-width: 480px) {
        img {
            border: 1rem solid #fff;
            max-width: 350px;
        }
    }
    
  }

  .ril__image {
    outline: 2rem solid #fff;
    outline-offset: -2rem;
  }



  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 24px;
    color: #fff !important;
}

.bm-burger-bars {
  background: #373a47;
}

.bm-burger-bars-hover {
  background: #a90000;
}

.bm-cross-button {
  height: 24px;
  width: 24px;
}

.bm-cross {
  background: #bdc3c7;
}

.bm-menu-wrap {
  position: fixed;
  height: 100%;
  top: 0;
}

.bm-menu {
  background: #333333;
  padding: 1.5em 1.5em 0;
  font-size: 1.15em;

  a { 
      color: #f5f5f5;
  }
}

.bm-morph-shape {
  fill: #333333;
}

.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}

.bm-item {
  display: inline-block;
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}

`;
