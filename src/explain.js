import React from 'react'
import './explain.css';

function Explain() {
  return (
    <div className="Explain">
      <p>
        Creating a website using react can be a very complicated task. Firstly I had to install node on my computer in order to be able to create and run a react environment 
        on my computer. Finding tutorials on how to create a react website was pretty simple but getting to know how to edit the files and where to edit them was quite challenging.
         Finally I decided to use the shell command "code ." that opens the whole react directory very simply and easily in VS code. I coded and added TItle.js and Title.css 
         to create a header for the website. Then I added explain.js and explain.css to create this division for my explaination. I also tweeked the index.css file and app.js file 
         to change the visuals. One of the dificulities of react is that it is very javascript heavy and I am practically new to java. To create a header, I had to declare it in 
         a js file and give it HTML properties. Then I had to link a css file to that js file to make it look nice. Finally I had to add the header function I made in the 
         title.js file to App.js file which is the main page of the react app. I had to go through the same process to create this explaination division as well. So in that sense
         react is much more complicated than plain HTML, CSS and JS combo. However the most challenging part was uploading my react to the digitalocean server. Since digitalocean
         uses github to read files and execute them, I had to setup a git connection between my react project and a github respetory. That was very difficult and challening
         because most of the instruction guides I found on this were incomplete. I had to combine more than ten instructions to finally deploy my reacy app to a git respetory.
         I had to first create an SSH link for my Github account. Afterwards I had to initialize git on my react app directory and after that, I had to add the path of my react
         directory to my git connection. After selecting the main branch of the directory, I pushed everything on the directory to that connection and all files were finally 
         deployed to my Github respetory.
         Once I was done with that. The rest was plain and simple and with just a few clicks my react app went online on DigitalOceans servers.
      </p>
    </div>
  )
}

export default Explain