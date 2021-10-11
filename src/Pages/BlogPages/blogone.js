import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './blogone.css';
import kidgif from './kidbeingdragged.gif';
import fighting from './fighting.gif';
import sword from './sword.png';

export default function BlogOne(){

    return(
        <div className="MainPage">
            <h1>Beginnings</h1>
            <div className = 'article'>
                <div className = "writerInfo">
                    <p>Written By: Madison Tinsley</p>
                    <p>10/11/2021</p>
                </div>
                <p>Hey there, and welcome to my first blog! Going to keep these pretty basic so I can do them fairly quickly when I get the urge to. 
                    Getting this running on Amplify was a hassle in of itself.
                </p>
                     Did you know that .Dev domains had to be SSL secured to work at all? I didn't until recently, 
                    honestly would have been good to know BEFORE I bought the domain. As always, thanks GoDaddy for that.
                <p>
                    If you need to buy a domain, I've loved working with NameCheaps DNS. 
                    From what I've seen Amazon's Route 53 also seems nice to work with, same with Google. At some point I may looking into transferring but for now, I'll stay with GoDaddy, because I got it working, 
                    and resetting everything up sounds like a nightmare I'm not prepared for.
                </p>
                <img className = "ImageCentered" src={kidgif} alt = "Gif of a girl being dragged around on the ground by a carousel. I feel it spiritually."  ></img>
                <p>
                    Over the last few days, I've finally realized what I want to for my next project. I want to create an action fighting game inspired by games like For Honor, Chivalry and Mordhau.
                </p>
                <p>
                    All of these games are fun, but they stylistically are very similar. Visually they are very pretty, each of them doing their own unique coat of paint, yet they all have a realism touch.
                </p>
                <p>
                    Mechanically they differ widely, each having their own intricate combat system. For Honor has arguably the most intricate system, and something like Mordhau has lots of variety, even having things like environmental weapons, like a ballista, but when you get down to it, each weapon is simple. Sword swing, bow shoot.
                </p>
                <p>
                    I want to do something different, stylistically, I want something where everything is loud and proud. I see a game where the characters are animated hyperbolically, whether that be jumping around the map with high mobility or a slow moving, heavily armored playstyle. One heavy hit might send you flying, or blur of fast attacks might leave the character dizzy.
                </p>
                <img className = "ImageCentered"src = {fighting}></img>
                <p>
                    I'm lucky to be working with someone I really respect, she's already sent me some 3D models that I can use for testing. I won't name drop her for privacy's sake, but I'll show how pretty even the test models are below. 
                    We've talked for years about doing some sort of game development but I have never really put in the time it deserves until now, and honestly I couldn't ask for a better partner for this.
                </p>
                <img className = "ImageCentered" src= {sword}/>
                <p>
                    A true beauty to behold, and that was done quick and dirty from what I was told. She has a set of skills that I don't, and vice versa, which leads to a good team, when we aren't intentionally pissing eachother off. 
                </p>
                <p>
                    So far, I only have a few roadblocks.
                        <ol>
                            <li>
                                Learning C++     
                            </li>
                            <p> This one is arguably the least of my troubles. Once you've learned a few languages, you know how to learn every language, it's simply just learning the syntax of the language. I could use Blueprints instead, which have a similar effect, but is a drag and drop system instead of writing code, but after doing some reading I don't trust myself not to make some spaghetti code from it. At least with actual code I have a few design standards to abide by that will limit that. </p>
                            <li>
                                Learning Unreal Engine
                            </li>
                            <p>
                                Unreal is a beast in the friendliest of terms, but like any tool the more you use it the easier it will become. My main concern is the plethora of natives that exist within it, and how easily I'll be able to use them effectively. To my credit I've done Fivem development for the past year and their documentation is awful. Epic seems to have pretty good notes though. That should ease the growing pains.Though considering the engine makes working in Fivem look and feel primitive by comparison.
                            </p>
                            <li>
                                Actually designing the systems
                            </li>
                            <p>
                                Unfortunately, it all comes down to design. You could be a great programmer (I'm not anyways), but if the system you're building is fundamentally flawed and unfun, there's very little if anything you can actually do to salvage it, and this is where I have been struggling the most. The last few days I have been learning unreal, and picking it up quickly. However while I have a vague idea in my head about how the systems and mechanics are going to be played out, the specifics get away from me, and every idea I come up with I realize is either needlessly complex or just fundamnetally unfun. The first I can deal with, the second I cannot. On the brightside what good are friends if you can't throw every terrible idea you have at them and see what sticks? Sorry in advance if you're one of the few that get subjected to that.
                            </p>

                        </ol>
                </p>
                <p>
                    Even with the insane amount of work I'm looking at, I can't help but be incredibly excited about making it a reality. Freeing up some of my prior responsiblities was painful as weird as it sounds, and I miss doing it immensily, but I wanted to do something more, so I here I am. 
                </p>
                <p>
                    Until Next Time
                </p>
                <p>
                    -Madison
                </p>
            </div>
        </div>
    );
}
