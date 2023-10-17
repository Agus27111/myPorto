import '../Intro/Intro.css';


let greething;
const currentTime = new Date();
const timeNow = currentTime.getHours();
const customColor = {
  color: ""
};
if (timeNow < 12) {
  greething = "Good Morning";
  customColor.color = "red";
} else if (timeNow < 18) {
  greething = "Good Afternoon";
  customColor.color = "green";
} else {
  greething = "Good Night";
  customColor.color = "yellow";
}


function Intro (){
    return (
        <div className='container'>
          <div className='row intro'>      
            <div className='col intro-left'>
                <h1 className="heading" style={customColor}>
                    {greething}
                </h1>
                <h2>I'm Web Developer</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
            </div>
            <div className='col intro-right'>
                <img className='img-avatar'
                    src='https://thumbs.dreamstime.com/b/software-language-programmer-avatar-software-language-programmer-avatar-vector-illustration-design-110589781.jpg'
                />
            </div>
            </div>
        </div>

        
    )
};

export default Intro;