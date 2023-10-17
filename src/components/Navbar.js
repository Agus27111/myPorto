const mystyle = {
    color: "white",
    fontSize: "20px",
    fontFamily: "Arial"
  };

function Navbar (){
    return (
        <div>
        <nav class="navbar navbar-expand-xxl justify-content-center " style={mystyle}>
        <div class="container">
            <a class="navbar-brand" href="#">Agus Setiawan</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">About Me</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Skills</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Recent Work</a>
                </li>
            </ul>
            </div>
          
        </div>
        </nav>
        </div>
    )
};

export default Navbar;