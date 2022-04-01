# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Gregory Kersey

Time spent: 16 hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)

The following **additional** features are implemented:

- [X] Added hearts that disappear as they lose lives (make incorrect guesses)
- [X] Used a method to create random number which randomized which button was next
- [X] Changed the background and font colors
- [X] Added emoticons next to the rules, to aid the visual elements

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![X] https://cdn.glitch.global/95897835-6d03-4287-b994-7514b61b22a8/ProjectGIF_Kersey.gif?v=1648682777010



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    - https://emoji-css.afeld.me/
    - https://www.w3schools.com/JS/js_random.asp
    - https://stackoverflow.com/questions/17386168/how-to-create-a-heart-shape-using-css
    

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

To be forthright, the hardest challenge I encountered while creating this project was trying to create a second level. 
I could code it correctly to show a second button, “Level Two”, and for it to be hidden until the loser won the game for the first level. 
Unfortunately, I was unsuccessful in getting the second level to play all the sounds like the first level. 
Instead, it would only play either sound or all the sounds in a row and do nothing else. 
I have learned a lot about HTML, CSS, and JS from this and am going to continue trying to get that second level
because that would take this game to the next step.

I think the next biggest issue for me, which I overcame, was the hearts. 
In the beginning I could not get the if statement correct i.e., when they got one mistake it should take away one heart. 
Instead, it was taking away two hearts for one mistake and never quitting the game, no matter how many mistakes they had. 
This was an easy fix: I had a good a good night’s sleep and went back to the drawing board. 
In the morning, I could figure out the correct if statement through some trial and error. 
After getting the if statement correctly, I had to build the hearts and create a method to hide the hearts whenever I get a new strike. 
This was also complicated, mainly the styling with the CSS, 
but I could correctly attach the Hearts to the Strikes and the Hidden class after some trial and error.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I would be interested to see how to build websites and connect them to databases, and how to query databases for data.
Some topics that interest me are how to get the background to change colors every so often, or how to make the buttons change colors or even shapes, if that is possible?
How do we setup user authentication within a webpage and keep it compliant with industry standards?
Apple’s website has always particularly interested me. The elements of the webpage seem to flow so nicely into each other, so I would be particularly interested in how to build a webpage like that.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours to work on this project, I would certainly pursue the levels aspect of the game. 
I wanted my level two to speed up after each round. 
I could still implement the speeding up aspect into the game, but I wanted to add more buttons and a longer pattern, something like 16 sounds. 
Sadly, I could not get the game to work on level two and had to postpone the idea in order to get the project done. 
I was also going to pursue a level three, which, like the level two, sped up after each round but it also hid the buttons that were lighting up after being 50% through the pattern. 
I could get this aspect working a few times, but something else always went wrong, such as the pattern cutting off or just not playing. 
Therefore, like level two, I also abandoned level three, but this time I chose not to include that aspect in the game at all.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.youtube.com/watch?v=KP3QJvWKGk4)

## License

    Copyright Gregory Kersey

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.