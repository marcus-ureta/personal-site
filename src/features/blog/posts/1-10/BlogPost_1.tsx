
import "@/features/blog/BlogPost.css"

function BlogPost_1(){
    return(
        <>
            <p>(article description)</p>

            <div className='blog-section'>
                <h1 className="blog-header-text">It All Starts With An Idea...</h1>

                <p>About a year ago, I saw a Youtube video by a creator named 'shar', an animation and freelance youtuber. Her video was mainly about showcasing her site and the process of how she developed it.</p>

                <p>When I first saw the video, it actually gave me a whole new perspective on web development. You see, I always thought that web development was a really boring and mindless job. Every website I see nowadays has just looked so similar to each other and feel devoid of any creativity. So I was never really interested on learning web development because I thought it was something that I wouldn't really enjoy. </p>

                <p>However, ever since I saw her video, I became really inspired to try and create my own personal website in her style. Unfortunately, past me from a year ago didn't have nearly enough experience or capabilities to create the site. Granted, it also wasn't just due to my lack of experience that prevented me from creating the site, but I also lacked the time and creativity needed to put my own spin on the idea.</p>

                <p>This doesn't mean I gave up on trying to develop the site, it just meant that I'd have to wait for the right moment when the stars aligned. Fortunately, at around July 17, I decided to finally start working on that idea!</p>

                <h2 className="blog-subheader-text">ADDITIONALLY:</h2>
                <p>I would also like to mention another source of inspiration I had during this period of time: the indie web!</p>

                <p>The indie web is a collection of personal websites where people can express themselves freely within the modern internet climate. One of the most popular indie-web host websites is titled Neocities, which I've learnt from a creator named 'Marighoul'. </p>

                <p>Later on, I got some of my ideas from the indie web too! </p>
            </div>

            <div className='blog-section'>
                <h1 className="blog-header-text">How I Designed My Site Layout:</h1>

                <p>Truth be told when I was first designing my site, I had no idea on where to begin. At the time, there was so many considerations I had to think about while developing the site. Some questions I asked myself at the time were: </p>

                <ul className="list-disc list-inside -space-y-0.5 mb-4 marker:black">
                    <li style={{color: "black"}}>How should the site look?</li>
                    <li style={{color: "black"}}>What kind of features do I want?</li>
                    <li style={{color: "black"}}>Should the site be like this other site?</li>
                    <li style={{color: "black"}}>How do I want my mobile site to look?</li>
                </ul>

                <p>To tackle these issues, I decided to fully focus on outlining what kind of features I wanted for the site first, then base my site design around those features. This methodology ensures that I have a clear idea of the MVP (Minimum Viable Product) for the project. Allowing me to fully envision the site as a whole rather than trying to design a blank canvas. </p>


                <h2 className="blog-subheader-text">FEATURE PORTION:</h2>
                <p>When outlining all the features I wanted for the site, I decided to just start out by listing out all the core features required. Which looked something similar like this: </p>

                <ul className="list-disc list-inside space-y-0.5 mb-4 marker:black">
                    <li style={{color: "black"}}>Inspired by a desktop-based OS, in which there are;</li>
                    
                    <ul className="list-[circle] list-inside ml-6 marker:black">
                        <li style={{color: "black"}}>Rectangular viewing areas for the content on the site, called tabs.</li>
                        <ul className="list-[circle] list-inside ml-11 marker:black">
                            <li style={{color: "black"}}>You can move these tabs around the screen</li>
                            <li style={{color: "black"}}>You can close the tabs</li>
                            <li style={{color: "black"}}>They act as an interesting visual way of accessing information on the site.</li>
                        </ul>

                        <li style={{color: "black"}}>Properly working z-index stacking between tabs</li>
                    </ul>
                    
                    <li style={{color: "black"}}>In terms of content, I wanted there to be an:</li>

                    <ul className="list-[circle] list-inside ml-6 marker:black">
                        <li style={{color: "black"}}>about me section,</li>
                        <li style={{color: "black"}}>socials page,</li>
                        <li style={{color: "black"}}>They act as an interesting visual way of accessing information on the site.</li>
                    </ul>

                    <li style={{color: "black"}}>Interactable Background</li>
                    <li style={{color: "black"}}>Sound Effects</li>
                </ul>

                <p>After listing them out, I then decided to list out any additional features I wanted for the site. These ideas could come from any other inspirations I might have seen before. Take for instance: the message board! This is an idea that came to me while I was surfing through the indie-web that I thought would be a fun addition to the site. Of course, the message board itself isn't the only other additional feature. Things such as the bug report page, blog, click effects, any any other features not mentioned previously were added due to external influences! To me, this felt like my own way of adding a unique personality to my site that no one has probably done before.</p>

                <p>In my opinion, it's important to jot down any ideas you may have during the brainstorming period. It helps you remember key details and what your target deliverable is. </p>


                <h2 className="blog-subheader-text">DESIGN PORTION:</h2>
                <p>After finalizing all the features, I finally moved on to designing the rough layout for the site! Now, even though I have finished all the prerequisites, it's not like this would be a cakewalk. I still need to put my own 'spin' on the idea after all. </p>

                <p>In this phase of the journey, I decided to hunt for inspirations and understand the design philosophy behind the inspirations for my site. I did this so I could further understand what kind of considerations I should take into account when planning my website out in Figma.</p>

                <p>In this portion, I will be listing out of all my sources of inspiration for the site layout, along with what I'm going to use and learn from each of them.</p>


                <p className="font-bold text-secondary-blue mt-6">main inspiration: shar site</p>
                <p>Okayyy. I understand, I've been glazing the hell out of her site for the past few paragraphs. So, instead of just praising the site like I've done previously, I'm going to go in-depth on the exact features I want from it. Understanding how and why she made those features in that manner.</p>

                <p>In that case, I would like to address the elephant in the room and discuss about the feature most prominently ported from shar's site: the draggable windows. To me, this was a no-brainer to implement into my site; in fact it is the CRUX of the entire project.</p>

                <p>But why is this the case? Why do I think this is such a good idea? Well for me as a developer, I always value interactivity when developing any project. It goes back to an old Gabe Newell quote regarding realism in video games:</p>

                <p>“So we had to come up with some notion of what fun was. We knew it was an ad hoc definition, and it was the degrees to which the game recognizes and responds to the player’s choices and actions […] The point I would make is, if I go up to a wall and shoot it, to me it feels like the wall is ignoring me. I’m getting a narcissistic injury when the world is ignoring me.”</p>

                <p>For me, this quote completely signifies my entire philosophy when it comes to development. I always want to make sure my works keep people engaged and make them appreciate all the actions they can take. In web development in particular, I can fulfill my user's "narcissistic" tendency by making them feel active and giving them actions that matter on my site. </p>

                <p>This is why an idea like a draggable window tab is so enticing and intriguing to me. Of course, the uniqueness of the idea itself is already ingenious, but what really sells me is how the feature rewards users when they interact with my site. </p>

                <p>Before moving forward, there is something I would like to mention. And that's the fact that while a desktop-based OS website is a novel idea, it isn't exactly a 'new' idea. However, despite this, none of the other websites I've visited really had any nice or smooth mobile support; all of them except for shar's site.</p>

                <p>To me, this is still what makes shar's site special even after a year since seeing her video. The design she made back then was simple, but timeless in its own way due to the way how she constructed her site. </p>


                <p className="font-bold text-secondary-blue mt-6">additional inspiration</p>
                <p>Aside from shar's site, I also took inspiration from other operating-system based websites. Due to these inspirations, I decided to lean more on an "operating-system" based web-design for the site. This is how I got the idea to implement a taskbar on the website!</p>

                <p>I noticed that without a taskbar at the bottom, there happened to be a lot of whitespace that could be filled up. This later on gave me the idea to implement a fully functioning time system, bug report & sound icon, and the ability to see which tabs are open with the taskbar too!</p>

            </div>
            
            <div className='blog-section'>
                <h1 className="blog-header-text">How to NOT Lose Motivation:</h1>

                <p>In my experience, designing a huge website like this can be a very tedious and scary task. It's not uncommon to easily get overwhelmed by the amount of things you need to keep track off. And I can tell you with 100% certainty that this can happen because... Well, it happened to me!</p>
                <p>You see, when I was first starting out designing this site, I had NO clue what I was doing. So, after a day of starting up the project, I immediately procastinated and almost abandoned it. I'm gonna be honest with you here, I was really bogged down by the realization of just how much I had to do. In fact, I almost thought this was a nigh impossible task for me to pull off.</p>
                <p>I mean after all, not only did I not have the slightest clue on how to begin. But I didn't even KNOW how to use the tech stack I was planning to use for the site. So, I gradually lost the motivation to work on the project altogether.</p>
                <p>This was the case until around a week or two later, when one of my friends showed me their own web development project that they're working on. It was a commission for someone's portfolio site, and it looked REALLY impressive. Now, this conversation eventually led me to showcase what I had done for my own website. And in contrast, it was so barebones compared to what they'd done so far that it was kind of embarassing.</p>
                <p>But truth be told, that actually inspired me to fully finish this project. Without them showcasing their own website, I wouldn't have had the courage to take such a giant leap of faith into the abyss. I wouldn't have been asked to learn so many new things just for this one side-project. In return, out of gratitude, I also wanted to work hard to showcase a project that's worth showing off to people!</p>
                <p>So you might be asking right now: What's the point of this section? Well, I'd like to argue that THIS is the most important section of the entire blog! </p>
                <p>If there's one thing that I want you to takeaway from this blog, it's that you should always find a way to stay motivated when working on a project. Without it, no matter how grand the ideas you may have are, as long as you don't have that urge to keep pushing through despite rough patches, then your never gonna finish that project! </p>
                <p>Find your own motivation. Try occasionally showing your project off to your friends and see what their reactions are like! Or maybe you find satisfaction somewhere else, then go do that as well! The point of the matter is that you should find what makes your project worth doing. That way, you have a point of reference for why you're still continuing to work on your project.</p>
            </div>
        </>
    )
}

export default BlogPost_1