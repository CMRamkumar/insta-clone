import React from 'react'
import styled from 'styled-components'
import { FiMoreHorizontal } from "react-icons/fi"

const Post = ({userLogoSrc, postedUserName, postUrl, type}) => {
    return <PostWrapper>
        <PostHeader>
            <PostHeaderInner>
                <div className="left">
                    <div className="user-logo">
                        <img src={userLogoSrc} alt={postedUserName} />
                    </div>
                    <span className="user-name">{postedUserName}</span>
                </div>
                <div className="right">
                    <a href="#">
                        <FiMoreHorizontal size="16px" />
                    </a>
                </div>
            </PostHeaderInner>
        </PostHeader>
        <PostContent>
            {
                type === 'image' ? <img 
                    src={postUrl}
                    alt="insta post"
                /> :
                null
            }
        </PostContent>
    </PostWrapper>
}

export default Post

const PostWrapper = styled.div`
    max-width: 600px;
    background: #fff;
    border: 1px solid #dbdbdb;
    justify-content: space-between;
    align-items: center;
`

const PostContent = styled.div`
    width: 80%;
    align-items: center;

    img {
        max-width: 600px;
    }
`

const PostHeader = styled.div`
    display: flex;
`

const PostHeaderInner = styled.header`
    height: 20px;
    padding: 16px;
    width: 100%;
    display: flex;
    
    .left {
        display: flex;
        flex: 50%;
        .user-logo {
            border-radius: 50%;
            overflow: hidden;
            width: 20px;
            height: 20px;
    
            img {
                height: 20px;
                width: 20px;
            }
        }

        .user-name {
            font-size: 14px;
            padding: 0 0 5px 5px;
        }
    }

    .user-name {
        padding: 0 5px;
    }

    .right {
        flex: 50%;
        text-align: right;
    }
`