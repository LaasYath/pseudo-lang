# pseudo-lang
Pseudocode based programming language to make coding easier.

## Goals
The aim of this project is to create a programming language that works like pseudocode. The user will write out their code in human-readable, written english language format. Our application will then execute the user's intended program. 

### Example #01

##### Code
`write a for loop that prints out numbers one through ten`

#### Output
1, 2, 3, 4, 5, 6, 7, 8, 9, 10

### Example #02

##### Code
`write a for loop that prints out numbers one through ten using a space delimeter`

#### Output
1 2 3 4 5 6 7 8 9 10

## Features
This project will include an IDE mobile application that will exectue the program, similar to replit. There will be a scorllable text input area for users to type in their code. Similar to many popular IDEs, the language will highlight key words in specific colors. 
Additionally, there will be a seperate, closable window to display the output. Users can toggle the code and output windows off and on depending on their preference.

## Architecture
Front End:
  - Shell Screen: the closable window where the user can type in their pseudocode
  - Console Screen: the closable output window where the user is able to see their executed code
  - Run Button: on press, activates interpretation and execution of the code written in the shell
  - Sign up (popup, multifactor authentication) and Login screen for different users
    
Back End:
  - Keyword Identifier Module: identifies the keywords that the user types in, such as "delimeter" or "for loop"
  - Interpreter Module: interprets the pseudocode
      - Lexer: turns the sequence of characters in the pseudocode into a sequence of tokens
      - Parser: takes the sequence of tokens and produces an abstract syntax tree 
      - Evaulator: interprets the abstract syntax tree
  - Execute Function: executes the user's interpreted pseudocode and displays output in the Console Screen

[Information Architecture Diagram](https://drive.google.com/file/d/1d2IKkDyWzLPYZAHCXZtWIXqcXWp2qCur/view?usp=sharing)

[Building a Programming Language Research Notes](https://docs.google.com/document/d/1SLT90jQl-iRvA23UEoeeupDzGcabtjoO18C-yLMwea4/edit?usp=sharing)

## Contributors
- Adya Bharadwaj
- Crystal Wang
- Laasya Yatham

&copy; 2025 Adya Bharadwaj, Crystal Wang, Laasya Yatham. All rights reserved.

[Markdown Guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

[Personal Reference Back4App Accounts](https://drive.google.com/file/d/1tl7M7oY55HGMf1bbt9pbQQmOpnXIppyo/view?usp=sharing)

