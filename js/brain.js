window.addEventListener('load',function(){
    var originalclick= document.getElementById('dalanguages');
    originalclick.click()
});

var renderSpace = ReactDOM.createRoot(document.getElementById('renderspace'));


function Languages(){
    return(
        <div id="skillcontainer">
            <div id="skills">
                <div id="skilltitle">
                    <h2>Language Proficiency</h2>
                </div>
                <div class="language">
                    <img src="images/html-icon.svg"/>
                    <p>HyperText Markup Language</p>
                </div>
                <div class="language">
                    <img src="images/css-icon.svg"/>
                    <p>Cascading StyleSheet</p>
                </div>
                <div class="language">
                    <img src="images/javascript-programming-language-icon.svg"/>
                    <p>Javascript</p>
                </div>
            </div>
            <div id="frameeworks">
                <div id="frametitle">
                    <h2>Frameworks Experience</h2>
                </div>
                <div class="frame">
                    <img src="images/react-js-icon.svg"/>
                    <p>React | React Native</p>
                </div>
                <div class="frame">
                    <img src="images/node-js-icon.svg"/>
                    <p>NodeJs</p>
                </div>
            </div>
                        
        
        </div>
    )
}



function Project(){
    return(
        <>
            <div id="projects">
                <div id="projecttitle">
                    <h2>Projects</h2>
                </div>
                <div id='projectcontainer'>
                <div class="project">
                    <div class="projectimage">
                        <img src="images/cod.JPG"/>
                    </div>
                    <div class="projectdetails">
                        <div class="projectname">
                            <p>Call of Duty Webpage Clone</p>
                        </div>
                        <div class="view">
                            <a target="_blank" href="https://davidmanga254.github.io/callofduty"><button><i class="fa fa-external-link"></i></button></a>
                        </div>
                    </div>
                </div>
                <div class="project">
                    <div class="projectimage">
                        <img src="images/gf.JPG"/>
                    </div>
                    <div class="projectdetails">
                        <div class="projectname">
                            <p>Gamesfull Webpage Clone</p>
                        </div>
                        <div class="view">
                            <a target="_blank" href="davidmanga254.github.io/gamesfullClone"><button><i class="fa fa-external-link"></i></button></a>
                        </div>
                    </div>
                </div>
                <div class="project">
                    <div class="projectimage">
                        <img src="images/racoons.JPG"/>
                    </div>
                    <div class="projectdetails">
                        <div class="projectname">
                            <p>Overworld Clone</p>
                        </div>
                        <div class="view">
                            <a target="_blank" href="davidmanga254.github.io/overworld"><button><i class="fa fa-external-link"></i></button></a>
                        </div>
                    </div>
                </div>

                <div class="project">
                    <div class="projectimage">
                        <img src="images/grimmm.JPG"/>
                    </div>
                    <div class="projectdetails">
                        <div class="projectname">
                            <p>Grim</p>
                        </div>
                        <div class="view">
                            <a target="_blank" href="https://grim254.epizy.com"><button><i class="fa fa-external-link"></i></button></a>
                        </div>
                    </div>
                </div>
                <div class="project">
                    <div class="projectimage unique">
                        <img cl="unique" src="images/netlix.JPG"/>
                    </div>
                    <div class="projectdetails">
                        <div class="projectname">
                            <p>Netlix Webpage Clone</p>
                        </div>
                        <div class="view">
                            <a target="_blank" href="https://davidmanga254.github.io/NetflixClone/"><button><i class="fa fa-external-link"></i></button></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}


function RenderLanguage(){
    renderSpace.render(<Languages/>)
}

function RenderProject(){
    renderSpace.render(<Project/>)
}

function openMenu(){
    var side = document.getElementById('realsidebar')
    var open = document.getElementById('menu')
    var close = document.getElementById('scrollbutton')

    open.style.display='none'
    close.style.display='block'
    side.style.display='block';
}

function closeMenu(){
    var side = document.getElementById('realsidebar')
    var open = document.getElementById('menu')
    var close = document.getElementById('scrollbutton')

    open.style.display='block'
    close.style.display='none'
    side.style.display='none';
}



