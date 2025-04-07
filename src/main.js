const containerStyle = {
    fontFamily:"Poppins",
    backgroundColor:"ghostwhite",
    width:'50vw',
    padding:'20px 40px'
}
const subtitleStyle = {
    marginTop:'10px'
}
const headingElement = React.createElement('h1', null, "Topics covered");
const subHeadingElement = React.createElement('p', {
    style:subtitleStyle
}, "The following is a list of all the topics we cover in the MDN learning area.")
const firstDiv = React.createElement('div',
    {
        className:"eachDiv"
    },
    [
        React.createElement('a',{
            href:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website'
        }, "Getting Started with the web"),
        React.createElement('p', {
            className:'context'
        }, "Provides a practical introduction to web development for complete beginners.")
    ]
);
const secondDiv = React.createElement('div', 
    {
        className:"eachDiv"
    }, 
    [
        React.createElement('a', {
            href:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content"
        }, "HTML — Structuring the web"),
        React.createElement('p', {
            className:'context'
        }, 'HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.')
    ]
);
const thirdDiv = React.createElement('div', 
    {
        className:"eachDiv"
    }, 
    [
        React.createElement('a', {
            href:"https://developer.mozilla.org/en-US/docs/Web/CSS"
        }, "CSS — Styling the web"),
        React.createElement('p', {
            className:'context'
        }, "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.")
    ]
);

const container = React.createElement('div',
    {
        style:containerStyle
    }, 
    [headingElement, subHeadingElement, firstDiv, secondDiv, thirdDiv]
);
ReactDOM.render(container, document.getElementById('root'));