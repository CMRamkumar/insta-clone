import React, { useEffect } from 'react'
import styled from 'styled-components'
import Header from '../../molecules/Header'
import Post from '../../molecules/Post'

const HomePage = () => {

    const [ posts, setPosts ] = React.useState([]);

    useEffect(() => {
        const fetchPostFetails = async () => {
            let postDetails = await fetch("http://localhost:3000/posts")
            console.log(postDetails);
            postDetails = await postDetails.json();
            console.log(postDetails);
            setPosts(postDetails)
        }
        fetchPostFetails()
    }, []);

    return <>
        <Header />
        <StyledHomePage>
            <div className="content">
                <div className="main">
                   {
                        posts.length ?
                        posts.map(post => <Post
                            userLogoSrc={post.postedUser.profilePhoto}
                            key={post.postDetails.id}
                            postedUserName={post.postedUser.name}
                            postUrl={post.postDetails.src}
                            type={post.postDetails.type}
                        />) :
                        <p> Loading ... </p>
                    } 
                </div>
                <div className="sidebar">
                    avatar
                </div>
            </div>
        </StyledHomePage>
    </>
}

export default HomePage

const  StyledHomePage  = styled.div`
    background: #efefef;
    display: flex;
    min-height: calc(100vh - 70px);
    .content {
        display: flex;
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        padding: 10px 20px;
    }
    .main {
        flex-grow: 1;
    }

    .sidebar {
        min-width: 310px;
    }
`