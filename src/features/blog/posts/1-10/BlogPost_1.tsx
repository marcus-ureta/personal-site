
import Quotation from '@/components/quotation/Quotation'

import "@/features/blog/BlogPost.css"

function BlogPost_1(){
    return(
        <>
            <p>(article description)</p>


            {/* It All Starts With An Idea... */}
            <div className='blog-section'>
                <h1 className="blog-header-text">It All Starts With An Idea...</h1>

                <p>About a year ago, I saw a YouTube video by a creator named 'shar', an animation and freelance YouTuber. Her video was mainly about showcasing her site and the process of how she developed it.</p>

                <p>When I first saw the video, it actually gave me a whole new perspective on web development. You see, I always thought that web development was a really boring and mindless job. Every website I see nowadays just look so similar to each other and feels devoid of any creativity. So I was never really interested in learning web development because I thought it was something that I wouldn't really enjoy. </p>

                <p>However, ever since I saw her video, I became really inspired to try and create my own personal website in her style. Unfortunately, past me didn't have nearly enough experience or capabilities to create the site. Granted, it also wasn't just due to my lack of experience that prevented me from creating the site, but I also lacked the time and creativity needed to put my own spin on the idea.</p>

                <p>This doesn't mean I gave up on trying to develop the site. It just meant that I'd have to wait for the right moment when the stars aligned. Fortunately, around July 17, I decided to finally start working on that idea!</p>

                <h2 className="blog-subheader-text">ADDITIONALLY:</h2>
                <p>I would also like to mention another source of inspiration I had during this period of time: the indie web!</p>

                <p>The indie web is a collection of personal websites where people can express themselves freely within the modern internet climate. One of the most popular indie-web hosts is Neocities, which I learned about from a creator named 'Marighoul'. </p>

                <p>Later on, I got some of my ideas from the indie web too! </p>
            </div>

            {/* How I Designed My Site Layout */}
            <div className='blog-section'>
                <h1 className="blog-header-text">How I Designed My Site Layout:</h1>

                <p>Truth be told, when I was first designing my site, I had no idea where to begin. At the time, there were so many considerations I had to think about while developing the site. Some questions I asked myself at the time were: </p>
                
                <ul className="list-disc list-inside -space-y-0.5 mb-4 marker:black">
                    <li style={{color: "black"}}>How should the site look?</li>
                    <li style={{color: "black"}}>What kind of features do I want?</li>
                    <li style={{color: "black"}}>Should the site be like this other site?</li>
                    <li style={{color: "black"}}>How do I want my mobile site to look?</li>
                </ul>

                <p>To tackle these issues, I chose to focus on outlining the features I wanted for the site first, then base my design around those features. This methodology ensured that I had a clear idea of the MVP (Minimum Viable Product) for the project. This allowed me to fully envision the site as a whole rather than trying to design a blank canvas. </p>


                <h2 className="blog-subheader-text mt-10!">FEATURE PORTION:</h2>
                <p>When outlining all the features I wanted for the site, I decided to start by listing all the core features required. Which looked something like this: </p>

                <div className='p-4 border-2 border-black rounded-lg my-6 w-full h-fit shadow-xl bg-container-blue/75'>
                    <ul className="list-disc list-inside space-y-0.8 marker:black">

                        <li style={{color: "black"}}>Inspired by a desktop-based OS, the site would have:</li>
                        
                        <div className='border-l-2 border-zinc-500 ml-0.5'>
                            <ul className="relative list-[circle] list-inside ml-6 marker:black">
                                <li style={{color: "black"}}>Rectangular viewing areas for the content on the site, called tabs.</li>
                                
                                <div className='border-l-2 border-zinc-500 ml-0.5'>
                                    <ul className="list-[square] list-inside ml-11 marker:black">
                                        <li style={{color: "black"}}>The ability to move these tabs around the screen.</li>
                                        <li style={{color: "black"}}>The ability to close tabs.</li>
                                        <li style={{color: "black"}}>They act as an interesting visual way of accessing information on the site.</li>
                                    </ul>
                                </div>

                                <li style={{color: "black"}}>Properly working z-index stacking between tabs</li>
                            </ul>
                        </div>

                        <li style={{color: "black"}}>In terms of content, I wanted there to be:</li>

                        <div className='border-l-2 border-zinc-500 ml-0.5'>
                            <ul className="list-[circle] list-inside ml-6 marker:black">
                                <li style={{color: "black"}}>an about me section,</li>
                                <li style={{color: "black"}}>a socials page,</li>
                                <li style={{color: "black"}}>contact form</li>
                            </ul>
                        </div>

                        <li style={{color: "black"}}>An interactable background,</li>
                        <li style={{color: "black"}}>and sound effects</li>
                    </ul>
                </div>

                <p>After listing them out, I then decided to list out any additional features I wanted for the site. These ideas could come from other sites and projects that inspired me. Take, for instance, the message board! This is an idea that came to me while I was surfing through the indie-web that I thought would be a fun addition to the site. Of course, the message board itself isn't the only other additional feature. Things such as the bug report page, blog, click effects, and any other features not mentioned previously were added due to external influences! To me, this felt like my own way of giving the site a unique personality that was distinctly mine.</p>

                <p>In my opinion, it's important to jot down any ideas you may have during the brainstorming period. It helps you remember key details and what your target deliverable is. </p>


                <h2 className="blog-subheader-text mt-10!">DESIGN PORTION:</h2>
                <p>After finalizing all the features, I finally moved on to designing the rough layout for the site! Now, even though I have finished all the prerequisites, it's not like this would be a cakewalk. I still need to put my own 'spin' on the idea after all. </p>

                <p>In this phase of the journey, I ended up hunting for inspiration and trying to understand the design philosophy behind the inspirations for my site. I did this so I could further understand what I should take into account when planning my website out in Figma.</p>

                <p>In this portion, I will be listing all my sources of inspiration for the site layout, along with what I'm going to use and learn from each of them.</p>


                <p className="font-bold text-secondary-blue mt-6">main inspiration: shar site</p>
                <p>Okayyy. I understand, I've been glazing the hell out of her site for the past few paragraphs. So, instead of just praising the site like I've done previously, I'm going to go in-depth on the exact features I want from it. With the sole intention to understand how and why she made those features in that manner.</p>

                <p>In that case, I would like to address the elephant in the room and discuss the feature most prominently ported from shar's site: the draggable windows. To me, this was a no-brainer to implement on my site; in fact it is the CRUX of the entire project.</p>

                <p>But why is this the case? Why do I think this is such a good idea? Well for me, as a developer, I always value interactivity when developing any project. It goes back to an old Gabe Newell quote regarding realism in video games:</p>

                <Quotation author="Gabe Newell" year="2023" source="https://www.youtube.com/watch?v=MGpFEv1-mAo">
                    So we had to come up with some notion of what fun was. We knew it was an ad hoc definition, and it was the degrees to which the game recognizes and responds to the player’s choices and actions […] The point I would make is, if I go up to a wall and shoot it, to me it feels like the wall is ignoring me. I’m getting a narcissistic injury when the world is ignoring me.
                </Quotation>

                <p>For me, this quote completely signifies my entire philosophy when it comes to development. I always want to make sure my works keep people engaged and make them appreciate all the actions they can take. In web development in particular, I can fulfill that 'narcissistic' tendency in my users by making them feel active and giving them actions that matter on my site. </p>

                <p>This is why an idea like a draggable window tab is so enticing and intriguing to me. Of course, the idea itself is already ingenious, but what really sells me is how the feature rewards users when they interact with my site. </p>

                <p>Before moving forward, there is something I would like to mention. And that's the fact that while a desktop-based OS website is a novel idea, it isn't exactly a 'new' idea. However, despite this, none of the other websites I've visited had particularly good or smooth mobile support. All of them except for shar's site.</p>

                <p>To me, this is still what makes shar's site special even after a year since seeing her video. The design she made back then was simple, but timeless in its own way due to how she constructed her site. </p>


                <p className="font-bold text-secondary-blue mt-6">additional inspiration</p>
                <p>Aside from shar's site, I also took inspiration from other operating-system-based websites. Due to these inspirations, I decided to lean more on an "operating-system-based" web-design for the site. This is how I got the idea to implement a taskbar on the website!</p>

                <p>I noticed that without a taskbar at the bottom, there was a lot of whitespace that could be filled up. This later gave me the idea to implement a fully functioning time system, bug report and sound icons, and a way to see which tabs are open with the taskbar!</p>

            </div>

            {/* How to not Lose Motivation */}
            <div className='blog-section'>
                <h1 className="blog-header-text">How to NOT Lose Motivation:</h1>

                <p>In my experience, designing a huge website like this can be a very tedious and scary task. It's easy to get overwhelmed by the number of things you need to keep track of. And I can tell you with 100% certainty that this can happen because... Well, it happened to me!</p>
                <p>You see, when I was first starting out designing this site, I had NO clue what I was doing. So, after only a day of working on the project, I immediately procrastinated and almost abandoned it. I'm gonna be honest with you here, I was really bogged down by the realization of just how much I had to do. In fact, I almost thought this was a nigh-impossible task for me to pull off.</p>
                <p>I mean after all, not only did I not have the slightest clue how to begin. But I didn't even KNOW how to use the tech stack I was planning to use for the site. So, I gradually lost motivation to work on the project altogether.</p>
                <p>This was the case until around a week or two later, when one of my friends showed me their own web development project that they're working on. It was a commission for someone's portfolio site, and it looked REALLY impressive. Now, this conversation eventually led me to showcase what I had done for my own website. And in contrast, it was so barebones compared to what they'd done so far that it was kind of embarrassing.</p>
                <p>But truth be told, that actually inspired me to fully finish this project. Without them showcasing their own website, I wouldn't have had the courage to take such a giant leap of faith into the abyss. I wouldn't have been pushed myself to learn so many new things just for this one side-project. In return, out of gratitude, I also wanted to work hard to showcase a project that's worth showing off to people!</p>
                <p>So you might be asking right now: What's the point of this section? Well, I'd like to argue that THIS is the most important section of the entire blog! </p>
                <p>If there's one thing that I want you to take away from this blog, it's that you should always find a way to stay motivated when working on a project. Without it, no matter how grand the ideas you may have are, as long as you don't have that urge to keep pushing through despite rough patches, then you're never gonna finish that project! </p>
                <p>Find your own motivation. Try occasionally showing your project off to your friends and see what their reactions are like! Or maybe you find satisfaction somewhere else, then go do that as well! The point is that you should find what makes your project worth doing. That way, you have a point of reference for why you're continuing to work on your project.</p>
            </div>

            {/* Milanote Designing */}
            <div className='blog-section'>
                <h1 className="blog-header-text">Milanote Designing:</h1>
                <p>Initially, when I was beginning to design the project, I actually only used Figma to design the web layout. However, it was really hard for me to visualize all the things I wanted for the site. After all, I didn't really have a moodboard, typography, color palette, or even any clear references that I can draw inspiration from.</p>

                <p>Fortunately, this is where Milanote comes in! Milanote is one of the primary tools I use to visualize the general 'feel' of the site. I used Milanote to design the important visual elements of the website. This included elements I discussed earlier, such as typography, moodboards, color palettes, and the background design.</p>

                <p>Essentially, I used Milanote as a gateway to visualize and lay out my site. Without it, designing the site would have been extremely difficult and messy! </p>
            </div>

            {/* Figma Designing */}
            <div className='blog-section'>
                <h1 className="blog-header-text">Figma Designing:</h1>
                <p>Initially, as stated in the previous section, it was really hard for me to design my site in Figma due to the lack of direction. However, once I had a clearer idea of what I wanted to draw inspiration from, it became a lot easier to design the layout for my site. This doesn't mean it was a particularly 'easy' task, but its difficulty was alleviated by my prior preparations. Eventually, as I became more familiar with the project, working in Figma started to feel much more comfortable and natural.</p>

                <p>Since designing is a very broad topic to discuss, I'll split the explanation into different subdivisions. One will explain the technical aspects, going through the entire design process and providing an in-depth explanation of each phase. The other will explain my philosophy behind designing the mobile and desktop viewports for the site.</p>

                <h2 className="blog-subheader-text">TECHNICAL ASPECTS</h2>
                <p>For me personally, it's easier to design when I break my design process into different phases. It allows me to stay organized and keep track of the progress I've made so far. I like to call this type of framework a 'Phase-Based Design Process'. There's probably a formal term for it, but this is how I'd like to refer to it. This also makes my design process much easier to explain without saying things like 'I chose this color because it looked good 🤪'. </p>

                <p className="font-bold text-secondary-blue mt-6">First Phase - Designing the Initial Home Layout:</p>
                <p>In the first phase, I decided to design from the ground up. This meant initially designing the background and the taskbar for the site. This was fairly easy, as I already had a solid framework for what I wanted based on the inspirations I gathered in Milanote.</p>

                <p>However, designing the background was tricky because I didn't want a flashy or distracting background. At the same time, I still wanted it to be interactive and aesthetically pleasing. This led me to create multiple prototypes to see which version would fit the site best. To decide which version I should use, I asked one of my front-end developer friends for his input. He said he liked the first version the best, so I settled and followed along with what he said! (attach image showcase here).</p>

                <p>Truth be told, I'm not actually a great designer. But instead of trying to mask this fact, I opted to get assistance and look for someone who DOES know how to design. This is something I believe you should follow too if you're not particularly great at designing like me! Always look for help in areas where you're not exactly confident at. Of course, this doesn't mean you have to delegate all your issues to other people. And perhaps you don't have any easily available compatriots who can assist you. But I do want you to consider the idea, as I truly believe that being some kind of one-man army or 10x developer will always lead you to have a weak point.</p>

                <p className="font-bold text-secondary-blue mt-6">Second Phase - Styling of Base 'Tabs':</p>
                <p>In this phase, I focused on refining the look of the tabs. As stated before, because it is the crux of the site, it was really important for me to get the design implemented correctly.</p>

                <p>At first, I ended up creating the home tab as a reference point for all the other tabs. Of course, I need to design the tab container, which will store all the contents inside that tab. For this, I decided to copy shar's style, but add a tab icon at the top left along with the tab name. </p>

                <p>Now that I've designed the container, I can move on to the actual contents for the home tab. I knew I wanted it to serve as the main navigation and landing page for the site. This meant that I needed it to hold all of my basic information while also acting as a way to navigate through all the other tabs. For the layout design, I once again took inspiration from shar's site. However, I decided to add a twist by including my profile picture. I know it might seem "uninspired", but it was really hard for me to reimagine this without sacrificing mobile-friendly support. I'm sure it's possible, but I just couldn't find a way to do it without sacrificing either the tab functionality or mobile accessibility. </p>

                <p>Once I completed the design for the home tab layout, I created a tab template based on it. It contained the fonts, color scheme, general tab layout, and consistent icon/image sizes if I ever needed them. This ensured that design elements such as the color palette and fonts wouldn't change drastically throughout the site. However, I did deviate a bit with the font sizes for some sections. But for the most part, the sizes did stay consistent throughout all the tabs.</p>

                <p className="font-bold text-secondary-blue mt-6">Third Phase - Creation of Remaining Tabs:</p>
                <p>Afterwards, I was able to design the rest of the tabs based on my template and design inspirations. Each of these tabs would have the same 'tab' design as each other (with one exception); however, they would differ in terms of their content.</p>

                <ul className="list-disc list-inside -space-y-0.5 my-6 marker:black">
                    <li style={{color: "black", fontWeight: "bold"}}>About Me:</li>
                        <p className='mt-2'>For this tab, I ended up taking inspiration from <span className='font-bold'>(*ring ring*)</span>, oh can you guess who? It's from shar! Now, I only really needed the content layout from her, so things like Education, General Information, and Interests were taken. Afterwards, I just designed the layout of the page and filled it with all the relevant information.</p>
                    <li style={{color: "black", fontWeight: "bold"}}>Socials:</li>
                        <p className='mt-2'>For my socials, I tried not to make anything too complex, and opted to just do a simple page displaying all my socials in a grid format. Yeah, there's not much to say here lowkey.</p>
                    <li style={{color: "black", fontWeight: "bold"}}>Contact:</li>
                        <p className='mt-2'>One thing I knew I definitely wanted in my contacts tab was a contact form where people could send me an email through the site. For the design, I took inspiration from Wix sites and how they designed their own contact form. The only things I really changed were the contents and structure of the message itself. </p>

                        <p className='mt-2'>One thing I do want to mention is that there are technical cons of a contact form, but I'm implementing one for the sake of learning how to build it. Because of these technical cons, I did decide to put my email on the contact tab just in case the form doesn't work.</p>
                    <li style={{color: "black", fontWeight: "bold"}}>Message Board:</li>
                        <p className='mt-2'>Based on the inspirations I gathered from the indie web, I had a point of reference for designing my message board. For the design itself, I decided to just copy how other sites did it. However, in terms of inputs, I knew for sure that I wanted to keep the anonymity of my users and allow them to post messages on the site. I didn't really want users to sign-up before they could post for a multitude of reasons, mostly due to the inconvenience it would cause.</p>
                    <li style={{color: "black", fontWeight: "bold"}}>Blogs:</li>
                        <p className='mt-2'>For the Blogs, I took inspiration from numerous web developer blogs and incorporated aspects that I wanted for my own site. This is how I managed to come up with the layout for the site. One additional feature I knew I needed for the blogs was a filtering system. Considering this system needs to be scalable, it was very important for me to ensure users can select what kind of posts they want to see.</p>
                    <li style={{color: "black", fontWeight: "bold"}}>Pop-Up Tabs:</li>
                        <p className='mt-2'>For some of these tabs, I wanted a way to confirm that a user's actions have been successfully registered. That's where pop-up tabs come in! </p>

                        <p className='mt-2'>This is actually an idea I saw from shar, but the feature itself was discontinued when she deployed her site. So, I decided to take that idea and go the extra mile with it. </p>

                        <p className='mt-2'>I figured that, since this was a pop-up, it would be best to differentiate it heavily from the other tabs. I thought the best way to differentiate them would be to make their background color different from the usual tabs. That way, the contrast catches the user's attention immediately and makes them acknowledge the information presented.</p>
                </ul>

                <p className="font-bold text-secondary-blue mt-6">Fourth Phase - Finalization and Polish:</p>
                <p>Finally, in the last phase I chose to clean up whatever work was still needed. For example, I finished designing my credits.txt and fully locked in my background design. I also applied any further revisions I deemed necessary for the site that I had neglected to address until now.</p>


                <h2 className="blog-subheader-text">MOBILE & DESKTOP</h2>
                <p>Lastly, I decided to design my site desktop-first rather than using the usual mobile-first approach. Usually, this would actually be a big mistake. However, since the site's features were catered towards desktop users, I elected to design the desktop first, then convert the design to mobile in Figma. </p>

                <p>For the mobile design, I ended up following shar's implementation of it on her site. Instead of the site simply becoming a smaller version of the desktop-application, it actually becomes a phone! I think this is extremely intuitive and creative. Instead of trying to fight my design architecture against the dimensions of a phone, we just go with the flow and play to its own strengths! </p>
            </div>

            {/* Conclusion */}
            <div className='blog-section'>
                <h1 className="blog-header-text">Conclusion:</h1>
                <p>Overall, the design process took around a week of constant work. This wasn't just some overnight project, but it was the result of hard labor and determination. If I had taken shortcuts along the way, I imagine the website wouldn't have looked as good as it does right now.</p>

                <p>You shouldn't rush the process. Allow yourself to take inspiration and further expound on your ideas. Let those ideas simmer in, and they'll take form into something beautiful!</p>
            </div>
        </>
    )
}

export default BlogPost_1