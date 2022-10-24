# How I worked on this project

My goal was to create a personal portfolio to showcase my developer work.

- I built this site based on my Figma designs: <a href="https://www.figma.com/file/1YmYQG7rlm7gCoiEjQioRo/My-Portfolio-Page?node-id=0%3A1">Figma File</a>
- I used GitHub desktop to for version control.

# How to navigate this project

 - Simple stateful logic: <a href="https://github.com/leodeleonkc/portfolio/blob/23b64db0c4b41e1ba9adec6b8919cab3154db453/my-app/src/components/Projects.js#L13">Sample Code</a>
 - Responsive CSS: <a href="https://github.com/leodeleonkc/portfolio/blob/23b64db0c4b41e1ba9adec6b8919cab3154db453/my-app/src/App.css">Sample Code</a>
 - useEffect animate-in on scroll: <a href="https://github.com/leodeleonkc/portfolio/blob/23b64db0c4b41e1ba9adec6b8919cab3154db453/my-app/src/components/Hero.js">Sample Code</a>
 
 # Why I built the project this way
 
 - Afer one week of React training, I felt that I was ready to build this project. There aren't any complexities in terms of the framework that would differ all that much from a simple HTML/CSS/JS site. Any useState complexity was added later on once I had deepened my knowledge.
 
 - It was very important to me that this site was perfectly responsive, and taking into consideration the fact that it is likely being viewed on mobile and tablet a good percentage of the time, I made some creative choices around that. For example, the showcase videos for each project are purposedly produced in 1:1 ratio, which allows for more screen usage when playing the video.
 
 - I wanted to create something simple, but well made, clean and to the point. My goal is that I can showcase my skills in a compelling manner without many distractions and to make it easy for potential employers to contact me.
 
 # If I had more time I would change this
 
 - I would definitely break up the global CSS file into component-specific files, or better yet, use styled-components.
 - I would use less CSS for certain functionality, such as the hamburger menu on mobile and use more state.
