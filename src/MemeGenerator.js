
import React from 'react'

class MemeGenerator extends React.Component{

    state = {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
    }

    componentDidMount () {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then (data=> this.setState ({allMemeImgs: data.data.memes}))
    }

    onChangeHandler = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    onSubmitHandler = (event) => {

        // Prevent to reload the page
        event.preventDefault();
        this.setState(prevState => {
            const randomImg = Math.floor(Math.random() * Math.floor(prevState.allMemeImgs.length-1));
            return {
                randomImage: prevState.allMemeImgs[randomImg].url
            }
        });
    }

    render (){
        return (
            <div>
                <form className="meme-form">

                    <input 
                        type="text"
                        placeholder="Top Text Here"
                        name="topText"
                        value = {this.state.topText}
                        onChange = {this.onChangeHandler} 
                    />

                    <br/>

                    <input 
                        type="text"
                        placeholder="Bottom Text Here"
                        name="bottomText"
                        value = {this.state.bottomText} 
                        onChange = {this.onChangeHandler} 
                    />

                    <button onClick={this.onSubmitHandler}>Gen!</button>
                </form>

                <div className="meme">
                    <img 
                        src={this.state.randomImage}
                        alt= "random"
                    />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className= "bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator


/**
 * Other modern/advanced React features/topics to learn:
 * 
 * Official React Context API - https://reactjs.org/docs/context.html
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html
 */