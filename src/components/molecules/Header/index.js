import React from 'react'
import { FiSend, FiHome, FiHeart, FiCompass } from "react-icons/fi"
import styled from 'styled-components';

const Header = () => {
    return (
        <StyledHeader>
        <div className="content">
            <div className="logo">
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo" />
            </div>
            <div className="center">
                <input type="text" placeholder="Search" />
            </div>
            <div className="right">
                <a href="#">
                    <FiHome size="24px" />
                </a>
                <a href="#">
                    <FiHeart size="24px" />
                </a>
                <a href="#">
                    <FiSend size="24px" />
                </a>
                <a href="#">
                    <FiCompass size="24px" />
                </a>
            </div>
        </div>
    </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.div`
   border-bottom: 1px solid #eee;
   background: #fff;
    
    .content {
        display: flex;
        height: 70px;
        justify-content: space-between;
        align-items: center;
        max-width: 1024px;
        margin: 0 auto;
        padding: 0 20px;

        input {
            border: 1px solid #aaa;
            background: #efefef;
            height: 22px;
            font-size: 14px;
            text-align: center;
            padding: 5px 10px;
            border-radius: 3px;
        }
        a {
            padding: 0 10px;
        }
    }
`