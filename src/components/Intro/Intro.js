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
        <div className='section text-light'>
            <div className='grid-child left'>
                <h1>Hello I'm Web Developer</h1>
                <p className="heading" style={customColor}>
                    {greething}
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className='grid-child right'>
                <img
                    src=''
                />
            </div>
        </div>

        
    )
};

export default Intro;